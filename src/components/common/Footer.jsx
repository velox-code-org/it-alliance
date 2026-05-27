import {Link} from "react-router-dom"
import LogoRed from "../../assets/logo-red.svg"
import styles from "./Footer.module.scss"

const Footer = () => {
    // Функция для перехода на главную страницу с указанием активного таба
    const handleDirectionClick = (e, tab) => {
        e.preventDefault();

        // Сохраняем активный таб в localStorage
        localStorage.setItem('directionsActiveTab', tab);

        // Триггерим событие storage для синхронизации
        window.dispatchEvent(new StorageEvent('storage', {
            key: 'directionsActiveTab',
            newValue: tab
        }));

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
        <footer className={styles.footer}>
            <div className={styles.container}>
                {/* Логотип и контакты */}
                <div className={styles.section}>
                    <div className={styles.logoWrapper}>
                        <img src={LogoRed} alt="logo" className={styles.logoImg} loading="lazy"/>
                        <div className={styles.logoText}>IT ALLIANCE</div>
                    </div>
                    <p className="mb-2">
                        <span className={styles.label}>Адрес:&nbsp;</span>
                        <span>Москва, Ленинский проспект, 15А, 119071, Central Park Tower</span>
                    </p>
                    <p className="mb-2">
                        <span className={styles.label}>График работы:&nbsp;</span>
                        <span>09:00 - 19:00</span>
                    </p>
                    <p className="mb-2">
                        <span className={styles.label}>Телефон:&nbsp;</span>
                        <span>8 (499) 322-25-03</span>
                    </p>
                    <p className="mb-2">
                        <span className={styles.label}>Email:&nbsp;</span>
                        <span>info@it-alliance-company.ru</span>
                    </p>
                    <p className="mb-2">
                        <span className={styles.label}>ИНН:&nbsp;</span>
                        <span>9703158319</span>
                    </p>
                    <p className="mb-2">
                        <span className={styles.label}>ОГРН:&nbsp;</span>
                        <span>1237700701886</span>
                    </p>
                </div>
                {/* Главная */}
                <div className={styles.section}>
                    <div className={styles.sectionTitle}>Главная</div>
                    <div className={styles.navItem}>
                        <Link to="/#about-company">О Компании</Link>
                        <a href="/#main-directions" onClick={(e) => handleDirectionClick(e, 'foreign')}>
                            Зарубежные решения
                        </a>
                        <a href="/#main-directions" onClick={(e) => handleDirectionClick(e, 'russian')}>
                            Отечественные решения
                        </a>
                        <a href="/#main-directions" onClick={(e) => handleDirectionClick(e, 'cyber')}>
                            Кибербезопасность
                        </a>
                        <Link to="/#our-clients">Клиенты</Link>
                        <Link to="/#our-partners">Партнеры</Link>
                    </div>
                </div>
                <div className={styles.section}>
                    <div className={styles.sectionTitle}>Клиенты</div>
                    <div className={styles.navItem}>
                        <Link to="/clients">Все Клиенты</Link>
                    </div>
                </div>
                {/* ПАРТНЁРЫ */}
                <div className={styles.section}>
                    <div className={styles.sectionTitle}>Партнёры</div>
                    <div className={styles.navItem}>
                        <Link to="/partners">Все Партнёры</Link>
                    </div>
                </div>
                {/* Контакты */}
                <div className={styles.section}>
                    <div className={styles.sectionTitle}>Контакты</div>
                    <div className={styles.navItem}>
                        <Link to="/contacts/#maps">Карта</Link>
                    </div>
                    <div className={styles.navItem}>
                        <Link to="/contacts/#contact">Адрес</Link>
                    </div>
                    <div className={styles.navItem}>
                        <Link to="/contacts/#contact">График работы</Link>
                    </div>
                </div>
            </div>
            {/* Копирайт */}
            <div className={styles.copyright}>
                © Все права защищены ООО "ИТ Альянс"
            </div>
        </footer>
    )
}

export default Footer