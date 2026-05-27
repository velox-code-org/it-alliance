import {getPartnerLogo} from './helpers'

export const cybersecurityPartners = [
    {
        slug: 'checkpoint',
        title: 'CheckPoint',
        logo: getPartnerLogo('cybersecurity', 'checkpoint'),
        categories: ['СЕТЬ', 'БЕЗОПАСНОСТЬ'],
        description: `
            <p><strong>CheckPoint</strong> — израильско-американская компания, один из мировых лидеров в области кибербезопасности. Компания разрабатывает и предоставляет комплексные решения для защиты корпоративных сетей, облачных сред, мобильных устройств и конечных точек.</p>
            
            <p>CheckPoint известна своими технологиями межсетевых экранов (Firewall), систем предотвращения вторжений (IPS), VPN, а также единой платформой управления безопасностью Infinity Architecture, обеспечивающей многоуровневую защиту от самых современных киберугроз.</p>
        `,
        website: 'https://www.checkpoint.com/',
    },
    {
        slug: 'positive-technologies',
        title: 'Positive Technologies',
        logo: getPartnerLogo('cybersecurity', 'positive-technologies'),
        categories: ['БЕЗОПАСНОСТЬ', 'ПО'],
        description: `
            <p><strong>Positive Technologies</strong> — российская компания, один из лидеров в области информационной безопасности. Компания специализируется на анализе защищенности, обнаружении уязвимостей и управлении уязвимостями.</p>
            
            <p>Продукты Positive Technologies помогают организациям выявлять и устранять критические уязвимости, защищать корпоративные сети и соответствовать требованиям регуляторов. Компания известна своими решениями для анализа защищенности приложений, сетей и инфраструктуры.</p>
        `,
        website: 'https://www.ptsecurity.com/',
    },
    {
        slug: 'usergate',
        title: 'UserGate',
        logo: getPartnerLogo('cybersecurity', 'usergate'),
        categories: ['СЕТЬ', 'БЕЗОПАСНОСТЬ'],
        description: `
            <p><strong>UserGate</strong> — российский разработчик комплексных решений для информационной безопасности, включая межсетевые экраны следующего поколения (NGFW), системы предотвращения вторжений (IPS), защиты от утечек данных (DLP) и других средств защиты.</p>
            
            <p>UserGate предлагает единую платформу для управления безопасностью корпоративных сетей, обеспечивая высокую производительность, надежность и соответствие требованиям регуляторов.</p>
        `,
        website: 'https://usergate.com/',
    },
    {
        slug: 'code-security',
        title: 'Код Безопасности',
        logo: getPartnerLogo('cybersecurity', 'code-security'),
        categories: ['БЕЗОПАСНОСТЬ'],
        description: `
            <p><strong>Код Безопасности</strong> — российская компания, разработчик решений для информационной безопасности. Специализируется на создании средств защиты информации для государственных организаций и корпоративного сектора.</p>
            
            <p>Продукты компании включены в реестр отечественного программного обеспечения и сертифицированы ФСТЭК России, ФСБ России и Минобороны России.</p>
        `,
        website: 'https://www.securitycode.ru/',
    },
    {
        slug: 'infowatch',
        title: 'Infowatch',
        logo: getPartnerLogo('cybersecurity', 'infowatch'),
        categories: ['БЕЗОПАСНОСТЬ', 'ПО'],
        description: `
            <p><strong>Infowatch</strong> — российская компания, ведущий разработчик систем для предотвращения утечек данных (DLP-систем). Флагманский продукт компании — InfoWatch Traffic Monitor, обеспечивающий комплексную защиту конфиденциальной информации.</p>
            
            <p>Решения InfoWatch используются в государственных организациях, финансовом секторе, топливно-энергетическом комплексе и других отраслях, требующих высокой степени защиты информации.</p>
        `,
        website: 'https://www.infowatch.ru/',
    },
    {
        slug: 'crypto-pro',
        title: 'Крипто-Про',
        logo: getPartnerLogo('cybersecurity', 'crypto-pro'),
        categories: ['БЕЗОПАСНОСТЬ', 'ПО'],
        description: `
            <p><strong>Крипто-Про</strong> — российская компания, разработчик средств криптографической защиты информации (СКЗИ). Компания является одним из лидеров на рынке электронной подписи и криптографических решений.</p>
            
            <p>Продукты Крипто-Про сертифицированы ФСБ России и широко используются для обеспечения юридической значимости электронного документооборота, защиты каналов связи и хранения информации.</p>
        `,
        website: 'https://www.cryptopro.ru/',
    },
    {
        slug: 'palo-alto',
        title: 'Palo Alto',
        logo: getPartnerLogo('cybersecurity', 'palo-alto'),
        categories: ['СЕТЬ', 'БЕЗОПАСНОСТЬ'],
        description: `
            <p><strong>Palo Alto Networks</strong> — американская компания, мировой лидер в области кибербезопасности. Компания известна своими решениями для защиты корпоративных сетей, облачных сред и конечных устройств.</p>
            
            <p>Флагманский продукт — PAN-OS, операционная система для межсетевых экранов следующего поколения (NGFW), обеспечивающая глубокую инспекцию трафика, предотвращение вторжений и защиту от угроз на основе машинного обучения.</p>
        `,
        website: 'https://www.paloaltonetworks.com/',
    },
    {
        slug: 'fortinet',
        title: 'Fortinet',
        logo: getPartnerLogo('cybersecurity', 'fortinet'),
        categories: ['СЕТЬ', 'БЕЗОПАСНОСТЬ'],
        description: `
            <p><strong>Fortinet</strong> — американская компания, один из мировых лидеров в области кибербезопасности. Флагманский продукт — FortiGate, платформа для межсетевых экранов следующего поколения (NGFW).</p>
            
            <p>Fortinet предлагает интегрированную платформу Security Fabric, объединяющую различные средства защиты — от сетевых экранов до антивирусной защиты и систем предотвращения вторжений.</p>
        `,
        website: 'https://www.fortinet.com/',
    },
    {
        slug: 'kaspersky',
        title: 'Лаборатория Касперского',
        logo: getPartnerLogo('cybersecurity', 'kaspersky'),
        categories: ['БЕЗОПАСНОСТЬ', 'ПО'],
        description: `
            <p><strong>Лаборатория Касперского</strong> — российская компания, один из мировых лидеров в области разработки решений для кибербезопасности. Компания известна своими антивирусными продуктами, защитой корпоративных сетей и средствами защиты критической инфраструктуры.</p>
            
            <p>Продукты Лаборатории Касперского используются миллионами пользователей по всему миру для защиты от вредоносного ПО, фишинга, ransomware и других киберугроз.</p>
        `,
        website: 'https://www.kaspersky.ru/',
    },
    {
        slug: 'efros',
        title: 'Efros',
        logo: getPartnerLogo('cybersecurity', 'efros'),
        categories: ['БЕЗОПАСНОСТЬ'],
        description: `
            <p><strong>Efros</strong> — российская компания, разработчик средств защиты информации и систем обеспечения информационной безопасности. Специализируется на создании решений для государственных организаций и корпоративного сектора.</p>
        `,
        website: 'https://www.efros.ru/',
    },
    {
        slug: 'r-vision',
        title: 'R-Vision',
        logo: getPartnerLogo('cybersecurity', 'r-vision'),
        categories: ['БЕЗОПАСНОСТЬ', 'ПО'],
        description: `
            <p><strong>R-Vision</strong> — российская компания, разработчик платформы для управления информационной безопасностью. Решения R-Vision автоматизируют процессы управления уязвимостями, инцидентами и соответствием требованиям регуляторов.</p>
            
            <p>Платформа R-Vision помогает организациям централизованно управлять рисками и обеспечивать непрерывный мониторинг состояния защищенности.</p>
        `,
        website: 'https://rvision.ru/',
    },
    {
        slug: 'webmonitorex',
        title: 'Вебмониторэкс',
        logo: getPartnerLogo('cybersecurity', 'webmonitorex'),
        categories: ['БЕЗОПАСНОСТЬ', 'ПО'],
        description: `
            <p><strong>Вебмониторэкс</strong> — российская компания, специализирующаяся на разработке систем мониторинга и защиты веб-ресурсов. Продукты компании обеспечивают защиту от DDoS-атак и других угроз для веб-приложений.</p>
        `,
        website: 'https://www.webmonitorex.ru/',
    },
    {
        slug: 'security-vision',
        title: 'Security Vision',
        logo: getPartnerLogo('cybersecurity', 'security-vision'),
        categories: ['БЕЗОПАСНОСТЬ', 'ПО'],
        description: `
            <p><strong>Security Vision</strong> — российская компания, разработчик решений для управления информационной безопасностью. Продукты компании автоматизируют процессы управления уязвимостями, мониторинга событий безопасности и реагирования на инциденты.</p>
        `,
        website: 'https://securityvision.ru/',
    },
    {
        slug: 'redcheck',
        title: 'RedCheck',
        logo: getPartnerLogo('cybersecurity', 'redcheck'),
        categories: ['БЕЗОПАСНОСТЬ'],
        description: `
            <p><strong>RedCheck</strong> — российская компания, специализирующаяся на анализе защищенности и тестировании на проникновение. Компания предлагает услуги и продукты для оценки безопасности информационных систем.</p>
        `,
        website: 'https://redcheck.ru/',
    },
    {
        slug: 'it-bastion',
        title: 'АйТи-Бастион',
        logo: getPartnerLogo('cybersecurity', 'it-bastion'),
        categories: ['БЕЗОПАСНОСТЬ'],
        description: `
            <p><strong>АйТи-Бастион</strong> — российская компания, разработчик решений для защиты информационных систем. Специализируется на создании средств контроля доступа и защиты от несанкционированного доступа.</p>
        `,
        website: 'https://it-bastion.ru/',
    },
    {
        slug: 'solar',
        title: 'Solar',
        logo: getPartnerLogo('cybersecurity', 'solar'),
        categories: ['БЕЗОПАСНОСТЬ', 'ПО'],
        description: `
            <p><strong>Solar</strong> — российская компания, входящая в ГК «Солар», один из лидеров рынка информационной безопасности. Компания предлагает комплексные решения для защиты корпоративных сетей, контроля доступа и управления безопасностью.</p>
            
            <p>Продукты Solar используются в государственных организациях, финансовом секторе и крупных корпорациях для обеспечения комплексной защиты ИТ-инфраструктуры.</p>
        `,
        website: 'https://solar.security/',
    },
    {
        slug: 'cyberpeak',
        title: 'CyberPeak',
        logo: getPartnerLogo('cybersecurity', 'cyberpeak'),
        categories: ['БЕЗОПАСНОСТЬ'],
        description: `
            <p><strong>CyberPeak</strong> — российская компания, специализирующаяся на разработке решений для кибербезопасности. Продукты компании ориентированы на защиту корпоративных систем и данных.</p>
        `,
        website: 'https://cyberpeak.ru/',
    },
    {
        slug: 'garda',
        title: 'Гарда',
        logo: getPartnerLogo('cybersecurity', 'garda'),
        categories: ['БЕЗОПАСНОСТЬ', 'ПО'],
        description: `
            <p><strong>Гарда</strong> — российская компания, разработчик решений для защиты информации от утечек (DLP). Продукты компании обеспечивают контроль передачи данных и предотвращение инцидентов безопасности.</p>
        `,
        website: 'https://garda.ru/',
    },
    {
        slug: 'orlan-dcap',
        title: 'Орлан Dcap',
        logo: getPartnerLogo('cybersecurity', 'orlan-dcap'),
        categories: ['БЕЗОПАСНОСТЬ'],
        description: `
            <p><strong>Орлан Dcap</strong> — российская компания, разработчик решений для защиты данных и контроля доступа. Специализируется на создании средств защиты для корпоративного сектора.</p>
        `,
        website: 'https://orlandcap.ru/',
    },
    {
        slug: 'secret-cloud',
        title: 'Secret Cloud',
        logo: getPartnerLogo('cybersecurity', 'secret-cloud'),
        categories: ['БЕЗОПАСНОСТЬ', 'ОБЛАКО'],
        description: `
            <p><strong>Secret Cloud</strong> — российская компания, разработчик облачных решений для защиты информации. Продукты компании обеспечивают безопасное хранение и обработку данных в облачных средах.</p>
        `,
        website: 'https://secretcloud.ru/',
    },
    {
        slug: 'mitrasoft',
        title: 'MitraSoft',
        logo: getPartnerLogo('cybersecurity', 'mitrasoft'),
        categories: ['БЕЗОПАСНОСТЬ', 'ПО'],
        description: `
            <p><strong>MitraSoft</strong> — российская компания, разработчик программного обеспечения для управления бизнес-процессами и информационной безопасности. Специализируется на создании решений для государственных организаций и крупного бизнеса.</p>
        `,
        website: 'https://mitrasoft.ru/',
    },
    {
        slug: 'mflash',
        title: 'Mflash',
        logo: getPartnerLogo('cybersecurity', 'mflash'),
        categories: ['БЕЗОПАСНОСТЬ'],
        description: `
            <p><strong>Mflash</strong> — российская компания, специализирующаяся на разработке решений в области информационной безопасности и защиты данных.</p>
        `,
        website: 'https://mflash.ru/',
    },
    {
        slug: 'crosstech',
        title: 'CrossTech',
        logo: getPartnerLogo('cybersecurity', 'crosstech'),
        categories: ['БЕЗОПАСНОСТЬ'],
        description: `
            <p><strong>CrossTech</strong> — российская компания, разработчик решений в области информационной безопасности и технологической интеграции.</p>
        `,
        website: 'https://crosstech.ru/',
    },
    {
        slug: 'avanpost',
        title: 'Avanpost',
        logo: getPartnerLogo('cybersecurity', 'avanpost'),
        categories: ['БЕЗОПАСНОСТЬ', 'ПО'],
        description: `
            <p><strong>Avanpost</strong> — российская компания, разработчик решений для управления доступом и аутентификацией. Продукты компании обеспечивают защиту корпоративных систем и учетных записей.</p>
        `,
        website: 'https://avanpost.ru/',
    },
    {
        slug: 'multifactor',
        title: 'Multifactor',
        logo: getPartnerLogo('cybersecurity', 'multifactor'),
        categories: ['БЕЗОПАСНОСТЬ', 'ПО'],
        description: `
            <p><strong>Multifactor</strong> — российская компания, специализирующаяся на разработке решений для многофакторной аутентификации и защиты учетных записей.</p>
        `,
        website: 'https://multifactor.ru/',
    },
    {
        slug: 'aladdin',
        title: 'Алладин',
        logo: getPartnerLogo('cybersecurity', 'aladdin'),
        categories: ['БЕЗОПАСНОСТЬ', 'ПО'],
        description: `
            <p><strong>Алладин</strong> — российская компания, разработчик средств криптографической защиты информации и электронной подписи. Продукты компании сертифицированы ФСБ России и используются для обеспечения юридической значимости электронного документооборота.</p>
        `,
        website: 'https://www.aladdin-rd.ru/',
    },
]