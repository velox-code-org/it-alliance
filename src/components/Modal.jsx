import styles from "./Modal.module.scss";

export default function Modal({open, onClose, children}) {
    if (!open) return null;

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                <button onClick={onClose} className={styles.closeButton}>
                    ×
                </button>
                {children}
            </div>
        </div>
    );
}