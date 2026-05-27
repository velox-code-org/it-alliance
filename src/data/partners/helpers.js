// Import all partner logos automatically
const logos = import.meta.glob(
    '../../assets/partners/**/*.{png,svg,jpg,jpeg,webp}',
    {
        eager: true,
        import: 'default',
    }
)

/**
 * Get logo by filename
 *
 * Example:
 * getPartnerLogo('foreign', 'huawei')
 */
export const getPartnerLogo = (category, name) => {
    const key = Object.keys(logos).find((path) => {
        const normalizedPath = path.toLowerCase()

        return (
            normalizedPath.includes(`/partners/${category}/`) &&
            normalizedPath.includes(`/${name.toLowerCase()}.`)
        )
    })

    return key ? logos[key] : ''
}