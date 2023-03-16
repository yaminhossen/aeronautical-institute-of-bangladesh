import React from 'react';
import styles from '@/styles/Home.module.css'

const introduction = () => {
    return (
        <section id='intro' className={styles.introSection}>
            <div className={styles.intro}>
                <div className={styles.image2}>
                    <img src="/Aib4.png" alt="" />
                </div>
                <div className={styles.introInfo2}>
                    <h2>INTRODUCTION</h2>
                    <h1>Life of Aeronautical Institute of Bangaladesh</h1>
                    <div className={styles.introBorders}>
                        <div className={styles.introBorder1}></div>
                        <div className={styles.introBorder2}></div>
                    </div>
                    <p className={styles.introDetail}>
                        Meritorious and hard-working students are the heart of AIB campus.Everyday students start their classes with hunger of knowledge as they are warrior of aviation sector of Bangladesh. In AIB, teachers share knowledge with students to help them to success in life and achieve their goals. Teacher and student have strong and friendly co-operation between them. Students relate their theoretical knowledge with practical situation and building various mind blowing projects with the help of teachers. They have participated in various competitions; specially in MIST, IUT, AIUB, Dhaka knowledge, AIB arranges various industrial visits all over the country; specially in Shahjalal International Airport.
                    </p>
                    <a href='#' className={styles.introBtn}>Read More</a>
                </div>
            </div>

        </section>
    );
};

export default introduction;