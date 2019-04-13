import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions/index';

class StreamShow extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.fetchStream(id);
  }

  render() {
    return (
      <div>
        StreamShow !
      </div>
    );
  }
}

const mapStateToProps =  (state, ownProps) => {
  const id = ownProps.match && ownProps.match.params ? ownProps.match.params.id : null;

  return {
    stream: state.streams[id]
  };
}

export default connect(mapStateToProps, fetchStream)(StreamShow);