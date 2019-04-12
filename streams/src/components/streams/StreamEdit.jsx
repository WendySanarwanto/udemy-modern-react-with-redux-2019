import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import { editStream, fetchStream } from '../../actions';

class StreamEdit extends Component {
  componentDidMount() {
    this.props.fetchStream(this.props.selectedStream.id);
  }

  onSubmit = (event) => {
    event.preventDefault();
    const { match, selectedStream } = this.props;
    const { title, description } = selectedStream;
    const id = match && match.params ? match.params.id : null;
    this.props.editStream(id, title, description );
  }

  renderError = ({ error, touched }) => {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header"> { error } </div>
        </div>
      );
    }
  }

  renderInput = ({ input, label, meta, value }) => {
    // console.log(`formProps: \n`, formProps);;
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
    return (
      <div className={ className }>
        <label>{ label }</label>
        <input {...input} autoComplete="off" value={ value ? value : '' }/>
        { this.renderError(meta) }
      </div>
    );
  }
  
  render() {
    // if (!this.props.selectedStream) {
    //   return <div>Loading ...</div>;
    // }
    const { selectedStream } = this.props;
    const title = selectedStream !== null ? selectedStream.title : "";
    const description = selectedStream !== null ? selectedStream.description : "";
    // const { title, description } = selectedStream;
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui error form">
        <Field name="title" component={ this.renderInput } value={ title } label="Enter title: " />
        <Field name="description" component={ this.renderInput } value={ description } label="Enter description: " />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match && ownProps.match.params ? ownProps.match.params.id : null;
  let selectedStream;
  if (id !== null) {
    selectedStream = state.streams[id] ? state.streams[id] : null
  }
  return {
    selectedStream
  };
}

const validate = ({ title, description }) => {
  const errors = {};
  if ( (!title) || (title.trim() === '')) {
    errors.title = 'You must enter a title.';
  }

  if ( (!description) || (description.trim() === '') ) {
    errors.description = 'You must enter a description';
  }

  return errors; // return empty if all values are Ok.
}

const wrappedForm = reduxForm({
  form: 'streamEdit',
  validate
})(StreamEdit);

export default connect(mapStateToProps, { editStream, fetchStream })(wrappedForm);