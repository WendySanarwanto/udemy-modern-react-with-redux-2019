import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchStreams } from '../../actions';
import { isArray } from 'util';

class StreamList extends Component {
  componentDidMount() {
    const { fetchStreams } = this.props;
    fetchStreams();
  }

  renderList = (streams) => {
    if ( !isArray(streams)) {
      return <div>Loading ...</div>
    }

    const streamsList = streams.map(_stream => {
      const { id, title, description } = _stream;
      return (
        <div key={ id } className="item">
          <i className="large middle aligned icon camera" />
          <div className="content">
            { title }
            <div className="description">{ description }</div>
          </div>
        </div>
      );
    });

    return streamsList;
  }

  render() {
    const { streams } = this.props;
    return (
      <div>
        <h2>Streams</h2>
        <div className="ui celled list">{this.renderList(streams)}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    streams: Object.values(state.streams)
  };
}

export default connect(
  mapStateToProps, 
  { fetchStreams }
)(StreamList);