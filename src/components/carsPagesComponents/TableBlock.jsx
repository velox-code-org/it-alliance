import React from 'react'
import styles from './TableBlock.module.scss'

export default function TableBlock() {
    const cards = [
        "Стоимость автомобиля в Южной Корее",
        "Услуги IT Alliance",
        "Услуги дилера",
        "Доставка Корея - Владивосток",
        "Платежный Агент",
        "Таможенное оформление",
        {text: "Акциз", group: true},
        {text: "Пошлина", group: true},
        "ндс",
        "Утилизационный сбор",
        "Услуги брокера / СВХ Лаборатория",
        "Доставка Владивосток - Москва",
        "Страховка Автомобиля"
    ]

    return (
        <div className={styles.tableGrid}>
            {cards.map((card, index) => {
                if (typeof card === 'object' && card.group) {
                    return (
                        <div key={index} className={styles.groupContainer}>
                            <div className={styles.groupCard}>{card.text}</div>
                        </div>
                    )
                }
                return (
                    <div key={index} className={styles.card}>
                        {card}
                    </div>
                )
            })}
        </div>
    )
}