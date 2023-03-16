import React from 'react';
import styles from '@/styles/Home.module.css'

const featured = () => {
    return (
        <section id='feature' className={styles.featured}>
            <div className={styles.featuredDetail}>
                <div className={styles.featuredImage}>
                    <img src="/airplane2.jpg" alt="" />
                </div>
                <div className={styles.featuredInfo}>
                    <h1>Aircraft Maintenance Engineering</h1>
                    <h3>Featured Courses</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, aperiam atque voluptate tempore, eum, vitae magni voluptates laborum consequuntur ipsum perspiciatis iste sunt beatae quis?</p>
                    <h2>Learining Outcomes</h2>
                    <p><span className={styles.featuredIcon}><i class="fa-solid fa-check-double"></i></span> Over 39 Lectures And 55 Hours of Content!</p>
                    <p><span className={styles.featuredIcon}><i class="fa-solid fa-check-double"></i></span> Testing Training Included.</p>
                    <p><span className={styles.featuredIcon}><i class="fa-solid fa-check-double"></i></span> Course Content Designed By Considering Current Software Testing</p>
                    <p><span className={styles.featuredIcon}><i class="fa-solid fa-check-double"></i></span> Practical Assignments At The End Of Every Session.</p>
                    <div className={styles.featuredbtn}>
                        <a href='#'>Enroll now</a>
                    </div>
                    <div className={styles.featuredBorder}></div>
                    <div className={styles.featuredAuthor}>
                        <div>
                            <h4>Author</h4>
                            <h5>Devid Honey</h5>
                        </div>
                        <div className={styles.authorBorder}></div>
                        <div>
                            <h4>Students Enrolled</h4>
                            <h5>5554</h5>
                        </div>
                        <div className={styles.authorBorder}></div>
                        <div className={styles.authorRatings}>
                            <h4>Rating</h4>
                            <div className={styles.authorIcon}>
                                <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default featured;