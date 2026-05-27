import styles from './PartnerBadges.module.scss'

export default function PartnerBadges({items}) {
    return (
        <div className={styles.badges}>
            {items.map((item) => (
                <div key={item} className={styles.badge}>
                    {item}
                </div>
            ))}
        </div>
    )
}