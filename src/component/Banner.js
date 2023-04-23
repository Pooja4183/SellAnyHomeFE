import { Carousel } from 'react-bootstrap';
import React from 'react';

const Banner = () => {
  return (
    <div style={{ marginTop: '4%' }}>
      <Carousel variant='dark'>
        <Carousel.Item>
          <img
            className='d-block w-100 imageHeight'
            src='https://i.pinimg.com/originals/a0/04/7c/a0047c6fbe7355ce655176da3b4cba5e.jpg'
            alt='First slide'
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100 imageHeight'
            src='https://mir-s3-cdn-cf.behance.net/project_modules/fs/78f4ea76446733.5c6a8a242ab78.jpg'
            alt='Second slide'
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100 imageHeight'
            src='https://cdn.shopify.com/s/files/1/0021/0970/2202/files/Blazers-Banner-A_2048x2048.jpg?v=1640431025'
            alt='Third slide'
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
