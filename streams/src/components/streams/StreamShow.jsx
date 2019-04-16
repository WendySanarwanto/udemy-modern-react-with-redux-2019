import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions/index';

class StreamShow extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.fetchStream(id);
  }

  render() {
    if (!this.props.stream) return <div>Loading ...</div>;
    const { title, description } = this.props.stream;

    return (      
      <div>
        <div className="ui embed">
          <iframe src="" title={ title } />
        </div>
        <div className="ui segment">
          <h4 className="ui header">{ title }</h4>
          <p>{ description }</p>
        </div>
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

export default connect(mapStateToProps, { fetchStream })(StreamShow);