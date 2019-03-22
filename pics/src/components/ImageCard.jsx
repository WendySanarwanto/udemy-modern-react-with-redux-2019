import React, { Component } from 'react'

export default class ImageCard extends Component {
  render() {
    const { image } = this.props;

    return (
      <div>
        <img src={ image.urls.regular } alt={ image.description } />
      </div>
    )
  }
}
