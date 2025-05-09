import React from "react";
import PropTypes from "prop-types";

export const CommentCard = ({ comment }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl p-5 border border-gray-200">
      <div className="flex items-center justify-between mb-2">
        <span className="text-blue-600 font-semibold text-lg">
          {comment.username}
        </span>
        <span className="text-gray-400 text-sm">
          {new Date(comment.createdAt).toLocaleDateString()}
        </span>
      </div>
      <p className="text-gray-700 text-base">{comment.content}</p>
    </div>
  );
};

CommentCard.propTypes = {
  comment: PropTypes.shape({
    username: PropTypes.string,
    content: PropTypes.string,
    createdAt: PropTypes.string,
  }),
};
