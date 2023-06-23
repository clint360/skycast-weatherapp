import React, { MouseEventHandler } from 'react';
import './ImageCircle.css'

type Props = { 
    src: string, 
    alt: string,
    onClick?: MouseEventHandler<HTMLDivElement> 
};

function ImageCircle({ src, alt, onClick} : Props) {
  return (
    <div className='imageCircle' onClick={onClick} >
      <img src={src} alt={alt} />
    </div>
  )
}

export default ImageCircle
