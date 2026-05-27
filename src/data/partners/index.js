import {foreignPartners} from './foreign'
import {russianPartners} from './russian'
import {cybersecurityPartners} from './cybersecurity'

export const allPartners = [
    ...foreignPartners,
    ...russianPartners,
    ...cybersecurityPartners,
]

export const partnersMap = Object.fromEntries(
    allPartners.map((partner) => [
        partner.slug,
        partner,
    ])
)

export {
    foreignPartners,
    russianPartners,
    cybersecurityPartners,
}