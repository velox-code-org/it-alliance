// Import all client logos automatically
const clientLogos = import.meta.glob(
    '../../assets/clients/*.{png,svg,jpg,jpeg,webp}',
    {
        eager: true,
        import: 'default',
    }
)


/**
 * Get client logo by filename
 *
 * Example:
 * getClientLogo('client-1')
 * getClientLogo('gazprom')
 */
export const getClientLogo = (name) => {
    const key = Object.keys(clientLogos).find((path) => {
        const fileName = path.split('/').pop().toLowerCase()
        const targetName = name.toLowerCase()

        return fileName === `${targetName}.png` ||
            fileName === `${targetName}.svg` ||
            fileName === `${targetName}.jpg` ||
            fileName === `${targetName}.jpeg` ||
            fileName === `${targetName}.webp` ||
            fileName.startsWith(`${targetName}.`)
    })

    return key ? clientLogos[key] : ''
}