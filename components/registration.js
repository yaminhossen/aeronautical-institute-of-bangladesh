import React from 'react';
import styles from '@/styles/Home.module.css'
import Image from 'next/image';
const registration = () => {
    return (
        <section className={styles.registrationSection}>
            <div className={styles.registration}>
                <div className={styles.registrationInfo}>
                    <h2 className={styles.registrationTitle}>Get a free online registration</h2>
                    <div className={styles.registrationBorders}>
                        <div className={styles.registrationBorder}></div>
                        <div className={styles.registrationBorder}></div>
                    </div>
                    <p>Lorems ipsum dolor sit amet consectetur, adipisicing elit. Unde possimus odio sequi in eveniet minima.</p>

                    <form action='#'>


                        <input type="text" name="fname" id="" placeholder='First Name' />
                        <br />
                        <input type="text" name="lname" id="" placeholder='Last Name' />

                        <br />
                        <input type="email" name="email" id="" placeholder='Enter Your Email' />
                        <br />
                        <input type="text" name="subject" id="" placeholder='Chose Subject' />
                        <br />
                        <input type="number" name="number" id="" placeholder='Phone' />
                        <br />
                        <div className={styles.registrationSubmit} >
                            <a href="#"><input type="submit" value="Register Now" /></a>
                        </div>
                    </form>

                </div>
                <div className={styles.registrationImage}>
                    <img alt="" />
                    <Image
                        src="/registration.png"
                        alt="My Image"
                        width={500}
                        height={550}
                    />
                </div>

            </div>
        </section>
    );
};

export default registration;