import styles from "./TableAdvantages.module.scss";

const TableItem = ({title, individuals, entities}) => {
    return (
        <tr className={styles.tableRow}>
            {/* Широкая колонка для заголовка */}
            <td className={styles.titleCell}>
                {title}
            </td>
            {/* Узкие центрированные колонки для галочек */}
            <td className={styles.iconCell}>
                <div className={styles.iconWrapper}>
                    {individuals == true ? (
                        <div className={styles.checkMark}></div>
                    ) : (
                        <div className={styles.emptyMark}></div>
                    )}
                </div>
            </td>
            <td className={styles.iconCell}>
                <div className={styles.iconWrapper}>
                    {entities == true ? (
                        <div className={styles.checkMark}></div>
                    ) : (
                        <div className={styles.emptyMark}></div>
                    )}
                </div>
            </td>
        </tr>
    );
};

export default TableItem;