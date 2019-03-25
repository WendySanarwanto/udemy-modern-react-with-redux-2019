import faker from 'faker';
import React from 'react';
import ReactDOM from 'react-dom';

import ApprovalCard from './ApprovalCard';
import CommentDetailComponent from './CommentDetail';

const NUMBER_OF_COMMENTS=10;

const App = () => {
  const comments = [];
  for(let i=0; i < NUMBER_OF_COMMENTS; i++) {
    comments.push({
      key: i+1,
      author: faker.name.firstName(),
      avatar: faker.image.avatar(),
      comment: faker.lorem.sentence(),
      date: faker.date.future()
    });
  }

  const commentElements = comments.map(_comment => {
    const { author, avatar, date, key } = _comment;
    return (
      <ApprovalCard key={key}>
        <CommentDetailComponent
          author={author}
          avatar={avatar}
          comment={_comment.comment} 
          date={date.toLocaleDateString()} />
      </ApprovalCard>
    );
  });

  return (
    <div className="ui container comments" style={ { marginTop: "3vh" } }>
      <h3 className="ui dividing header">Comments</h3>
      { commentElements }
    </div>
  );

}

ReactDOM.render(
  <App/>,
  document.querySelector('#root')
);