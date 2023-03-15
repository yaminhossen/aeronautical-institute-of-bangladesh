import Image from 'next/image';
import { useState } from 'react';
import styles from '@/styles/Home.module.css'

const images = [
    { src: '/image (1).jpg', alt: 'Image 1' },
    { src: '/image (6).jpg', alt: 'Image 2' },
    { src: '/image (3).jpg', alt: 'Image 3' },
    { src: '/image (4).jpg', alt: 'Image 4' },
    { src: '/image (5).jpg', alt: 'Image 5' },
    { src: '/image (6).jpg', alt: 'Image 6' },
    { src: '/image (2).jpg', alt: 'Image 7' },
    { src: '/image (7).jpg', alt: 'Image 8' },
    { src: '/image (11).jpg', alt: 'Image 9' },
];

const swiper = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageClick = (image) => {
        setSelectedImage(image);
    };

    return (
        <div className={styles.swipers}>
            <h1>Gallery</h1>
            {selectedImage && (
                <div className={styles.swiper}>
                    <div className={styles.content}>

                        <Image className={styles.swiperImg} src={selectedImage.src} alt={selectedImage.alt} width={500} height={500} />
                        <button onClick={() => setSelectedImage(null)}><i class="fa-solid fa-xmark"></i></button>
                    </div>
                </div>
            )}
            <div className={styles.swipGallery}>

                <div>
                    <h2>Images</h2>
                    <div className={styles.swipImage}>

                        {images.map((image, index) => (
                            <div key={index}>
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    width={250}
                                    height={200}
                                    onClick={() => handleImageClick(image)}
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <h2>Video</h2>
                    <div className={styles.swipVideo}>

                        {images.slice(0, 3).map((image, index) => (
                            <div key={index}>
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    width={400}
                                    height={200}
                                    onClick={() => handleImageClick(image)}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default swiper;
