import "react-toastify/dist/ReactToastify.css";
import { useContext } from "react";
import { toast } from "react-toastify";
import { Button } from "react-bootstrap";

import { deleteComment } from "../api";
import { UserContext } from "./contexts/UserContext";

const CommentItem = ({ article, comment, setComments }) => {
  const { user } = useContext(UserContext);
  const commentDate = new Date(comment.created_at).toString();
  const commentDateStr = commentDate.replace(/\d+:\d+:\d+\sGMT.*/, "");

  const handleDelete = (id) => {
    deleteComment(id)
      .then(() => {
        setComments((currComments) => {
          const updatedCommentList = currComments.filter(
            (comment) => comment.comment_id !== id
          );
          article.comment_count -= 1;
          toast.success("Your comment has been deleted", {
            position: toast.POSITION.TOP_CENTER,
          });
          return updatedCommentList;
        });
      })
      .catch((err) => {
        console.log(err);
        setComments((currComments) => {
          toast.error(
            "Message was not successfully deleted, please try again",
            {
              position: toast.POSITION.TOP_LEFT,
            }
          );
          return currComments;
        });
      });
  };

  return (
    <div>
      <div className="comment-item-info">
        <p>
          {" "}
          Written by {comment.author} at {commentDateStr}
        </p>
      </div>
      <p> {comment.body} </p>
      <div className="comment-votes-box">
        <p className="votes"> {comment.votes} votes </p>
        {comment.author === user ? (
          <>
            <Button
              variant="danger"
              onClick={() => handleDelete(comment.comment_id)}
            >
              Delete
            </Button>{" "}
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default CommentItem;
