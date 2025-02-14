import React from "react";
import "../styles/TopicListItem.scss";

const TopicListItem = ({ topicName }) => {
  return <li className="topic-list__item">{topicName}</li>;
};

export default TopicListItem;
