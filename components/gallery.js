import React from 'react';
import styles from '@/styles/Home.module.css'

const gallery = () => {
    return (
        <section className={styles.gallerySection}>
            <h1>Gallery</h1>
            <div className={styles.gallery}>

                <div className={styles.ggg}>
                    <h2>Image Gallery</h2>
                    <div className={styles.galleryImages}>
                        <div className={styles.galleryImagescol}>
                            <div className={styles.galleryImage}>
                                <img src="/image (1).jpg" alt="" />
                            </div>
                            <div className={styles.galleryImage}>
                                <img src="/image (6).jpg" alt="" />
                            </div>
                            <div className={styles.galleryImage}>
                                <img src="/image (3).jpg" alt="" />
                            </div>


                        </div>
                        <div className={styles.galleryImagescol}>
                            <div className={styles.galleryImage}>
                                <img src="/image (4).jpg" alt="" />
                            </div>
                            <div className={styles.galleryImage}>
                                <img src="/image (5).jpg" alt="" />
                            </div>
                            <div className={styles.galleryImage}>
                                <img src="/image (6).jpg" alt="" />
                            </div>

                        </div>
                        <div className={styles.galleryImagescol}>
                            <div className={styles.galleryImage}>
                                <img src="/image (2).jpg" alt="" />
                            </div>
                            <div className={styles.galleryImage}>
                                <img src="/image (7).jpg" alt="" />
                            </div>
                            <div className={styles.galleryImage}>
                                <img src="/image (11).jpg" alt="" />
                            </div>


                        </div>



                    </div>
                </div>
                <div className={styles.galleryVideos}>
                    <h2>Video Gallery</h2>
                    <div className={styles.videos}>
                        <div className={styles.galleryVideo}>
                            <img src="/image (3).jpg" alt="" />
                        </div>
                        <div className={styles.galleryVideo}>
                            <img src="/image (7).jpg" alt="" />
                        </div>
                        <div className={styles.galleryVideo}>
                            <img src="/image (4).jpg" alt="" />
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default gallery;