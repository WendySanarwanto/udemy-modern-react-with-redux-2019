import React, { Component } from 'react';
import { connect } from 'react-redux';

import Modal from '../Modal';
import history from '../../history';
import { deleteStream } from '../../actions';

class StreamDelete extends Component {

  onDeleteClicked = () => {
    const id = this.props.match.params.id;
    this.props.deleteStream(id);
  }

  onDismiss = () => {
    history.push('/');
  }

  renderActions = () => {
    return (
      <React.Fragment>
        <button className="ui button negative" onClick={ this.onDeleteClicked }>Delete</button>
        <button className="ui button" onClick={ this.onDismiss } >Cancel</button>
      </React.Fragment>
    );
  };
  
  render() {
    return (
      <div>
        StreamDelete
        <Modal title="Delete Stream" 
              content="Are you sure you want to delete this stream ?"
              actions={ this.renderActions() }
              onDismiss={ this.onDismiss }
              />
      </div>
    );
  }
}

export default connect(null, { deleteStream })(StreamDelete);