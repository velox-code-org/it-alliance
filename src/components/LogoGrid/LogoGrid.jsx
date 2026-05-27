import {Link} from 'react-router-dom'
import styles from './LogoGrid.module.scss'

export default function LogoGrid({items, basePath = 'partners'}) {
    const content = (item) => (
        <div className={styles.card}>
            {item.logo ? (
                <img src={item.logo} alt={item.title} className={styles.image}/>
            ) : (
                <div className={styles.placeholder}>
                    {item.title}
                </div>
            )}
            {!item.hideLink && (
                <>
                    <span className={styles.arrowIcon}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24.87 24.87">
                            <path d="m8.72,1.15h14.99v14.99m-1.15-13.84L1.63,23.24" fill="none" stroke="currentColor" strokeLinecap="square" strokeWidth="2.31"/>
                        </svg>
                    </span>
                    <div className={styles.overlay}>
                        <div className={styles.overlayText}>
                            Подробнее
                        </div>
                    </div>
                </>
            )}
        </div>
    )

    return (
        <div className={styles.grid}>
            {items.map((item) => (
                item.hideLink ? (
                    <div key={item.slug} className={styles.link}>
                        {content(item)}
                    </div>
                ) : (
                    <Link key={item.slug} to={`/${basePath}/${item.slug}`} className={styles.link}>
                        {content(item)}
                    </Link>
                )
            ))}
        </div>
    )
}