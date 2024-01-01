import React, { useState } from 'react'
import styles from '../styles/Slider.module.scss'

const Slider = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const imageUrls = [
    {
      image: "https://images.unsplash.com/photo-1608592077365-c6399182e63c?w=950"
    },
    {
      image: "https://images.unsplash.com/photo-1536257104079-aa99c6460a5a?w=950"
    }, {
      image: "https://images.unsplash.com/photo-1516298773066-c48f8e9bd92b?w=950"
    }
  ];
  let totalSlides = imageUrls.length;

  const handleNextClick = () => {
    setActiveSlide(activeSlide === totalSlides - 1 ? 0 : activeSlide + 1);
  }

  const handlePrevClick = () => {
    setActiveSlide(activeSlide === 0 ? totalSlides - 1 : activeSlide - 1);
  }

  return (
    <div className={styles.slider}>
      <div className={styles.slides}>
        {imageUrls.map((slide, index) => {
          return (<div className={`${styles.slide} ${activeSlide === index ? styles.active : ''}`} key={index}>
            <img src={slide.image} alt="slide" />
          </div>)
        })}
      </div>
      <div className={`${styles.arrow} ${styles.next}`} onClick={handleNextClick}></div>
      <div className={`${styles.arrow} ${styles.prev}`} onClick={handlePrevClick}></div>
    </div>
  )
}

export default Slider