import React from 'react';
import Link from 'next/link'
import Image from 'next/image';
import styles from '@/styles/Home.module.css'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faEnvelopeOpen, faMagnifyingGlass, faMap, faMapLocation, faPenToSquare, faPhoneFlip, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faUser, faPenToSquare, faMapLocation, faEnvelopeOpen, faPhoneFlip, faMagnifyingGlass);




const navbar = () => {
    return (
        <div className={styles.navbar}>
            <section className={styles.navbarUp}>
                <div className={styles.navinfobar}>
                    <div className={styles.navinfo}>
                        <h4><span className={styles.icon} ><i class="fa-solid fa-map-location"></i></span><span>ADDRESS</span></h4>
                        <p>Bangladesh, Dhaka-1230</p>
                    </div>
                    <div className={styles.navBorder}></div>
                    <div className={styles.navinfo}>
                        <h4><span className={styles.icon} ><i class="fa-solid fa-envelope-open"></i></span><span>EMAIL</span></h4>
                        <p>aib.info08@gmail.com</p>
                    </div>
                    <div className={styles.navBorder}></div>
                    <div className={styles.navinfo}>
                        <h4><span className={styles.icon} ><i class="fa-solid fa-phone-flip"></i></span><span>CONTUCT</span></h4>
                        <p>+88 02 028991085</p>
                    </div>
                </div>
                <div>
                    <button><span><FontAwesomeIcon className={styles.icon} icon="fa-solid fa-pen-to-square" /></span><span>Register</span></button>
                    <button><span><FontAwesomeIcon className={styles.icon} icon="fa-solid fa-user" /></span><span>Login</span></button>
                </div>
            </section>
            <section className={styles.navbarDown}>
                <div>
                    <Link href='/' className={styles.image}>
                        <Image
                            src="/AIB-Logo-2.png"
                            alt="My Image"
                            width={120}
                            height={80}
                        />
                        <h1>AIB</h1>
                    </Link>
                </div>
                <div className={styles.linkbar}>
                    <div className={styles.link}>
                        <p className={styles.ancor}>Home</p>
                        <p className={styles.ancor}>About Us</p>
                        <p className={styles.ancor}>CAAB Part-147</p>
                        <p className={styles.ancor}>BTEB Diploma</p>
                        <p className={styles.ancor}>Special Course</p>
                        <p className={styles.ancor}>Contuct</p>
                    </div>
                    <p className={styles.aicon} ><FontAwesomeIcon icon="fa-solid fa-magnifying-glass" /></p>
                </div>
            </section>
        </div>
    );
};

export default navbar;