import {useState, useEffect, useRef} from 'react'
import {Link} from 'react-router-dom'
import {getClientLogo} from '../../../data/clients/helpers'
import styles from './OurClients.module.scss'

const OurClients = () => {
    const [count, setCount] = useState(0)
    const counterRef = useRef(null)
    const targetCount = 180

    // Array of 9 selected prominent client slugs from clients.js mapped to a flat array
    const clientBrands = [
        "ozon",
        "yandex",
        "polyus-zolota",
        "absolut-bank",
        "merlion",
        "wildberries",
        "magnit",
        "techconsur",
        "miratorg"
    ]

    // Animated counter logic when the section enters the viewport
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    const duration = 1500 // Animation duration in milliseconds
                    const startTime = performance.now()

                    const animate = (currentTime) => {
                        const elapsed = currentTime - startTime
                        const progress = Math.min(elapsed / duration, 1)

                        // Ease-out cubic function for organic deceleration
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
                    {/* LEFT COLUMN: Typography, Animated Counter & Navigation */}
                    <div className={styles.textColumn} ref={counterRef}>
                        <div className={styles.headerWrapper}>
                            <h2 className="h2 color-primary">НАШИ КЛИЕНТЫ</h2>
                            <Link to="/clients" className={styles.subtitleLink}>
                                Все клиенты <span className={styles.arrow}>&rarr;</span>
                            </Link>
                        </div>
                        {/* Interactive Counter Badge */}
                        <div className={styles.counterBlock}>
                            <div className={styles.counterNumber}>{count}+</div>
                            <div className={styles.counterText}>
                                Клиентов нам доверяют
                            </div>
                        </div>
                    </div>
                    {/* RIGHT COLUMN: 3x3 Matrix Layout for White Brand Logo Cards */}
                    <div className={styles.matrixColumn}>
                        <div className={styles.matrixGrid}>
                            {clientBrands.map((brand, bIdx) => {
                                const logoUrl = getClientLogo(brand);
                                return (
                                    <Link to="/clients" key={bIdx} className={styles.logoCard}>
                                        {logoUrl ? (
                                            <img src={logoUrl} alt={`${brand} logo`} className={styles.logoImage}/>
                                        ) : (
                                            <span className={styles.brandFallback}>{brand}</span>
                                        )}
                                    </Link>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurClients