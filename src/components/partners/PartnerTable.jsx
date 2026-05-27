import styles from './PartnerTable.module.scss'

export default function PartnerTable({items, headers = ['НАИМЕНОВАНИЕ', 'ПРЕДНАЗНАЧЕНИЕ']}) {
    return (
        <div className={styles.tableWrapper}>
            <table className={styles.table}>
                <thead>
                <tr className={styles.tableHeader}>
                    <th className={styles.thFirst}>{headers[0]}</th>
                    <th className={styles.thLast}>{headers[1]}</th>
                </tr>
                </thead>
                <tbody>
                {items.map((item, index) => (
                    <tr key={index} className={index % 2 === 0 ? styles.rowEven : styles.rowOdd}>
                        <td className={styles.tdFirst}>
                            <div className={styles.tdTitle}>{item.title}</div>
                        </td>
                        <td className={styles.tdLast}>
                            <div className={styles.tdText}>{item.text}</div>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}