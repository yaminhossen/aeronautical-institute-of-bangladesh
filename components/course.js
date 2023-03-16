import React from 'react';
import styles from '@/styles/Home.module.css'

const course = ({ array }) => {
    const { img1, name, course, img2, price, details } = array;
    return (
        <div className={styles.course}>
            <div className={styles.courseImage}>
                <img className={styles.courseImg1} src={img2} alt="" />
            </div>
            <div className={styles.coursePrice}>PRICE: {price} $</div>
            <div className={styles.courseTeacher}>
                <div className={styles.courseTeacherImg}>
                    <a href="#"><img src={img1} alt="" /></a>
                </div>
                <div>
                    <h4>{name}</h4>
                    <div className={styles.courseIcon}>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i> <span className={styles.courseRatings}>4.9 (134)</span>
                    </div>
                </div>
            </div>
            <h2><a href="#">{course}</a></h2>
            <div>

                <div className={styles.courseDetails}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque illo magni repudiandae, cum ab, assumenda harum labore.</div>
            </div>
            <div className={styles.courseBorder3}></div>
            <div className={styles.courseTime}>
                <div className={styles.timeClock}>
                    <div className={styles.user}>
                        <i class="fa-regular fa-user"></i> 6,690
                    </div>
                    <div className={styles.clock}>
                        <i class="fa-regular fa-clock"></i> 16:00
                    </div>
                </div>
                <div className={styles.courseEnroll}>
                    <a href='#'>ENROLL NOW</a>
                </div>
            </div>
        </div>
    );
};

export default course;