import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "react-bootstrap";

import { Collapsible, CommentAdder, CommentList, Error } from "./index";
import {
  incrVoteCount,
  decrVoteCount,
  getArticleComments,
  getArticleById,
} from "../api";

export const SingleArticle = () => {
  const [article, setArticle] = useState({});
  const [comments, setComments] = useState([]);
  const [votes, setVotes] = useState(0);
  const [apiError, setApiError] = useState(null);

  const { article_id } = useParams();
  const date = new Date(article.created_at).toString();
  const dateStr = date.replace(/\d+:\d+:\d+\sGMT.*/, "");

  const upVote = (article_id) => {
    setVotes((prevVotes) => prevVotes + 1);
    incrVoteCount(article_id).catch((err) => {
      setVotes((prevVotes) => prevVotes - 1);
      console.log("Request failed");
    });
  };
  const downVote = (article_id) => {
    setVotes((prevVotes) => prevVotes - 1);
    decrVoteCount(article_id).catch((err) => {
      setVotes((prevVotes) => prevVotes + 1);
      console.log("Request failed");
    });
  };

  useEffect(() => {
    getArticleById(article_id)
      .then((data) => {
        setArticle(data.article);
        setVotes(data.article.votes);
      })
      .catch((err) => {
        setApiError(err);
        setArticle({});
      });
  }, []);

  useEffect(() => {
    getArticleComments(article_id)
      .then((data) => {
        setComments(data.comments);
      })
      .catch((err) => {
        setApiError(err);
        setArticle({});
      });
  }, []);

  if (apiError) {
    return <Error message={apiError.message} />;
  }

  return (
    <div className="single-article-container">
      <Link className="link backwards-link" to="/articles">
        {" "}
        <h4> Back to all articles </h4>{" "}
      </Link>
      <div className="extra-text-info">
        <p> Written by {article.author} </p>
        <p> Created at {dateStr} </p>
      </div>
      <div>
        <h2 className="single-article-text"> {article.title} </h2>
        <p className="single-article-text"> {article.body} </p>
        <img className="single-article-img" src={article.article_img_url} />
      </div>
      <div className="votes-container">
        <div>
          <Button variant="info" onClick={() => upVote(article.article_id)}>
            ⬆{" "}
          </Button>{" "}
        </div>
        <div>
          <p> {votes} </p>
        </div>
        <div>
          <Button variant="info" onClick={() => downVote(article.article_id)}>
            ⬇{" "}
          </Button>{" "}
        </div>
      </div>
      <div className="comment-container">
        <CommentAdder
          article={article}
          article_id={article.article_id}
          setComments={setComments}
        />
        <p> {article.comment_count} Comments </p>
        <Collapsible descriptor="Comments" comments={comments}>
          <CommentList
            article={article}
            setComments={setComments}
            comments={comments}
          />
        </Collapsible>
      </div>
    </div>
  );
};


