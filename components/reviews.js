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
                        <img src="/teacher (1).jpg" alt="" />
                    </div>
                    <div className={styles.reviewDetails}>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quod sequi eveniet natus odio cumque corrupti mollitia quisquam fugit fuga id labore, quas delectus dolorem voluptatum voluptate sapiente.</p>
                        <h3>Paul Druva</h3>
                        <div className={styles.reviewCourse}>
                            <p>Course</p>
                            <p>wev developer</p>
                        </div>
                    </div>
                </div>
                <div className={styles.review}>
                    <div className={styles.reviewImg}>
                        <img src="/teacher (2).jpg" alt="" />
                    </div>
                    <div className={styles.reviewDetails}>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quod sequi eveniet natus odio cumque corrupti mollitia quisquam fugit fuga id labore, quas delectus dolorem voluptatum voluptate sapiente.</p>
                        <h3>Paul Druva</h3>
                        <div className={styles.reviewCourse}>
                            <p>Course</p>
                            <p>wev developer</p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default reviews;