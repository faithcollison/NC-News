import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { getArticles } from "../api";
import { ArticleItem, Filter, SortArticles } from "./index";

export const ArticleList = () => {
  const searchParams = new URLSearchParams(window.location.search);

  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [filter, setFilter] = useState(searchParams.get("filter") || "");
  const [sortBy, setSortBy] = useState(searchParams.get("sort_by") || "");
  const [order, setOrder] = useState(searchParams.get("order") || "");

  useEffect(() => {
    getArticles(filter, sortBy, order)
      .then(({ articles }) => {
        setArticles(articles);
        setIsLoading(false);
        setIsError(false);
      })
      .catch((err) => {
        console.log(err);
        setIsError(true);
        setIsLoading(false);
      });
  }, [filter, sortBy, order]);

  if (isLoading) {
    return <h2> Loading... </h2>;
  }
  if (isError) {
    return (
      <div>
        <p> ERROR - Topic not found </p>
        <p> Please try again </p>
      </div>
    );
  }

  return (
    <div className="article-list-container">
      <Filter searchParams={searchParams} setFilter={setFilter} />
      <SortArticles
        searchParams={searchParams}
        setSortBy={setSortBy}
        setOrder={setOrder}
      />
      {articles.map((article) => {
        return (
          <Link
            className="link"
            key={article.article_id}
            to={`/articles/${article.article_id}`}
          >
            <ArticleItem key={article.article_id} article={article} />
          </Link>
        );
      })}
    </div>
  );
};


