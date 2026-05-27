import {useState, useEffect, useRef} from 'react'
import {Link} from 'react-router-dom'
import {getPartnerLogo} from '../../../data/partners/helpers'
import styles from './OurPartners.module.scss'

const OurPartners = () => {
    const [count, setCount] = useState(0)
    const counterRef = useRef(null)
    const targetCount = 150

    // Exact structural dataset for the 3x3 matrix layout on the left side
    const partnerGroups = [
        {
            category: "foreign",
            brands: ["huawei", "xfusion", "lenovo"]
        },
        {
            category: "russian",
            brands: ["aquarius", "icl", "depo"]
        },
        {
            category: "cybersecurity",
            brands: ["kaspersky", "positive-technologies", "usergate"]
        }
    ]

    // Animated counter logic when the element enters the viewport
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    let start = 0
                    const duration = 1500 // Animation duration in milliseconds
                    const startTime = performance.now()

                    const animate = (currentTime) => {
                        const elapsed = currentTime - startTime
                        const progress = Math.min(elapsed / duration, 1)

                        // Ease-out cubic function for smoother slowdown at the end
                        const easeOutCubic = 1 - Math.pow(1 - progress, 3)
                        const currentCount = Math.floor(easeOutCubic * targetCount)

                        setCount(currentCount)

                        if (progress < 1) {
                            requestAnimationFrame(animate)
                        }
                    }

                    requestAnimationFrame(animate)
                    observer.disconnect() // Run animation only once
                }
            },
            {threshold: 0.1}
        )

        if (counterRef.current) {
            observer.observe(counterRef.current)
        }

        return () => observer.disconnect()
    }, [])

    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.layoutContainer}>
                    {/* LEFT COLUMN: 3 Rows x 3 Logos Matrix wrapped in Link tags */}
                    <div className={styles.matrixColumn}>
                        {partnerGroups.map((group, gIdx) => (
                            <div key={gIdx} className={styles.matrixRow}>
                                {group.brands.map((brand, bIdx) => {
                                    const logoUrl = getPartnerLogo(group.category, brand);
                                    return (
                                        <Link to="/partners" key={bIdx} className={styles.logoCard}>
                                            {logoUrl ? (
                                                <img src={logoUrl} alt={`${brand} logo`} className={styles.logoImage}/>
                                            ) : (
                                                <span className={styles.brandFallback}>{brand}</span>
                                            )}
                                        </Link>
                                    )
                                })}
                            </div>
                        ))}
                    </div>
                    {/* RIGHT COLUMN: Typography, Animated Counter & Subtitle Actions */}
                    <div className={styles.textColumn} ref={counterRef}>
                        <div className={styles.headerWrapper}>
                            <h2 className="h2 color-primary">НАШИ ПАРТНЕРЫ</h2>
                            <Link to="/partners" className={styles.subtitleLink}>
                                Все партнеры <span className={styles.arrow}>&rarr;</span>
                            </Link>
                        </div>
                        {/* Interactive Counter Block */}
                        <div className={styles.counterBlock}>
                            <div className={styles.counterNumber}>{count}+</div>
                            <div className={styles.counterText}>
                                Партнеров нам доверяют
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurPartners