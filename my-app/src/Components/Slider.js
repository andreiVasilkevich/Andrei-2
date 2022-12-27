import React from 'react';
import { Carousel } from 'react-bootstrap';
import dragon from './../images/images.jpg'
import dragons from './../images/images1.jpg'
import dragonss from './../images/images2.jpg'


export default function Slider() {
  return (

    <Carousel>
      <Carousel.Item style={{ 'height': '600px' }} interval={1000}>
        <img
          className="d-block w-100"
          src={dragon}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ 'height': '650px' }} interval={1000}>
        <img
          className="d-block w-100"
          src={dragons}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ 'height': '600px' }} interval={1000}>
        <img
          className="d-block w-100"
          src={dragonss}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

  )
}
