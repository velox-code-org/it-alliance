import {useState} from "react"
import LogoWhiteImage from '../../../assets/logo-white.svg'
import styles from './Hero.module.scss'

const Hero = () => {
    const [isChecked, setIsChecked] = useState(false)

    const handleToggle = (e) => {
        const checked = e.target.checked
        setIsChecked(checked)

        if (checked) {
            // Скачивание файла
            const link = document.createElement('a')
            link.href = '/src/assets/presentation.pdf'
            link.download = 'presentation.pdf'
            document.body.appendChild(link)
            link.click()
            document.body.removeChild(link)
        }
    }

    return (
        <section className={`${styles.hero} ${isChecked ? styles.heroAnimated : ''}`}>
            <div className={styles.heroContainer}>
                <div className={`page-header hero mx-auto mb-7 ${isChecked ? 'invert' : ''}`}>
                    <span className="corner-tl"></span>
                    <span className="corner-tr"></span>
                    <span className="corner-br"></span>
                    <span className="corner-bl"></span>
                    <h1 className="h2 ttu">Надежный партнер и дистрибутор для вашего бизнеса</h1>
                    <div className="sub-heading ttu">Компания современных бизнес-решений</div>
                </div>
                <label className={styles.toggleDownload} htmlFor="download-slide">
                    <input type="checkbox" id="download-slide" className={styles.toggleDownload__input} checked={isChecked} onChange={handleToggle}/>
                    <div className={styles.toggleDownload__track}>
                        <span className={styles.toggleDownload__text}>
                            {isChecked ? 'ГОТОВО' : 'Скачать презентацию'}
                        </span>
                        <div className={styles.toggleDownload__thumb}>
                            {isChecked ? (
                                <img src={LogoWhiteImage} alt="logo" className={styles.toggleDownload__logo}/>
                            ) : (
                                <svg className={styles.toggleDownload__icon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 15V3M12 15L8 11M12 15L16 11M2 17V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            )}
                        </div>
                    </div>
                </label>
                {/* Декоративные элементы слева */}
                <div className={`${styles.decorLeft} ${isChecked ? styles.decorLeftAnimated : ''}`}>
                    <span className={`${styles.decorIcon1} ${isChecked ? styles.decorIcon1Animated : ''}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width={75} height={74} viewBox="0 0 75 74">
                            <path d="M52.3709 73.082L7.70503e-07 17.6271L74.2108 4.25325e-05L52.3709 73.082Z"/>
                        </svg>
                    </span>
                    <span className={`${styles.decorIcon2} ${isChecked ? styles.decorIcon2Animated : ''}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width={135} height={133} viewBox="0 0 135 133">
                            <path d="M5.77521e-06 132.121L40.1901 4.12311e-06L134.516 100.866L5.77521e-06 132.121Z"/>
                        </svg>
                    </span>
                    <span className={`${styles.decorIcon3} ${isChecked ? styles.decorIcon3Animated : ''}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width={187} height={191} viewBox="0 0 192 188">
                            <path d="M192.007 0.000434112L1.82786e-06 41.8169L132.217 187.191L192.007 0.000434112Z"/>
                        </svg>
                    </span>
                    <span className={`${styles.decorIcon4} ${isChecked ? styles.decorIcon4Animated : ''}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width={220} height={214} viewBox="0 0 240 234">
                            <path d="M1.02108e-05 233.598L74.6115 0.00138529L239.653 181.108L1.02108e-05 233.598Z"/>
                        </svg>
                    </span>
                </div>
                {/* Декоративные элементы справа */}
                <div className={`${styles.decorRight} ${isChecked ? styles.decorRightAnimated : ''}`}>
                    <span className={`${styles.decorIcon1} ${isChecked ? styles.decorIcon1RightAnimated : ''}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width={75} height={74} viewBox="0 0 75 74">
                            <path d="M21.84 73.082L74.2109 17.6271L0.000171041 4.25325e-05L21.84 73.082Z"/>
                        </svg>
                    </span>
                    <span className={`${styles.decorIcon2} ${isChecked ? styles.decorIcon2RightAnimated : ''}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width={135} height={133} viewBox="0 0 135 133">
                            <path d="M134.516 132.121L94.3257 4.12311e-06L1.3662e-06 100.866L134.516 132.121Z"/>
                        </svg>
                    </span>
                    <span className={`${styles.decorIcon3} ${isChecked ? styles.decorIcon3RightAnimated : ''}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width={192} height={188} viewBox="0 0 192 188">
                            <path d="M8.18238e-06 0.000434112L192.007 41.8169L59.7903 187.191L8.18238e-06 0.000434112Z"/>
                        </svg>
                    </span>
                    <span className={`${styles.decorIcon4} ${isChecked ? styles.decorIcon4RightAnimated : ''}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width={220} height={214} viewBox="0 0 240 234">
                            <path d="M239.653 233.598L165.042 0.00138529L0.000414282 181.108L239.653 233.598Z"/>
                        </svg>
                    </span>
                </div>
            </div>
        </section>
    )
}

export default Hero