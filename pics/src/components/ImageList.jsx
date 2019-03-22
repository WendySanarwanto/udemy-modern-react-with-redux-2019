import './ImageList.css';
import ImageCard from './ImageCard';
import React from 'react';

const ImageList = (props) => {
  const { images } = props;
  // console.log(`images: \n`, images);
  const imagesListElement = images.map( image => <ImageCard key={ image.id } image={ image } /> );
  return <div className="image-list">{ imagesListElement }</div>
}

export default ImageList;
