import {useEffect} from 'react'
import {Link} from 'react-router-dom'
import SEO from '../components/SEO'
import styles from './NotFound.module.scss'

export default function NotFound() {
    useEffect(() => {
        // Устанавливаем HTTP-статус 404
        document.title = 'Страница не найдена | IT Alliance'
    }, [])

    return (
        <>
            <SEO title="Страница не найдена | 404" description="К сожалению, запрашиваемая страница не существует. Возможно, она была удалена или перемещена. Вернитесь на главную страницу сайта." keywords="404, страница не найдена, ошибка 404" url="https://it-alliance.ru/404" robots="noindex, follow"/>
            <div className={styles.notFound}>
                <div className="container">
                    <div className={styles.content}>
                        <div className="page-header mx-auto">
                            <span className="corner-tl"></span>
                            <span className="corner-tr"></span>
                            <span className="corner-br"></span>
                            <span className="corner-bl"></span>
                            <h1 className="h2">404</h1>
                            <div className="sub-heading">СТРАНИЦА НЕ НАЙДЕНА</div>
                        </div>
                        <p className={styles.description}>
                            К сожалению, запрашиваемая страница не существует.<br/>
                            Возможно, она была удалена или перемещена. </p>
                        <Link to="/" className="btn btn-lg btn-primary">
                            Вернуться на главную
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}