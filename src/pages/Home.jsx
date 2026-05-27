import Hero from "../components/home/sections/Hero"
import AboutCompany from "../components/home/sections/AboutCompany"
import MainDirections from "../components/home/sections/MainDirections"
import OurClients from "../components/home/sections/OurClients"
import OurPartners from "../components/home/sections/OurPartners"
import SEO from "../components/SEO"

const Home = () => {
    return (
        <>
            <SEO title="Надежный партнер и дистрибутор IT-оборудования" description="IT Alliance — поставка серверов, СХД, сетевого оборудования, компьютерной техники и ПО для бизнеса. Решения под ключ, техническая поддержка, импортозамещение." keywords="поставка IT оборудования, дистрибутор IT, серверы, СХД, сетевое оборудование, компьютерная техника, программное обеспечение, импортозамещение, IT Alliance" url="https://it-alliance.ru/"/>
            <div className="relative">
                <div id="hero" className="anchor-offset"></div>
                <Hero/>
                <div id="about-company" className="anchor-offset"></div>
                <AboutCompany/>
                <div id="main-directions" className="anchor-offset"></div>
                <MainDirections/>
                <div id="our-clients" className="anchor-offset"></div>
                <OurClients/>
                <div id="our-partners" className="anchor-offset"></div>
                <OurPartners/>
            </div>
        </>
    )
}

export default Home