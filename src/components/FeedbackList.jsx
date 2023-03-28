import FeedbackItem from "./FeedbackItem";

import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

const FeedbackList = () => {
  const { feedback } = useContext(FeedbackContext);

  return (
    <div className="feedback-list">
      {feedback.map((post) => (
        <FeedbackItem item={post} key={post.id} />
      ))}
    </div>
  );
};

export default FeedbackList;
