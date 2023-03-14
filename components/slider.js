import React from 'react';
import styles from '@/styles/Home.module.css'
import backgroundImage from '../public/Slider-2.jpg'

const slider = () => {
    return (
        <div className={styles.slider}>

            {/* <img src="/slider-2.jpg" alt="Slide 1" /> */}
            <div className={styles.sliderr}>
                <div className={styles.infoBanner}>
                    <div>
                        <h2>Admission is Goign On...</h2>
                        <h1>Build Your Career as an Aircraft <br /> Maintenance Engineering</h1>
                        <ul>
                            <li>Aerospace Engineering</li>
                            <li>Avionics Engineering</li>
                        </ul>
                    </div>
                    <div>
                        <button className={styles.btn1}>Click Here</button>
                        <button className={styles.btn2}>Click Here</button>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default slider;