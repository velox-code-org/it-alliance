import { useState, useEffect, useRef } from 'react';
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
import logo from "../assets/images/LOGO_white.svg"

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
        <div ref={galleryRef} className='flex mt-12 sm:mt-14 md:mt-16 lg:mt-18 xl:mt-20 relative min-h-screen'>
            {/* УБРАЛИ логотип и текст отсюда */}
            
            {/* Левая колонка */}
            <div className='w-1/2 flex flex-col'>
                <div className="relative group cursor-pointer overflow-hidden flex-1">
                    <img
                        src={firstImage}
                        alt="Описание"
                        className="w-full h-full object-cover"
                    />
                    <img
                        src={firstColoredImage}
                        alt="Описание"
                        className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    />
                </div>

                <div className="relative group cursor-pointer overflow-hidden flex-1">
                    <img
                        src={secondImage}
                        alt="Описание"
                        className="w-full h-full object-cover"
                    />
                    <img
                        src={secondColoredImage}
                        alt="Описание"
                        className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    />
                </div>

                <div className="relative group cursor-pointer overflow-hidden flex-1">
                    <img
                        src={thirdImage}
                        alt="Описание"
                        className="w-full h-full object-cover"
                    />
                    <img
                        src={thirdColoredImage}
                        alt="Описание"
                        className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    />
                </div>
            </div>

            {/* Правая колонка */}
            <div className='w-1/2 flex flex-col'>
                <div className="relative group cursor-pointer overflow-hidden flex-1">
                    <img
                        src={fourthImage}
                        alt="Описание"
                        className="w-full h-full object-cover"
                    />
                    <img
                        src={fourthColoredImage}
                        alt="Описание"
                        className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    />
                </div>

                <div className="relative group cursor-pointer overflow-hidden flex-1">
                    <img
                        src={fifthImage}
                        alt="Описание"
                        className="w-full h-full object-cover"
                    />
                    <img
                        src={fifthColoredImage}
                        alt="Описание"
                        className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    />
                </div>

                <div className="relative group cursor-pointer overflow-hidden flex-1">
                    <img
                        src={sixthImage}
                        alt="Описание"
                        className="w-full h-full object-cover"
                    />
                    <img
                        src={sixthColoredImage}
                        alt="Описание"
                        className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    />
                </div>
            </div>
        </div>
    );
};

export default ParallaxImageGallery;