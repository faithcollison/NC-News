import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

import { getTopics } from "../api";

export const Filter = ({ searchParams, setFilter }) => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    getTopics().then((data) => {
      const topicList = data.map((topic) => {
        return topic.slug;
      });
      setTopics(topicList);
    });
  }, []);

  const handleTopicSelect = (topic) => {
    setFilter(topic);
    searchParams.set("topic", topic);
  };

  return (
    <div className="filter-bar">
      <ul>
        {topics.map((topic) => (
          <Link key={topic} to={`/articles?topic=${topic}`}>
            <li className="filter-bar-item" key={topic}>
              <Button variant="dark" onClick={() => handleTopicSelect(topic)}>
                {topic}
              </Button>{" "}
            </li>
          </Link>
        ))}
        <Link to={`/articles`}>
          <li className="filter-bar-item">
            <Button variant="dark" onClick={() => handleTopicSelect()}>
              none{" "}
            </Button>{" "}
          </li>
        </Link>
      </ul>
    </div>
  );
};


