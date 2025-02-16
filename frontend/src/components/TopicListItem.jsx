import React from "react";
import "../styles/TopicListItem.scss";

const TopicListItem = ({ topic }) => {
  console.log("📌 Rendering TopicListItem:", topic);
  
  if (!topic || !topic.title) {
    console.error("⚠️ topic.title is undefined in TopicListItem!");  
  return null;
}

  return <li className="topic-list__item">{topic.title}</li>;
};

export default TopicListItem;
