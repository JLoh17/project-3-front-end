// App.js
import React, { useState, useEffect } from 'react'
import Slider from 'react-slick'
import '../styles/CompsCarousel.scss'

// import React from 'react'
// import Slider from 'react-slick'
// import { baseUrl } from './config'

class CompsCarousel extends React.Component {
  render() {
    const settings = {
      customPaging(i) {
        return (
          <a className="productImgThumbnail">
            <img src={`https://www.hatsinthebelfry.com/media/amasty/webp/catalog/product/cache/7834fc1d76b8977f5ef381b2fc38fd7a/a/r/arpino0${i + 1}_jpg.webp`} />
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
      <div className="productCarouselSelected">
        <Slider {...settings}>
          <div>
            <img className="productSelected" src="https://www.hatsinthebelfry.com/media/amasty/webp/catalog/product/cache/7834fc1d76b8977f5ef381b2fc38fd7a/a/r/arpino01_jpg.webp" />
          </div>
          <div>
            <img className="productSelected" src="https://www.hatsinthebelfry.com/media/amasty/webp/catalog/product/cache/7834fc1d76b8977f5ef381b2fc38fd7a/a/r/arpino02_jpg.webp" />
          </div>
          <div>
            <img className="productSelected" src="https://www.hatsinthebelfry.com/media/amasty/webp/catalog/product/cache/7834fc1d76b8977f5ef381b2fc38fd7a/a/r/arpino03_jpg.webp" />
          </div>
          <div>
            <img className="productSelected" src="https://www.hatsinthebelfry.com/media/amasty/webp/catalog/product/cache/7834fc1d76b8977f5ef381b2fc38fd7a/a/r/arpino04_jpg.webp" />
          </div>
        </Slider>
      </div>
    )
  }
}
export default CompsCarousel

// function CompCarousel() {
//   const [nav1, setNav1] = useState(null)
//   const [nav2, setNav2] = useState(null)
//   const [slider1, setSlider1] = useState(null)
//   const [slider2, setSlider2] = useState(null)

//   useEffect(() => {
//     setNav1(slider1)
//     setNav2(slider2)
//   }, [])

//   const settingsMain = {
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: false,
//     fade: true,
//     asNavFor: '.slider-nav'
//   }

//   const settingsThumbs = {
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     asNavFor: '.slider-for',
//     dots: true,
//     centerMode: true,
//     swipeToSlide: true,
//     focusOnSelect: true,
//     centerPadding: '10px'
//   }

//   const slidesData = [
//     {
//       id: 1,
//       title: 'repellendus id ullam',
//       label: 'Dolorem officiis temporibus.'
//     }, {
//       id: 2,
//       title: 'excepturi consequatur est',
//       label: 'Officia non provident dolor esse et neque.'
//     }, {
//       id: 3,
//       title: 'eius doloribus blanditiis',
//       label: 'Ut recusandae vel vitae molestiae id soluta.'
//     }, {
//       id: 4,
//       title: 'nihil voluptates delectus',
//       label: 'Qui vel consequatur recusandae illo repellendus.'
//     }, {
//       id: 5,
//       title: 'nemo dolorem necessitatibus',
//       label: 'Placeat odit velit itaque voluptatem.'
//     }, {
//       id: 6,
//       title: 'dolorem quibusdam quasi',
//       label: 'Adipisci officiis repudiandae.'
//     }
//   ]

//   return (
//     <div className="ProductCarousel">
//       <div className="slider-wrapper">
//         <Slider
//           {...settingsMain}
//           asNavFor={nav2}
//           ref={(slider) => (setSlider1(slider))}
//         >
//           {
//             slidesData.map((slide) => (
//               <div className="slick-slide" key={slide.id}>
//                 <h2 className="slick-slide-title">{slide.title}</h2>
//                 <img className="slick-slide-image" src={`https://picsum.photos/800/400?img=${slide.id}`} />
//                 <label className="slick-slide-label">{slide.label}</label>
//               </div>
//             ))
//           }
//         </Slider>

//         <div className="thumbnail-slider-wrap">
//           <Slider
//             {...settingsThumbs}
//             asNavFor={nav1}
//             ref={(slider) => (setSlider2(slider))}
//           >
//             {
//               slidesData.map((slide) => (
//                 <div className="slick-slide" key={slide.id}>
//                   <img className="slick-slide-image" src={`https://picsum.photos/800/400?img=${slide.id}`} />
//                 </div>
//               ))
//             }
//           </Slider>
//         </div>
//       </div>

//     </div>
//   )
// }

// export default CompCarousel
