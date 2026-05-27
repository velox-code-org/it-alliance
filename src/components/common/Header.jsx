// Header.jsx
import {Link, NavLink, useLocation} from "react-router-dom";
import {useState, useEffect} from "react";

import {LogoIcon} from "../icons";

import MenuIcon from "../icons/burger.svg";
import CloseIcon from "../icons/close.svg";

import styles from "./Header.module.scss";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null); // Состояние для открытого dropdown
    const location = useLocation();

    const links = [
        {path: "/#about-company", label: "О компании", hash: "about-company"},
        {path: "/#main-directions", label: "Основные направления", hash: "main-directions", hasDropdown: true},
        {path: "/#our-clients", label: "Клиенты", hash: "our-clients"},
        {path: "/#our-partners", label: "Партнеры", hash: "our-partners"},
        {path: "/contacts", label: "Контакты", hash: null},
    ];

    // Sub-menu items
    const subDirections = [
        {tab: 'foreign', label: 'Зарубежные решения'},
        {tab: 'russian', label: 'Отечественные решения'},
        {tab: 'cyber', label: 'Кибербезопасность'}
    ];

    // Функция для плавного скролла с учетом высоты хедера
    const smoothScrollTo = (elementId) => {
        const element = document.getElementById(elementId);
        if (element) {
            const header = document.querySelector('header');
            const headerHeight = header ? header.offsetHeight : 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    };

    // Определяем активную ссылку для секций на главной
    const isActiveSection = (hash) => {
        if (location.pathname !== "/") return false;
        if (!hash) return false;
        return window.location.hash === `#${hash}`;
    };

    // Скролл к секции при переходе с другой страницы
    useEffect(() => {
        if (location.hash) {
            const hash = location.hash.replace('#', '');
            setTimeout(() => {
                smoothScrollTo(hash);
            }, 100);
        }
    }, [location]);

    // Обработчик клика по ссылке с якорем
    const handleAnchorClick = (e, path, hash) => {
        if (path === "/" && hash) {
            e.preventDefault();

            if (location.pathname === "/") {
                smoothScrollTo(hash);
                window.history.pushState({}, "", `/#${hash}`);
            } else {
                window.location.href = `/#${hash}`;
            }
        }
    };

    // Обработчик клика по dropdown в мобильном меню
    const handleMobileDropdownClick = (e, linkPath) => {
        e.preventDefault();
        // Если кликнули по тому же пункту - закрываем, иначе открываем новый
        setOpenDropdown(openDropdown === linkPath ? null : linkPath);
    };

    // Обработчик клика по подпункту dropdown
    const handleSubTabClick = (e, tab) => {
        e.preventDefault();

        // Сохраняем активный таб в localStorage
        localStorage.setItem('directionsActiveTab', tab);

        // Триггерим событие storage для синхронизации
        window.dispatchEvent(new StorageEvent('storage', {
            key: 'directionsActiveTab',
            newValue: tab
        }));

        // Закрываем мобильное меню и dropdown
        setMenuOpen(false);
        setOpenDropdown(null);

        if (window.location.pathname === '/') {
            const element = document.getElementById('main-directions');
            if (element) {
                element.scrollIntoView({behavior: "smooth", block: "start"});
                window.history.pushState({}, "", "/#main-directions");
            }
        } else {
            window.location.href = '/#main-directions';
        }
    };

    return (
        <>
            <header className={styles.header}>
                <div className={styles.container}>
                    <Link to="/#hero" className={styles.logo}>
                        <LogoIcon/>
                    </Link>
                    <div className={styles.desktopNav}>
                        <nav className={styles.navigation}>
                            {links.map((link) => {
                                if (link.path === "/contacts") {
                                    return (
                                        <NavLink key={link.path} to={link.path} className={({isActive}) =>
                                            `${styles.navLink} ${isActive ? styles.active : ""}`
                                        }>
                                            {link.label}
                                        </NavLink>
                                    );
                                }

                                if (link.hasDropdown) {
                                    return (
                                        <div key={link.path} className={styles.navItemWithDropdown}>
                                            <a href={link.path} onClick={(e) => handleAnchorClick(e, link.path, link.hash)} className={`${styles.navLink} ${isActiveSection(link.hash) ? styles.active : ""}`}>
                                                {link.label}
                                            </a>
                                            <div className={styles.dropdownMenu}>
                                                {subDirections.map((sub) => (
                                                    <a key={sub.tab} href="/#main-directions" onClick={(e) => handleSubTabClick(e, sub.tab)} className={styles.dropdownItem}>
                                                        {sub.label}
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                    );
                                }

                                return (
                                    <a key={link.path} href={link.path} onClick={(e) => handleAnchorClick(e, link.path, link.hash)} className={`${styles.navLink} ${isActiveSection(link.hash) ? styles.active : ""}`}>
                                        {link.label}
                                    </a>
                                );
                            })}
                        </nav>
                        <Link to="/cars" className={styles.carsLink}>
                            <button className={styles.carsButton}>
                                <span>Подбор авто</span>
                            </button>
                        </Link>
                    </div>
                    <button className={styles.mobileToggle} onClick={() => setMenuOpen(!menuOpen)}>
                        <img src={menuOpen ? CloseIcon : MenuIcon} alt="menu"/>
                    </button>
                </div>
                <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ""}`}>
                    <nav className={styles.mobileNavigation}>
                        {links.map((link) => {
                            if (link.path === "/contacts") {
                                return (
                                    <NavLink key={link.path} to={link.path} onClick={() => setMenuOpen(false)} className={({isActive}) =>
                                        `${styles.mobileLink} ${isActive ? styles.active : ""}`
                                    }>
                                        {link.label}
                                    </NavLink>
                                );
                            }

                            if (link.hasDropdown) {
                                const isOpen = openDropdown === link.path;
                                return (
                                    <div key={link.path} className={styles.mobileSubListWrapper}>
                                        <a href={link.path} onClick={(e) => handleMobileDropdownClick(e, link.path)} className={`${styles.mobileLink} ${styles.mobileLinkParent} ${isActiveSection(link.hash) ? styles.active : ""}`}>
                                            {link.label}
                                            <span className={styles.dropdownArrow}>
                                                {isOpen ? '▲' : '▼'}
                                            </span>
                                        </a>
                                        {/* Mobile sublist - показываем только если dropdown открыт */}
                                        {isOpen && (
                                            <div className={styles.mobileSubList}>
                                                {subDirections.map((sub) => (
                                                    <a key={sub.tab} href="/#main-directions" onClick={(e) => handleSubTabClick(e, sub.tab)} className={styles.mobileSubLink}>
                                                        {sub.label}
                                                    </a>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                );
                            }

                            return (
                                <a key={link.path} href={link.path} onClick={(e) => {
                                    setMenuOpen(false);
                                    handleAnchorClick(e, link.path, link.hash);
                                }} className={`${styles.mobileLink} ${isActiveSection(link.hash) ? styles.active : ""}`}>
                                    {link.label}
                                </a>
                            );
                        })}
                        <Link to="/cars" className={styles.mobileCarsLink} onClick={() => setMenuOpen(false)}>
                            <span>Подбор авто</span>
                        </Link>
                    </nav>
                </div>
            </header>
        </>
    );
}