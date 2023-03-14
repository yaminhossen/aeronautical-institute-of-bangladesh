import React from 'react';
import styles from '@/styles/Home.module.css'

const speciality = () => {
    return (
        <section className={styles.speciality}>
            <div className={styles.image3}>
                <img src="/airplane.jpg" alt="" />
            </div>
            <div className={styles.specialityInfo}>
                <h2>Why Chose Us</h2>
                <div className={styles.specialityBorders}>
                    <div className={styles.specialityBorder1}></div>
                    <div className={styles.specialityBorder2}></div>
                </div>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa numquam molestias sint nemo beatae! Et architecto consectetur dolorum dolor neque, similique ullam odit. Architecto consequatur cumque ad ab pariatur nesciunt ratione maiores ut est tempora! Minima dicta fuga doloremque commodi.</p>
                <div>
                    <div className={styles.specialCourse}>
                        <div className={styles.specialIcon}>
                            <i class="fa-solid fa-layer-group"></i>
                        </div>
                        <div>
                            <h2>Trending Courses</h2>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia eveniet quos, voluptatum pariatur exercitationem maiores aspernatur aliquam .</p>
                        </div>
                    </div>
                    <div className={styles.specialBorder4}></div>
                    <div className={styles.specialCourse}>
                        <div className={styles.specialIcon}><i class="fa-solid fa-book"></i>
                        </div>
                        <div>
                            <h2>Book & Library</h2>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia eveniet quos, voluptatum pariatur exercitationem maiores aspernatur aliquam .</p>
                        </div>
                    </div>
                    <div className={styles.specialBorder5}></div>
                    <div className={styles.specialCourse}>
                        <div className={styles.specialIcon}>
                            <i class="fa-solid fa-person-chalkboard"></i>
                        </div>
                        <div>
                            <h2>Certified Teacher</h2>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia eveniet quos, voluptatum pariatur exercitationem maiores aspernatur aliquam .</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default speciality;