import {useParams} from 'react-router-dom'
import PartnerLayout from '../../components/partners/PartnerLayout'
import {partnersMap} from '../../data/partners'
import SEO from '../../components/SEO'

export default function PartnerPage() {
    const {slug} = useParams()
    const partner = partnersMap[slug]

    if (!partner) {
        return <div>Partner not found</div>
    }

    // Формируем описание из партнера (без HTML тегов для мета-тега)
    const plainDescription = partner.description?.replace(/<[^>]*>/g, '').slice(0, 160) || ''

    return (
        <>
            <SEO title={`${partner.title} | Партнер IT Alliance`} description={plainDescription} keywords={partner.categories?.join(', ')} url={`https://it-alliance.ru/partners/${slug}`}/>
            <PartnerLayout partner={partner}/>
        </>
    )
}