import React from "react";

const CommentDetailComponent = ({ author, avatar, comment, date }) => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={ avatar }/>
      </a>
      <div className="content">
        <a href="/" className="author">
          { author }
        </a>
        <div className="metadata">
          <span className="date">{ date.toLocaleString() }</span>
        </div>
        <div className="text">{ comment }</div>
      </div>
    </div>
  );
};

export default CommentDetailComponent;