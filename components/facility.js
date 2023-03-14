import React from 'react';
import styles from '@/styles/Home.module.css'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';

library.add(faBookOpen);


const facility = () => {
    return (
        <section className={styles.facilitySection}>

            <div className={styles.verticalLine}>
                <div className={styles.facilityCourses}>
                    <div className={styles.facilityCourse}>
                        <div className={styles.facilityIcon1}>

                            <i class="fa-solid fa-chalkboard-user"></i>
                        </div>
                        <div className={styles.facilityInfo}>
                            <h3>Expert Faculty</h3>
                            <a href="#">Read More</a>
                        </div>
                    </div>
                    <div className={styles.facilityCourse}>
                        <div className={styles.facilityIcon2}>

                            <i class="fa-solid fa-laptop-code"></i>
                        </div>
                        <div className={styles.facilityInfo}>
                            <h3>Online Learning</h3>
                            <a href="#">Read More</a>
                        </div>
                    </div>
                    <div className={styles.facilityCourse}>
                        <div className={styles.facilityIcon3}>

                            <i class="fa-solid fa-graduation-cap"></i>
                        </div>
                        <div className={styles.facilityInfo}>
                            <h3>Scholarship</h3>
                            <a href="#">Read More</a>
                        </div>
                    </div>


                </div>
            </div>

        </section>
    );
};

export default facility;