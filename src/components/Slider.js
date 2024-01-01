import React from 'react'
import styles from '../styles/Slider.module.scss'

const Slider = () => {
  return (
    <div className={styles.slider}>
      <div className={styles.slides}>
        <div className={styles.slide}>
          <img src="https://images.unsplash.com/photo-1608592077365-c6399182e63c?w=950" alt="slide" />
        </div>
      </div>
      <div className={`${styles.arrow} ${styles.next}`}>

      </div>
      <div className={`${styles.arrow} ${styles.prev}`}>

      </div>
    </div>
  )
}

export default Slider