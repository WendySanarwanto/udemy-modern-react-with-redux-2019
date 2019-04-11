import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createStream } from '../../actions';

class StreamCreate extends Component {

  onSubmit = (formValues) => {
    this.props.createStream(formValues);
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

  renderInput = ({ input, label, meta }) => {
    // console.log(`formProps: \n`, formProps);;
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
    return (
      <div className={ className }>
        <label>{ label }</label>
        <input {...input} autoComplete="off"/>
        { this.renderError(meta) }
      </div>
    );
  }

  render() {
    // console.log(`this.props: \n`, this.props);
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui error form">
        <Field name="title" component={ this.renderInput } label="Enter title: " />
        <Field name="description" component={ this.renderInput } label="Enter description: " />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
};

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
  form: 'streamCreate',
  validate
})(StreamCreate);

export default connect(null, { createStream })(wrappedForm);