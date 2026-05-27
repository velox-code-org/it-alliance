export default function PartnerButtons({website}) {
    return (
        <div className="buttons">
            <a href="/contacts/#feedback-form">
                <button className="btn btn-dark">
                    СВЯЗАТЬСЯ С НАМИ
                </button>
            </a>
            <a href={website} target="_blank" rel="noreferrer">
                <button className="btn btn-primary">
                    САЙТ ПАРТНЁРА
                </button>
            </a>
        </div>
    )
}