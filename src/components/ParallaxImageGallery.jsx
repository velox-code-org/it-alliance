import {useState, useEffect, useRef} from 'react';
import styles from './ParallaxImageGallery.module.scss';

import firstImage from './ContactImage/1.png'
import secondImage from './ContactImage/2.png'
import thirdImage from './ContactImage/3.png'
import fourthImage from './ContactImage/4.png'
import fifthImage from './ContactImage/5.png'
import sixthImage from './ContactImage/6.png'

import firstColoredImage from './ContactImage/colored/1.png'
import secondColoredImage from './ContactImage/colored/2.png'
import thirdColoredImage from './ContactImage/colored/3.png'
import fourthColoredImage from './ContactImage/colored/4.png'
import fifthColoredImage from './ContactImage/colored/5.png'
import sixthColoredImage from './ContactImage/colored/6.png'

const ParallaxImageGallery = () => {
    const [isVisible, setIsVisible] = useState(false);
    const galleryRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            {
                threshold: 0.1,
                rootMargin: '-10px 0px -10px 0px'
            }
        );

        if (galleryRef.current) {
            observer.observe(galleryRef.current);
        }

        return () => {
            if (galleryRef.current) {
                observer.unobserve(galleryRef.current);
            }
        };
    }, []);

    return (
        <div ref={galleryRef} className={styles.gallery}>
            {/* Левая колонка */}
            <div className={styles.columnLeft}>
                <div className={styles.imageWrapper}>
                    <img src={firstImage} alt="Описание" className={styles.image}/>
                    <img src={firstColoredImage} alt="Описание" className={styles.imageHover}/>
                </div>
                <div className={styles.imageWrapper}>
                    <img src={secondImage} alt="Описание" className={styles.image}/>
                    <img src={secondColoredImage} alt="Описание" className={styles.imageHover}/>
                </div>
                <div className={styles.imageWrapper}>
                    <img src={thirdImage} alt="Описание" className={styles.image}/>
                    <img src={thirdColoredImage} alt="Описание" className={styles.imageHover}/>
                </div>
            </div>
            {/* Правая колонка */}
            <div className={styles.columnRight}>
                <div className={styles.imageWrapper}>
                    <img src={fourthImage} alt="Описание" className={styles.image}/>
                    <img src={fourthColoredImage} alt="Описание" className={styles.imageHover}/>
                </div>
                <div className={styles.imageWrapper}>
                    <img src={fifthImage} alt="Описание" className={styles.image}/>
                    <img src={fifthColoredImage} alt="Описание" className={styles.imageHover}/>
                </div>
                <div className={styles.imageWrapper}>
                    <img src={sixthImage} alt="Описание" className={styles.image}/>
                    <img src={sixthColoredImage} alt="Описание" className={styles.imageHover}/>
                </div>
            </div>
        </div>
    );
};

export default ParallaxImageGallery;