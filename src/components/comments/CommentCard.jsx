import React from "react";
import PropTypes from "prop-types";

export const CommentCard = ({ comment }) => {
  return (
    <div className="bg-gray-200/80 backdrop-blur-md shadow-xl rounded-2xl p-6 border border-gray-300 transition-all">
      <div className="flex items-center justify-between mb-3">
        <span className="text-blue-700 font-semibold text-lg">
          {comment.username}
        </span>
        <span className="text-gray-500 text-sm">
          {new Date(comment.createdAt).toLocaleDateString()}
        </span>
      </div>
      <p className="text-gray-800 text-base leading-relaxed">
        {comment.content}
      </p>
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

