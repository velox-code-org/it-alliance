import {Helmet} from 'react-helmet-async'

const SEO = ({title, description, keywords, image, url}) => {
    const siteTitle = 'IT Alliance'
    const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle
    const siteDescription = description || 'IT Alliance — надежный партнер и дистрибутор IT-оборудования. Поставка серверов, СХД, сетевого оборудования. Решения для бизнеса любого масштаба.'
    const siteUrl = url || 'https://it-alliance.ru'
    const defaultImage = '/logo-og.png'

    return (
        <Helmet>
            {/* HTML Tags */}
            <title>{fullTitle}</title>
            <meta name="description" content={siteDescription}/>
            {keywords && <meta name="keywords" content={keywords}/>}
            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website"/>
            <meta property="og:title" content={fullTitle}/>
            <meta property="og:description" content={siteDescription}/>
            <meta property="og:image" content={image || defaultImage}/>
            <meta property="og:url" content={siteUrl}/>
            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image"/>
            <meta name="twitter:title" content={fullTitle}/>
            <meta name="twitter:description" content={siteDescription}/>
            <meta name="twitter:image" content={image || defaultImage}/>
            {/* Links */}
            <link rel="canonical" href={siteUrl}/>
        </Helmet>
    )
}

export default SEO