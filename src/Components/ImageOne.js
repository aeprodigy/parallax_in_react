import React from 'react'
import { Parallax } from 'react-parallax'
import image1 from '../img/01.jpg'


//Import statements are made above this line.
const ImageOne = () => {
  return (
    <Parallax className='image' bgImage={image1} strength={800}>
        <div className='content'>
            <span className='img-text'>Drive Your Dream Car</span>
        </div>
    </Parallax>
  )
}

export default ImageOne