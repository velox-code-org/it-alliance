import {Link} from "react-router-dom";

export default function PartnerForm() {
    return (
        <div className="form">
            <h3 className="color-white mb-2 text-center">Заявка на партнёрство</h3>
            <form className="request-form">
                <div className="form-group">
                    <label htmlFor="name">Имя</label>
                    <input type="text" id="name" className="form-input" placeholder="Имя" required/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">E-mail</label>
                    <input type="email" id="email" pattern="[^@\s]+@[^@\s]+\.[^@\s]+" className="form-input" placeholder="E-mail" required/>
                </div>
                <div className="form-group">
                    <label htmlFor="subject">Тема</label>
                    <input type="text" id="subject" className="form-input" placeholder="Тема" required/>
                </div>
                <div className="form-group">
                    <label htmlFor="message">Сообщение</label>
                    <textarea id="message" className="form-textarea" placeholder="Сообщение" rows={4} required/>
                </div>
                <div className="form-group">
                    <label className="checkbox-label">
                        <input type="checkbox" required/>
                        <span className="custom-checkbox"></span>
                        <span>
              Я согласен с
              <Link to="/personal" className="form-link">
                политикой обработки персональных данных
              </Link>
            </span>
                    </label>
                </div>
                <button className="btn btn-primary btn-full" type="submit">
                    Отправить
                </button>
            </form>
        </div>
    );
}