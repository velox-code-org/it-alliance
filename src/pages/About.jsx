import CompanyImg from "@/assets/images/it-alliance-company.png";

const About = () => {
    return (

        <div className="container">
            <div className="py-9">
                <div className="page-header mx-auto">
                    <span className="corner-tl"></span>
                    <span className="corner-tr"></span>
                    <span className="corner-br"></span>
                    <span className="corner-bl"></span>
                    <h1 className="h2">О КОМПАНИИ</h1>
                </div>
            </div>
            <div className="text text-center mb-7">
                <p className="mb-2"><strong>IT Alliance – ваш надежный партнер в мире передовых IT-решений.</strong></p>
                <p className="mb-2">С момента основания мы находимся в авангарде технологий, помогая бизнесу любого масштаба строить эффективную, безопасную и масштабируемую IT-инфраструктуру. Наша миссия - не просто следовать рынку, а опережать его, предлагая решения, которые открывают новые возможности для роста.</p>
                <p className="mb-2">Мы верим: успех клиента - это наш успех. Именно это лежит в основе нашей работы. Каждый проект мы строим на индивидуальном подходе, глубоком анализе задач и долгосрочном партнерстве.</p>
                <h3 className="h3 color-primary ttu">Что нас выделяет?</h3>
            </div>
            <div className="grid-md-2 mb-6">
                <div className="num-block">
                    <div className="num">1</div>
                    <div>
                        <h4>Комплексные решения под ключ</h4>
                        От консультаций и проектирования до поставки и технической поддержки. Мы берем на себя полный цикл.
                    </div>
                </div>
                <div className="num-block">
                    <div className="num">2</div>
                    <div>
                        <h4>Оборудование от лидеров рынка</h4>
                        Поставляем оригинальное оборудование от ведущих производителей: Huawei, XFusion, Broadcom и других. Гарантируем подлинность и совместимость.
                    </div>
                </div>
                <div className="num-block">
                    <div className="num">3</div>
                    <div>
                        <h4>Сервисная поддержка в новых реалиах</h4>
                        Сегодня, когда прямое взаимодействие с вендорами ограничено, мы выступаем вашим представителем: ведем сервисные заявки, организуем поставку запчастей из Азии и СНГ и контролируем сроки ремонта.
                    </div>
                </div>
                <div className="num-block">
                    <div className="num">4</div>
                    <div>
                        <h4>Техническая экспертиза и гибкость</h4>
                        Наша команда - это высококвалифицированные инженеры с опытом в проектах любой сложности. Предлагаем гибкие SLA, выездную диагностику, 24/7 поддержку и конкурентоспособные условия сотрудничества.
                    </div>
                </div>
            </div>
            <div className="text-center mb-5">
                <p>От малого бизнеса до крупной корпорации - мы делаем технологии прозрачными, надежными и работающими на результат. </p>
                <p>IT Alliance - не просто поставщик. Мы ваш стратегический партнер в цифровой трансформации.</p>
            </div>
            <div className="mx-auto" style={{maxWidth: '50rem', display: 'block'}}>
                <img src={CompanyImg} alt="Company"/>
            </div>
        </div>
    );
};
export default About;