import React from 'react';
import Navbar from './navbar'
import Footer from './footer';
import styles from '@/styles/Home.module.css'

const layout = ({ children }) => {
    return (
        <div className={styles.sagir}>
            <Navbar />
            {children}
            <Footer />
        </div>
    );
};

export default layout;