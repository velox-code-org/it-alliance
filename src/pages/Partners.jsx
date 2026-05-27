import {useState, useEffect} from 'react'
import {useLocation, useNavigate} from 'react-router-dom'
import LogoGrid from '../components/LogoGrid/LogoGrid'

import {foreignPartners} from '../data/partners/foreign'
import {russianPartners} from '../data/partners/russian'
import {cybersecurityPartners} from '../data/partners/cybersecurity'

import styles from './Partners.module.scss'
import SEO from "../components/SEO";

export default function Partners() {
    const location = useLocation()
    const navigate = useNavigate()

    // Получаем параметр tab из URL
    const getTabFromUrl = () => {
        const params = new URLSearchParams(location.search)
        const tabParam = params.get('tab')
        if (tabParam && ['foreign', 'russian', 'cybersecurity'].includes(tabParam)) {
            return tabParam
        }
        return null
    }

    const [activeTab, setActiveTab] = useState(() => {
        // Сначала проверяем параметр из URL
        const urlTab = getTabFromUrl()
        if (urlTab) return urlTab
        // Затем из localStorage
        const savedTab = localStorage.getItem('partnersActiveTab')
        return savedTab || 'foreign'
    })

    const tabs = {
        foreign: foreignPartners,
        russian: russianPartners,
        cybersecurity: cybersecurityPartners,
    }

    // Сохраняем активную вкладку при её изменении
    const handleTabChange = (tab) => {
        setActiveTab(tab)
        localStorage.setItem('partnersActiveTab', tab)

        // Обновляем URL: сохраняем hash, если он есть
        const currentHash = location.hash
        const newUrl = `/partners?tab=${tab}${currentHash}`
        navigate(newUrl, {replace: true})
    }

    // Синхронизируем активный таб с URL при изменении location
    useEffect(() => {
        const params = new URLSearchParams(location.search)
        const tabParam = params.get('tab')
        if (tabParam && ['foreign', 'russian', 'cybersecurity'].includes(tabParam)) {
            if (tabParam !== activeTab) {
                setActiveTab(tabParam)
                localStorage.setItem('partnersActiveTab', tabParam)
            }
        }

        // Прокрутка к секции
        if (location.hash === '#partners-logos') {
            const element = document.getElementById('partners-logos')
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({behavior: 'smooth', block: 'start'})
                }, 100)
            }
        }
    }, [location])

    return (
        <>
            <SEO title="Партнеры IT Alliance | Ведущие производители IT-оборудования" description="Партнеры IT Alliance — ведущие мировые и российские производители IT-оборудования: серверы, СХД, сетевое оборудование, системы безопасности, программное обеспечение. Huawei, Dell, Cisco, Astra, Киберпротект и другие." keywords="партнеры IT Alliance, вендоры IT оборудования, производители серверов, производители СХД, сетевое оборудование вендоры, российское ПО, импортозамещение IT" url="https://it-alliance.ru/partners"/>
            <div className="partners">
                <div className="container">
                    <div className="py-9">
                        <div className="page-header mx-auto">
                            <span className="corner-tl"></span>
                            <span className="corner-tr"></span>
                            <span className="corner-br"></span>
                            <span className="corner-bl"></span>
                            <h1 className="h2">
                                НАШИ ПАРТНЕРЫ </h1>
                        </div>
                    </div>
                </div>
                <div id="partners-logos" className="logos-wrp">
                    <div className="container">
                        {/* Tabs */}
                        <div className={styles.tabsContainer}>
                            <div className={styles.tabsWrapper}>
                                <button onClick={() => handleTabChange('foreign')} className={`
                                    btn
                                    ${activeTab === 'foreign' ? 'btn-primary' : 'btn-outline'}
                                `}>
                                    Зарубежные партнеры
                                </button>
                                <button onClick={() => handleTabChange('russian')} className={`
                                    btn
                                    ${activeTab === 'russian' ? 'btn-primary' : 'btn-outline'}
                                `}>
                                    Отечественные партнеры
                                </button>
                                <button onClick={() => handleTabChange('cybersecurity')} className={`
                                    btn
                                    ${activeTab === 'cybersecurity' ? 'btn-primary' : 'btn-outline'}
                                `}>
                                    Кибербезопасность
                                </button>
                            </div>
                        </div>
                        {/* Content */}
                        <div className={styles.partnersContent}>
                            <LogoGrid items={tabs[activeTab]}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}