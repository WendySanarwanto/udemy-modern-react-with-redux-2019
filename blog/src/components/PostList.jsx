import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchPostsAndUsers } from "../actions";
import UserHeader from "./UserHeader";

class PostList extends Component {
  componentDidMount() {
    const { fetchPostsAndUsers } = this.props;
    fetchPostsAndUsers();
  }

  renderList = posts => {
    if (!posts) {
      return <div>Loading Posts ...</div>;
    }

    const postItemsList = posts.map(post => {
      const { id, userId, title, body } = post;
      return (
        <div className="item" key={id}>
          <i className="large middle aligned icon user" />
          <div className="content">
            <div className="description">
              {/* <header className="header">{ title }</header> */}
              <h2>{title}</h2>
              <p>{body}</p>
              <UserHeader userId={userId} />
            </div>
          </div>
        </div>
      );
    });

    return postItemsList;
  };

  render() {
    const { posts } = this.props;

    return (
      <div className="ui relaxed divided list">{this.renderList(posts)}</div>
    );
  }
}

function mapStateToProps(state) {
  // console.log(`state: \n`, state);
  return {
    posts: state.posts
  };
}

export default connect(
  mapStateToProps,
  { fetchPostsAndUsers }
)(PostList);
