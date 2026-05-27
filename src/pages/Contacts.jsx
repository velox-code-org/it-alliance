import React from "react";
import ParallaxImageGallery from "../components/ParallaxImageGallery";
import {useRef, useEffect} from "react";
import {useLocation, Link} from "react-router-dom";
import logo from "../assets/images/LOGO_white.svg";
import {useSmoothScroll} from "../components/useSmoothScroll";
import PartnerForm from "../components/PartnerForm";
import SEO from "../components/SEO";
import styles from "./Contacts.module.scss";

function Contacts() {
    const feedbackRef = useSmoothScroll("#feedback-form", 100);
    const mapRef = useSmoothScroll("#maps", 100);
    const contactRef = useSmoothScroll("#contact", 100);

    const scrollToFeedback = () => {
        feedbackRef.current?.scrollIntoView({behavior: "smooth"});
    };

    return (
        <>
            <SEO title="Контакты IT Alliance | Офис в Москве, техническая поддержка" description="Контакты компании IT Alliance. Адрес: Москва, Ленинский проспект, 15A, Tower Central Park. Телефон: +7 (499) 322-25-03. Техподдержка: 8 (800) 533-98-17, support@it-alliance.ru. Форма обратной связи." keywords="контакты, адрес IT Alliance, телефон, email, техническая поддержка, обратная связь, IT компания Москва" url="https://it-alliance.ru/contacts"/>
            <div className={styles.contactsPage}>
                <main className={styles.main}>
                    <div className="container">
                        <div className="py-9">
                            <div className="page-header mx-auto">
                                <span className="corner-tl"></span>
                                <span className="corner-tr"></span>
                                <span className="corner-br"></span>
                                <span className="corner-bl"></span>
                                <h1 className="h2">МЫ РАДЫ ВСТРЕЧАМ</h1>
                                <div className="sub-heading">
                                    В НАШЕМ ОФИСЕ!
                                </div>
                            </div>
                        </div>
                    </div>
                    <section ref={contactRef} className={styles.contactSection}>
                        <div className={styles.officeCard}>
                            <h3 className="h3 mb-2">ГЛАВНЫЙ ОФИС</h3>
                            <p className="mb-2">
                                <b>Адрес: </b> Москва, Ленинский проспект, 15A, Tower Central Park </p>
                            <p className="mb-2">
                                <b>График работы:</b> 09:00 - 18:00 </p>
                            <p className="mb-2">
                                <b>Телефон:</b> +7 (499) 322-25-03 </p>
                            <p className="mb-2">
                                <b>Email:</b> info@it-alliance.ru </p>
                            <p className="mb-2">
                                <b>ИНН:</b> 9703158319 </p>
                            <p className="mb-2">
                                <b>ОГРН:</b> 1237700701886 </p>
                        </div>
                    </section>
                    {/* Карта */}
                    <section ref={mapRef} className={styles.mapSection}>
                        <div className={styles.mapWrapper}>
                            <a href="https://yandex.ru/maps/org/central_park_tower/1403355809/" className={styles.mapLink}>
                                Central Park Tower
                            </a>
                            <a href="https://yandex.ru/maps/213/moscow/category/sale_and_lease_of_commercial_real_estate/184107521/" className={styles.mapSubLink}>
                                Продажа и аренда коммерческой недвижимости в Москве
                            </a>
                            <iframe src="https://yandex.ru/map-widget/v1/org/central_park_tower/1403355809/?ll=37.600729%2C55.720905&z=16" width="100%" height="100%" frameBorder="0" allowFullScreen={true} className={styles.mapIframe} title="Карта расположения офиса"/>
                        </div>
                    </section>
                    <div className={styles.logoOverlay}>
                        <img src={logo} className={styles.logoOverlayImg} alt="logo"/>
                        <h1 className={styles.logoOverlayText}>
                            IT ALLIANCE </h1>
                    </div>
                    <div className={styles.galleryWrapper}>
                        <ParallaxImageGallery/>
                    </div>
                </main>
            </div>
        </>
    );
}

export default Contacts;