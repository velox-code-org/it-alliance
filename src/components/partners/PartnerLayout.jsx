import {Link} from 'react-router-dom'
import PartnerBadges from './PartnerBadges'
import PartnerButtons from './PartnerButtons'
import PartnerTable from './PartnerTable'
import styles from './PartnerLayout.module.scss'

export default function PartnerLayout({partner}) {
    // Функция для возврата на страницу партнеров с сохранением вкладки
    const getBackLink = () => {
        const savedTab = localStorage.getItem('partnersActiveTab')
        let url = '/partners#partners-logos'
        if (savedTab) {
            url += `?tab=${savedTab}`
        }
        return url
    }

    return (
        <section className={styles.partnerPage}>
            <div className="container">
                <div className={styles.header}>
                    <div className={styles.content}>
                        <Link to={getBackLink()} className={styles.backLink}>
                            ← Назад ко всем партнёрам
                        </Link>
                        <div>
                            <h1 className="h2 mb-2">
                                {partner.title}
                            </h1>
                            <PartnerBadges items={partner.categories}/>
                        </div>
                    </div>
                    <div className={styles.imageWrapper}>
                        <span className={styles.cornertl}></span>
                        <span className={styles.cornertr}></span>
                        <span className={styles.cornerbr}></span>
                        <span className={styles.cornerbl}></span>
                        <img src={partner.logo} alt={partner.title} className={styles.image}/>
                    </div>
                </div>
                <div className={styles.description} dangerouslySetInnerHTML={{__html: partner.description}}/>
                <div className="mb-5">
                    <PartnerButtons website={partner.website}/>
                </div>
                {/* Секции с таблицами */}
                {partner.sections && partner.sections.map((section, index) => (
                    <div key={index} className={styles.section}>
                        <div className="text-center">
                            <h2 className="h3 mb-5">{section.title}</h2>
                        </div>
                        <PartnerTable items={section.items} headers={section.headers || ['НАИМЕНОВАНИЕ', 'ПРЕДНАЗНАЧЕНИЕ']}/>
                        {section.buttonLink && (
                            <div className="text-center mb-5">
                                <a href={section.buttonLink} target="_blank" rel="noopener noreferrer" className="btn btn-dark">
                                    перейти на сайт производителя
                                </a>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    )
}