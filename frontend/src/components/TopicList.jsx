import React from "react";
import TopicListItem from "./TopicListItem";
import "../styles/TopicList.scss";

const TopicList = ({ topics }) => {

  if (!topics || !Array.isArray(topics)) {
    console.error("⚠️ topics is undefined or not an array in TopicList!");
    return <p>No topics available.</p>;
  }

  return (
    <ul className="top-nav-bar__topic-list">
      {topics.map((topic) => (
        <TopicListItem key={topic.id} topic={topic} />
      ))}
    </ul>
  );
};

export default TopicList;
