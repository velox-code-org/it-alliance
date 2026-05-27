// MainDirections.jsx
import {useState, useEffect} from 'react'
import {Link, useLocation} from 'react-router-dom'
import {getPartnerLogo} from '../../../data/partners/helpers'
import styles from './MainDirections.module.scss'

const MainDirections = () => {
    const location = useLocation()
    // Current active tab corresponds to the keys: 'foreign', 'russian', 'cyber'
    const [activeTab, setActiveTab] = useState('foreign')

    // Функция для получения активного таба из localStorage
    const getActiveTabFromStorage = () => {
        const savedTab = localStorage.getItem('directionsActiveTab')
        if (savedTab && ['foreign', 'russian', 'cyber'].includes(savedTab)) {
            return savedTab
        }
        return 'foreign'
    }

    // При монтировании и при изменении location (возврате на страницу)
    useEffect(() => {
        const savedTab = getActiveTabFromStorage()
        setActiveTab(savedTab)

        // Проверяем hash в URL для скролла
        if (window.location.hash === '#main-directions') {
            const element = document.getElementById('main-directions')
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({behavior: 'smooth', block: 'start'})
                }, 100)
            }
        }
    }, [location]) // Добавляем location в зависимости

    // Слушаем изменения localStorage из других вкладок/компонентов
    useEffect(() => {
        const handleStorageChange = (e) => {
            if (e.key === 'directionsActiveTab') {
                const newTab = e.newValue
                if (newTab && ['foreign', 'russian', 'cyber'].includes(newTab)) {
                    setActiveTab(newTab)
                }
            }
        }

        window.addEventListener('storage', handleStorageChange)
        return () => window.removeEventListener('storage', handleStorageChange)
    }, [])

    // Сохраняем активный таб в localStorage при изменении
    const handleTabChange = (tab) => {
        setActiveTab(tab)
        localStorage.setItem('directionsActiveTab', tab)
    }

    // Standardized mapping from state to helper folder categories
    const tabCategories = {
        foreign: 'foreign',
        russian: 'russian',
        cyber: 'cybersecurity'
    }

    const tabsData = {
        foreign: {
            blocks: [
                {
                    title: "Серверы и Системы Хранения Данных",
                    brands: ["huawei", "xfusion", "lenovo"],
                    gridWidth: 3
                },
                {
                    title: "Сетевое оборудование",
                    brands: ["huawei"],
                    gridWidth: 3
                },
                {
                    title: "Источники Бесперебойного Питания",
                    brands: ["huawei", "sinexcel", "delta", "evada"],
                    gridWidth: 4
                },
                {
                    title: "Программные решения для виртуализации",
                    brands: ["sangrus"],
                    gridWidth: 5
                },
                {
                    title: "Системы видеонаблюдения и конференцсвязь",
                    brands: ["idis", "dallmeier"],
                    gridWidth: 5
                },
                {
                    title: "Импорт оборудования",
                    description: "IT Alliance оказывает услуги по поставке оборудования под заказ.",
                    gridWidth: 10,
                    isDetailed: true,
                    subGroups: [
                        {title: "Серверы", brands: ["dell", "hpe", "ibm", "supermicro", "gigabyte"], gridWidth: 4},
                        {title: "Системы хранения Данных", brands: ["dell", "netapp", "hpe", "ibm"], gridWidth: 3},
                        {title: "Ленточные библиотеки", brands: ["ibm"], gridWidth: 3},
                        {
                            title: "Сетевое оборудование",
                            brands: ["dell", "hpe", "ibm", "supermicro", "gigabyte"],
                            gridWidth: 5
                        },
                        {
                            title: "Решения на базе графических процессоров",
                            brands: ["dell", "supermicro", "nvidia", "gigabyte", "asus"],
                            gridWidth: 5
                        }
                    ]
                }
            ]
        },
        russian: {
            blocks: [
                {
                    title: "Серверы и Системы Хранения Данных",
                    brands: ["aquarius", "icl", "yadro", "depo", "kraftway", "dataru", "openyard", "qtech", "nebo-systems"],
                    gridWidth: 5
                },
                {
                    title: "Сетевое оборудование",
                    brands: ["eltex", "aquarius", "yadro", "btech", "qtech", "vector-technologies", "iqtools", "dataru"],
                    gridWidth: 5
                },
                {
                    title: "Системы резервного копирования",
                    brands: ["yadro", "cyberprotect", "astra"],
                    gridWidth: 3
                },
                {
                    title: "Автоматизированные рабочие места",
                    brands: ["aquarius", "icl", "depo", "qtech"],
                    gridWidth: 3
                },
                {
                    title: "Базовые инфраструктурные сервисы",
                    brands: ["astra", "red-soft", "basealt"],
                    gridWidth: 4
                },
                {
                    title: "Виртуализация",
                    brands: ["astra", "orion-soft", "mindsw", "skala-r"],
                    gridWidth: 3
                },
                {
                    title: "Объединенные коммуникации",
                    brands: ["workspad", "rupost", "communigatepro"],
                    gridWidth: 3
                },
                {
                    title: "Пользовательское ПО",
                    brands: ["r7-office", "myoffice"],
                    gridWidth: 4
                },
                {
                    title: "Инфраструктура рабочих мест",
                    brands: ["termidesk", "termit", "workspad"],
                    gridWidth: 5
                },
                {
                    title: "Контейнеризация",
                    brands: ["orion-soft", "astra"],
                    gridWidth: 5
                }
            ]
        },
        cyber: {
            blocks: [
                {
                    title: "Сетевая безопасность и NGFW",
                    brands: ["checkpoint", "usergate", "infotecs", "code-security", "eltex"],
                    gridWidth: 5
                },
                {
                    title: "Анализ защищенности и Мониторинг",
                    brands: ["positive-technologies", "kaspersky", "infowatch", "crosstech"],
                    gridWidth: 5
                },
                {
                    title: "Управление доступом (IdM/IAM/MFA)",
                    brands: ["avanpost", "multifactor", "aladdin"],
                    gridWidth: 4
                },
                {
                    title: "Защита рабочих станций и ПО",
                    brands: ["kaspersky", "positive-technologies", "usergate"],
                    gridWidth: 3
                },
                {
                    title: "Криптографическая защита информации",
                    brands: ["aladdin", "code-security"],
                    gridWidth: 3
                }
            ]
        }
    }

    const currentTabData = tabsData[activeTab];

    // Helper function to extract brand name and resolve the correct category group dynamically
    const resolveLogo = (brandItem) => {
        if (typeof brandItem === 'object' && brandItem !== null) {
            return getPartnerLogo(brandItem.category, brandItem.name);
        }
        const currentCategory = tabCategories[activeTab] || activeTab;
        return getPartnerLogo(currentCategory, brandItem);
    }

    const getBrandName = (brandItem) => {
        return typeof brandItem === 'object' && brandItem !== null ? brandItem.name : brandItem;
    }

    const getPartnerLink = () => {
        const partnerTab = tabCategories[activeTab] || activeTab;
        // Сначала параметр tab, потом якорь
        return `/partners?tab=${partnerTab}#partners-logos`;
    }

    return (
        <section className={styles.section} id="main-directions">
            <div className="container">
                <div className="text-center mb-7">
                    <h2 className="h2 color-primary">ОСНОВНЫЕ НАПРАВЛЕНИЯ</h2>
                </div>
                {/* Navigation Tab Wrapper */}
                <div className={styles.tabsWrapper}>
                    <button onClick={() => handleTabChange('foreign')} className={`btn ${activeTab === 'foreign' ? 'btn-dark' : 'btn-outline-dark'}`}>
                        Зарубежные решения
                    </button>
                    <button onClick={() => handleTabChange('russian')} className={`btn ${activeTab === 'russian' ? 'btn-dark' : 'btn-outline-dark'}`}>
                        Отечественные решения
                    </button>
                    <button onClick={() => handleTabChange('cyber')} className={`btn ${activeTab === 'cyber' ? 'btn-dark' : 'btn-outline-dark'}`}>
                        Кибербезопасность
                    </button>
                </div>
                {/* Main 10-Column Unified Grid */}
                <div className={styles.unifiedGrid}>
                    {currentTabData?.blocks?.map((block, bIdx) => (
                        <div key={bIdx} className={`${styles.block} ${block.isDetailed ? styles.blockDetailed : ''}`} style={{'--block-width': block.gridWidth}}>
                            {!block.isDetailed ? (
                                <>
                                    <h3 className={styles.blockTitle}>{block.title}</h3>
                                    <div className={styles.brandsGrid}>
                                        {block.brands.map((brand, brandIdx) => {
                                            const logoUrl = resolveLogo(brand);
                                            const displayName = getBrandName(brand);
                                            return (
                                                <Link to={getPartnerLink()} key={brandIdx} className={styles.logoCard}>
                                                    {logoUrl ? (
                                                        <img src={logoUrl} alt={`${displayName} logo`} className={styles.logoImage}/>
                                                    ) : (
                                                        <span className={styles.brandFallback}>{displayName}</span>
                                                    )}
                                                </Link>
                                            )
                                        })}
                                    </div>
                                </>
                            ) : (
                                <>
                                    <h3 className={styles.detailedTitle}>{block.title}</h3>
                                    <p className={styles.detailedDesc}>{block.description}</p>
                                    {/* Sub-groups 10-Column Grid */}
                                    <div className={styles.subGroupsGrid}>
                                        {block.subGroups.map((subGroup, sIdx) => (
                                            <div key={sIdx} className={styles.subGroup} style={{'--sub-block-width': subGroup.gridWidth}}>
                                                <h4 className={styles.subGroupTitle}>{subGroup.title}</h4>
                                                <div className={styles.subGroupBrands}>
                                                    {subGroup.brands.map((brand, brandIdx) => {
                                                        const logoUrl = resolveLogo(brand);
                                                        const displayName = getBrandName(brand);
                                                        return (
                                                            <Link to={getPartnerLink()} key={brandIdx} className={styles.logoCard}>
                                                                {logoUrl ? (
                                                                    <img src={logoUrl} alt={`${displayName} logo`} className={styles.logoImage}/>
                                                                ) : (
                                                                    <span className={styles.brandFallback}>{displayName}</span>
                                                                )}
                                                            </Link>
                                                        )
                                                    })}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default MainDirections