import React from 'react';
import styles from '@/styles/Home.module.css'


const organization = () => {
    return (
        <section className={styles.organization}>
            <h2>MoU With Airlines</h2>
            <h3>Domestic Organization</h3>
            <div className={styles.logos}>
                <img src="/logo (1).png" alt="" />
                <img src="/logo (5).png" alt="" />
                <img src="/logo (4).png" alt="" />
                <img src="/logo (3).png" alt="" />
                <img src="/logo (2).png" alt="" />
                <img src="/logo (6).png" alt="" />
                <img src="/logo (7).png" alt="" />

            </div>
        </section>
    );
};

export default organization;