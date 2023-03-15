import React from 'react';
import styles from '@/styles/Home.module.css'
import Course from './course';

const arrays = [
    { id: 1, name: 'MUNIL DRUVA', course: 'Aviation Managment', img1: '/teacher (1).jpg', img2: '/course (2).jpg', price: 22, details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est eligendi voluptate expedita. Asperiores' },
    { id: 2, name: 'John Bravo', course: 'Cabin Crew & Airhostess', img1: '/teacher (2).jpg', img2: '/course (3).jpg', price: 22, details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est eligendi voluptate expedita. Asperiores' },
    { id: 3, name: 'Akua Paul', course: 'Reservation & e-Ticketing', img1: '/teacher (3).jpg', img2: '/course (1).jpg', price: 22, details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est eligendi voluptate expedita. Asperiores' },
]
const courses = () => {
    return (
        <section id='course' className={styles.coursesSection} >
            <div className={styles.coursesDetail}>
                <div className={styles.courseInfo}>
                    <h1>Popular Courses</h1>
                    <div className={styles.courseBorders}>
                        <div className={styles.courseBorder1}></div>
                        <div className={styles.courseBorder2}></div>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est eligendi voluptate expedita. Asperiores accusantium magni voluptatum sunt, quaerat saepe dolorum sint distinctio quia quasi sequi deleniti soluta odio sapiente, doloremque vitae esse amet et aperiam ex eligendi? Non, quo dolore.</p>
                </div>
                <div className={styles.courses}>
                    {arrays.map(array => <Course
                        key={array.id}
                        array={array}
                    ></Course>)}
                </div>
                <div className={styles.coursesButton}>
                    <a href='#' className={styles.coursesBtn}>All courses</a>
                </div>
            </div>
        </section>
    );
};

export default courses;