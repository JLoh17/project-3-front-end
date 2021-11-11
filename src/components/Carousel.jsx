// App.js
import React from 'react'
import PropTypes from 'prop-types'
import Slider from 'react-slick'

const CompsCarousel = ({ images }) => {
  const settings = {
    customPaging(i) {
      return (
        <a className="productImgThumbnail">
          <img src={images[i].imageURL} />
        </a>
      )
    },
    dots: true,
    dotsClass: 'slick-dots slick-thumb',
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }

  return (
    <div id="comps-carousel" className="productCarouselSelected mb-5">
      <Slider {...settings}>
        {
          images.map((image) => (
            <div key={image.id}>
              <img className="productSelected" src={image.imageURL} />
            </div>
          ))
        }
      </Slider>
    </div>
  )
}

CompsCarousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape()).isRequired
}

export default CompsCarousel
