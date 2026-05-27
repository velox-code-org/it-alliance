// AboutCompany.jsx
import styles from './AboutCompany.module.scss'

const AboutCompany = () => {
    // Timeline data structure representing the layout
    const timelineData = [
        {
            year: "2023",
            note: "Октябрь",
            title: "Основание компании",
            cards: [
                "Штат: 2 человека",
                "Оптовая поставка 10 тыс. ед. оборудования"
            ],
            revenue: "0.3"
        },
        {
            year: "2024",
            note: "",
            title: "Первый крупный проект",
            cards: [
                "> 450 млн. руб",
                "Более 70 реализованных проектов"
            ],
            revenue: "2.7"
        },
        {
            year: "2025",
            note: "",
            title: "Развитие и рост",
            cards: [
                "Штат: 40+ человек",
                "Более 180 заказчиков"
            ],
            revenue: "5.7"
        }
    ];

    return (
        <section className={styles.section}>
            <div className="container">
                <div className="text-center mb-7">
                    <h2 className="h2 color-primary">О КОМПАНИИ</h2>
                </div>
                <div className={styles.timeline}>
                    {/* Horizontal axis line */}
                    <div className={styles.timelineLine}></div>
                    {timelineData.map((item, index) => (
                        <div key={index} className={styles.column}>
                            {/* Header part with year and a dot on the line */}
                            <div className={styles.header}>
                                <div className={styles.yearWrapper}>
                                    <span className={styles.year}>{item.year}</span>
                                    {item.note && <span className={styles.note}>{item.note}</span>}
                                </div>
                                <div className={styles.dot}></div>
                            </div>
                            {/* Title part - placed directly into the grid */}
                            <h3 className={styles.title}>{item.title}</h3>
                            {/* Render individual cards directly to align them in grid rows */}
                            {item.cards.map((cardText, cardIndex) => {
                                // Determine specific row class based on card position
                                const cardRowClass = cardIndex === 0 ? styles.cardFirst : styles.cardSecond;

                                return (
                                    <div key={cardIndex} className={`${styles.card} ${cardRowClass}`}>
                                        {/* Decorative arrow with a dot */}
                                        <div className={styles.cardArrow}>
                                            <svg viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="2" cy="4" r="2" fill="black"/>
                                                <path d="M2 4H14M14 4L11 1M14 4L11 7" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                        </div>
                                        <p className={styles.cardText}>{cardText}</p>
                                    </div>
                                );
                            })}
                            {/* Footer part with revenue */}
                            <div className={styles.footer}>
                                <span className={styles.revenueLabel}>Выручка</span>
                                <div className={styles.revenueValue}>
                                    {item.revenue} <span className={styles.revenueUnit}>млрд. руб</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default AboutCompany