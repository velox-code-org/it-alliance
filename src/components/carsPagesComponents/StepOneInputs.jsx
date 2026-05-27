import TableTitle from "./utilities/TableTitle";
import styles from "./StepOneInputs.module.scss";

export default function StepOneInputs() {
    return (
        <form className={styles.form}>
            <div className={styles.formContainer}>
                {/* Строка 1 */}
                <div className={styles.formRow}>
                    <div className={styles.numberBox}>
                        <span className={styles.numberText}>1</span>
                    </div>
                    <div className={styles.inputWrapper}>
                        <TableTitle title={"Марка"} size={22} style={"font-light uppercase whitespace-nowrap"}/>
                        <input className={styles.formInput} placeholder=""/>
                    </div>
                </div>
                {/* Строка 2 */}
                <div className={styles.formRow}>
                    <div className={styles.numberBox}>
                        <span className={styles.numberText}>2</span>
                    </div>
                    <div className={styles.inputWrapper}>
                        <TableTitle title={"Модель"} size={22} style={"font-light uppercase whitespace-nowrap"}/>
                        <input className={styles.formInput} placeholder=""/>
                    </div>
                </div>
                {/* Строка 3 */}
                <div className={styles.formRow}>
                    <div className={styles.numberBox}>
                        <span className={styles.numberText}>3</span>
                    </div>
                    <div className={styles.inputWrapper}>
                        <TableTitle title={"Год"} size={22} style={"font-light uppercase whitespace-nowrap"}/>
                        <input className={styles.formInput} placeholder=""/>
                    </div>
                </div>
                {/* Строка 4 */}
                <div className={styles.formRow}>
                    <div className={styles.numberBox}>
                        <span className={styles.numberText}>4</span>
                    </div>
                    <div className={styles.inputWrapper}>
                        <TableTitle title={"Пробег до"} size={22} style={"font-light uppercase whitespace-nowrap"}/>
                        <input className={styles.formInput} placeholder=""/>
                    </div>
                </div>
                {/* Строка 5 */}
                <div className={styles.formRow}>
                    <div className={styles.numberBox}>
                        <span className={styles.numberText}>5</span>
                    </div>
                    <div className={`${styles.inputWrapper} ${styles.inputWrapperColumn}`}>
                        <TableTitle title={"дизель (Л) | бензин (Л) | электрический (KW)"} size={22} style={"font-light uppercase whitespace-nowrap"}/>
                        <input className={styles.formInputFull} placeholder=""/>
                    </div>
                </div>
                {/* Строка 6 */}
                <div className={styles.formRow}>
                    <div className={styles.numberBox}>
                        <span className={styles.numberText}>6</span>
                    </div>
                    <div className={styles.inputWrapper}>
                        <TableTitle title={"ПРИВОД"} size={22} style={"font-light uppercase whitespace-nowrap"}/>
                        <input className={styles.formInput} placeholder=""/>
                    </div>
                </div>
                {/* Строка 7 */}
                <div className={styles.formRowComplex}>
                    <div className={`${styles.numberBox} ${styles.numberBoxTop}`}>
                        <span className={styles.numberText}>7</span>
                    </div>
                    <div className={styles.complexWrapper}>
                        <div className={styles.complexRow}>
                            <TableTitle title={
                                "Комплектация (МОЖЕТ ОТДЕЛЬНЫЕ ОПЦИИ, КОТОРЫЕ НЕОБХОДИМЫ)"
                            } size={22} style={"font-light uppercase"}/>
                            <input className={styles.formInputFull} placeholder=""/>
                        </div>
                    </div>
                </div>
                {/* Строка 8 */}
                <div className={styles.formRow}>
                    <div className={styles.numberBox}>
                        <span className={styles.numberText}>8</span>
                    </div>
                    <div className={styles.inputWrapper}>
                        <TableTitle title={"ЦВЕТ КУЗОВА"} size={22} style={"font-light uppercase whitespace-nowrap"}/>
                        <input className={styles.formInput} placeholder=""/>
                    </div>
                </div>
                {/* Строка 9 */}
                <div className={styles.formRow}>
                    <div className={styles.numberBox}>
                        <span className={styles.numberText}>9</span>
                    </div>
                    <div className={styles.inputWrapper}>
                        <TableTitle title={"ЦВЕТ САЛОНА"} size={22} style={"font-light uppercase whitespace-nowrap"}/>
                        <input className={styles.formInput} placeholder=""/>
                    </div>
                </div>
                {/* Строка 10 */}
                <div className={styles.formRowComplex}>
                    <div className={`${styles.numberBox} ${styles.numberBoxTop}`}>
                        <span className={styles.numberText}>10</span>
                    </div>
                    <div className={styles.complexWrapper}>
                        <div className={styles.complexHeader}>
                            <TableTitle title={
                                "Допустимы ли страховые выплаты? (окрасы/замены деталей на новые)"
                            } size={22} style={"font-light uppercase"}/>
                        </div>
                        <div className={styles.checkboxGroup}>
                            <div className={styles.checkboxes}>
                                <label className={styles.checkboxLabel}>
                                    <TableTitle size={18} style={"italic"} title={"ДА"}/>
                                    <input type="checkbox" className={styles.checkbox}/>
                                </label>
                                <label className={styles.checkboxLabel}>
                                    <TableTitle size={18} style={"italic"} title={"НЕТ"}/>
                                    <input type="checkbox" className={styles.checkbox}/>
                                </label>
                            </div>
                            <div className={styles.inputWithHint}>
                                <input className={styles.formInputFull} placeholder=""/>
                                <div className={styles.inputHint}>
                                    если отметили "ДА" - то какие?
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Строка 11 */}
                <div className={styles.formRow}>
                    <div className={styles.numberBox}>
                        <span className={styles.numberText}>11</span>
                    </div>
                    <div className={styles.inputWrapper}>
                        <TableTitle title={"БЮДЖЕТ"} size={22} style={"font-light uppercase whitespace-nowrap"}/>
                        <input className={styles.formInput} placeholder=""/>
                    </div>
                </div>
            </div>
        </form>
    );
}