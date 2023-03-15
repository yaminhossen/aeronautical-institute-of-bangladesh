import React from 'react';
import styles from '@/styles/Home.module.css'

const Footer = () => {
    return (
        <footer className={styles.footerSection}>
            <div className={styles.footerInfo}>
                <div className={styles.footerInfo1}>
                    <div className={styles.footerLogo}>
                        <img src="/AIB-Logo-2.png" alt="" />
                        <h3>Aeronautical Institute of Bangladesh</h3>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero quaerat dicta magnam similique eius assumenda consequatur.</p>
                    <div>
                        <i class="fa-brands fa-facebook"></i>
                        <i class="fa-brands fa-twitter"></i>
                        <i class="fa-brands fa-youtube"></i>
                        <i class="fa-brands fa-linkedin"></i>
                    </div>
                </div>
                <div className={styles.usefullLinks}>
                    <h3>Useful Link</h3>
                    <p><a href="#intro">About Us</a></p>
                    <p><a href="#dept">Departments</a></p>
                    <p><a href="#gallery">Gallery</a></p>
                    <p><a href="#course">Courses</a></p>
                    <p><a href="#notice">Events</a></p>

                </div>
                <div>
                    <h3>Courses</h3>
                    <p>Special Course</p>
                    <p>Diploma Course</p>
                    <p>Fresher Course</p>
                    <p>CAAB Part-147</p>
                </div>
                <div>
                    <h3>Contuct</h3>
                    <p>Address: Dhaka-1230, Bangladesh.</p>
                    <p>Email: info@aib.edu.bd</p>
                    <p>Hotline: +88 02 028991085</p>
                </div>

            </div>
            <div className={styles.footerBorder}></div>
            <div className={styles.copyrightInfo}>
                <div className={styles.copyright}>
                    <p>&copy; Copyright 2023.All Rights Reserved By <span className={styles.techpark}>Techpark Ltd.</span></p>
                    <div className={styles.terms}>
                        <p>TERMS OF USER</p>
                        <div className={styles.termsBorder}></div>
                        <p>LICENSE</p>
                        <div className={styles.termsBorder}></div>
                        <p>SUPPORT</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;