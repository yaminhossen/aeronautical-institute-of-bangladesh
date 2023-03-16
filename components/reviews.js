import React from 'react';
import styles from '@/styles/Home.module.css'

const reviews = () => {
    return (
        <section className={styles.reviewsSection}>

            <h1>Students Reviews</h1>
            <div className={styles.reviewsBorders}>
                <div className={styles.reviewsBorder1}></div>
                <div className={styles.reviewsBorder2}></div>
            </div>
            <p className={styles.reviewsDescript}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt voluptas labore suscipit, ab recusandae ipsum nihil ea error nulla reiciendis veritatis animi hic vero? Itaque, voluptas fugiat.  Itaque, voluptas fugiat. Amet, consequuntur sint!</p>
            <div className={styles.reviews}>
                <div className={styles.review}>
                    <div className={styles.reviewImg}>
                        <img src="/student (1).jpg" alt="" />
                    </div>
                    <div className={styles.reviewDetails}>
                        <p>Avionics courses can be challenging, but rewarding for students passionate about aviation and electronics. This is careers in the aviation and aerospace industries.</p>
                        <h3>Paul Druva</h3>
                        <div className={styles.reviewCourse}>
                            <p>Course</p>
                            <p>Avionics</p>
                        </div>
                    </div>
                </div>
                <div className={styles.review}>
                    <div className={styles.reviewImg}>
                        <img src="/student (2).jpg" alt="" />
                    </div>
                    <div className={styles.reviewDetails}>
                        <p>Aerospace courses cover a broad range of topics and rewarding for students interested in the field. They can prepare students for careers in aerospace engineering.</p>
                        <h3>Paul Druva</h3>
                        <div className={styles.reviewCourse}>
                            <p>Course</p>
                            <p>Aerospace</p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default reviews;