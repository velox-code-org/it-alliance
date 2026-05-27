import {Link} from "react-router-dom"
import styles from "./LogoCardVendors.module.scss"

const LogoCardVendors = ({Image, href}) => {
    return (
        <Link to={href} className={styles.vendorCard}>
            <Image/>
            <span className={styles.arrowIcon}>
        <svg viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.4688 1.38281H28.4565V19.3706M27.0728 2.76649L1.95703 27.8828" strokeWidth="2.76735" strokeLinecap="square"/>
        </svg>
      </span>
            <div className={styles.overlay}>
                <div className={styles.overlayText}>
                    Подробнее
                </div>
            </div>
        </Link>
    )
}

export default LogoCardVendors