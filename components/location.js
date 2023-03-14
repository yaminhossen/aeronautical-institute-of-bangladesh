import React from 'react';
import styles from '@/styles/Home.module.css'

const location = () => {
    return (
        <section className={styles.locationSection}>
            <div className={styles.locationImage}>
                <div className={styles.location}>
                    <div className={styles.locationInfo}>
                        <h2>Locate Us</h2>
                        <div className={styles.locationBorder}></div>
                        <p>Address: House #21, Road# 01, Sector#13, Uttara Model Town, Dhaka-1230, Bangladesh.</p>
                        <p>Email: aib.info08@gmail.com, info@aib.edu.bd</p>
                        <div className={styles.locationHotline}>
                            <p>Hotline:</p>
                            <div>
                                <p> +88 02 028991085,</p>
                                <p> +8801940100100,</p>
                                <p> +88 01742395177</p>
                            </div>
                        </div>

                    </div>
                    <div>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7297.063562025259!2d90.39001457087969!3d23.870754655522227!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c417b8377517%3A0x1dd39a40a077e6e1!2sAeronautical%20Institute%20of%20Bangladesh!5e0!3m2!1sen!2sbd!4v1678612763137!5m2!1sen!2sbd" width="800" height="400" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default location;