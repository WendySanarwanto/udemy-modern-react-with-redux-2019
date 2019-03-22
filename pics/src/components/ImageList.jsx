import React from 'react';

const ImageList = (props) => {
  const { images } = props;
  console.log(`images: \n`, images);
  return images.map( image => <img key={ image.id } src={image.urls.regular} alt={ image.description } /> );
}

export default ImageList;
