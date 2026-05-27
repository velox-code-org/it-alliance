import LogoGrid from '../components/LogoGrid/LogoGrid'

import {clients} from '../data/clients/clients'

import styles from './Clients.module.scss'
import SEO from "../components/SEO";

export default function Clients() {
    return (
        <>
            <SEO title="Клиенты IT Alliance | Крупнейшие компании России" description="Наши клиенты — крупнейшие компании России: Абсолют Банк, Магнит, Яндекс, Wildberries, Ozon, Росатом, РЖД и другие. Доверьте свой бизнес профессионалам IT Alliance." keywords="клиенты IT Alliance, крупные клиенты, компании России, Абсолют Банк, Магнит, Яндекс, Wildberries, Ozon, Росатом, РЖД, Сбербанк, Газпром" url="https://it-alliance.ru/clients"/>
            <div className="clients">
                <div className="container">
                    <div className="py-9">
                        <div className="page-header mx-auto">
                            <span className="corner-tl"></span>
                            <span className="corner-tr"></span>
                            <span className="corner-br"></span>
                            <span className="corner-bl"></span>
                            <h1 className="h2">НАШИ КЛИЕНТЫ</h1>
                        </div>
                    </div>
                </div>
                <div className="logos-wrp">
                    <div className="container">
                        {/* Content */}
                        <div className={styles.partnersContent}>
                            <LogoGrid items={clients}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}