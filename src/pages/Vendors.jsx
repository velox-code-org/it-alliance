// Vendors.jsx
import { useState } from 'react';
import LogoCardVendors from '../components/LogoCardVendors';

// Импорты для зарубежных вендоров
import Huawei from '../components/vendorsComponents/Huawei';
import Xfusion from '../components/vendorsComponents/Xfusion'
import Juniper from '../components/vendorsComponents/Juniper'
import IBM from '../components/vendorsComponents/IBM'
import Hp from '../components/vendorsComponents/Hp'
import Delta from '../components/vendorsComponents/Delta'
import Unv from '../components/vendorsComponents/Unv'
import Dji from '../components/vendorsComponents/Dji'
import Dell from '../components/vendorsComponents/Dell'
import Lenovo from '../components/vendorsComponents/lenovo'
import Depo from '../components/vendorsComponents/Depo'
import Qtech from '../components/vendorsComponents/Qtech'
import Mellanox from '../components/vendorsComponents/Mellanox'
import H3c from '../components/vendorsComponents/H3c'
import NetApp from '../components/vendorsComponents/NetApp'
import Supermicro from '../components/vendorsComponents/Supermicro'
import Brocade from '../components/vendorsComponents/Brocade'
import Cisco from '../components/vendorsComponents/Cisco'
import Nebo from '../components/vendorsComponents/Nebo'
import Hitachi from '../components/vendorsComponents/Hitachi'
import Dallmeier from '../components/vendorsComponents/Dallmeier';
import Sinexcel from '../components/vendorsComponents/Sinexcel';
import Evadapower from '../components/vendorsComponents/Evadapower';

// Импорты для отечественных вендоров
import Cyberprotect from '../components/vendorsComponents/Cyberprotect';
import Astra from '../components/vendorsComponents/Astra';
import Idisglobal from '../components/vendorsComponents/Idisglobal';
import Openyard from '../components/vendorsComponents/Openyard';
import Dataru from '../components/vendorsComponents/Dataru';
import IqTools from '../components/vendorsComponents/Iq-tools';
import Vectortechnologies from '../components/vendorsComponents/Vectortechnologies';
import Kraftway from '../components/vendorsComponents/Kraftway';
import Yadro from '../components/vendorsComponents/Yadro';
import EltexCo from '../components/vendorsComponents/Eltex-co';
import Sangrus from '../components/vendorsComponents/Sangrus';
import RedSoft from '../components/vendorsComponents/Red-soft';
import Basealt from '../components/vendorsComponents/Basealt';
import Orionsoft from '../components/vendorsComponents/Orionsoft';
import Mindsw from '../components/vendorsComponents/Mindsw';
import R7Office from '../components/vendorsComponents/R7-office';
import Myoffice from '../components/vendorsComponents/Myoffice';
import Communigatepro from '../components/vendorsComponents/Communigatepro';
import Workspacevk from '../components/vendorsComponents/Workspacevk';
import Termidesk from '../components/vendorsComponents/Termidesk';
import Workspad from '../components/vendorsComponents/Workspad';
import Rupost from '../components/vendorsComponents/Rupost';
import Aquarius from '../components/vendorsComponents/Aquarius';

export default function Vendors() {
    const [activeTab, setActiveTab] = useState('foreign'); // 'foreign' или 'russian'

    // Массивы вендоров для удобства
    const foreignVendors = [
        { component: Huawei, path: '/vendors/huawei' },
        { component: Xfusion, path: '/vendors/xfusion' },
        { component: Juniper, path: '/vendors/juniper' },
        { component: IBM, path: '/vendors/ibm' },
        { component: Hp, path: '/vendors/hp' },
        { component: Delta, path: '/vendors/delta' },
        { component: Unv, path: '/vendors/unv' },
        { component: Dji, path: '/vendors/dji' },
        { component: Dell, path: '/vendors/dell' },
        { component: Lenovo, path: '/vendors/lenovo' },
        { component: Qtech, path: '/vendors/qtech' },
        { component: Mellanox, path: '/vendors/mellanox' },
        { component: H3c, path: '/vendors/h3c' },
        { component: NetApp, path: '/vendors/netapp' },
        { component: Supermicro, path: '/vendors/supermicro' },
        { component: Brocade, path: '/vendors/brocade' },
        { component: Cisco, path: '/vendors/cisco' },
        { component: Hitachi, path: '/vendors/hitachi' },
        { component: Dallmeier, path: '/vendors/dallmeier' },
        { component: Sinexcel, path: '/vendors/sinexcel' },
        { component: Evadapower, path: '/vendors/evadapower' },
    ];

    const russianVendors = [
        { component: Cyberprotect, path: '/vendors/cyberprotect' },
        { component: Astra, path: '/vendors/astra' },
        { component: Idisglobal, path: '/vendors/idisglobal' },
        { component: Openyard, path: '/vendors/openyard' },
        { component: Dataru, path: '/vendors/dataru' },
        { component: IqTools, path: '/vendors/iq-tools' },
        { component: Vectortechnologies, path: '/vendors/vectortechnologies' },
        { component: Kraftway, path: '/vendors/kraftway' },
        { component: Yadro, path: '/vendors/yadro' },
        { component: Depo, path: '/vendors/depo' },
        { component: EltexCo, path: '/vendors/eltex-co' },
        { component: Sangrus, path: '/vendors/sangrus' },
        { component: RedSoft, path: '/vendors/red-soft' },
        { component: Basealt, path: '/vendors/basealt' },
        { component: Orionsoft, path: '/vendors/orionsoft' },
        { component: Mindsw, path: '/vendors/mindsw' },
        { component: R7Office, path: '/vendors/r7-office' },
        { component: Nebo, path: '/vendors/nebo' },
        { component: Myoffice, path: '/vendors/myoffice' },
        { component: Communigatepro, path: '/vendors/communigatepro' },
        { component: Workspacevk, path: '/vendors/workspacevk' },
        { component: Termidesk, path: '/vendors/termidesk' },
        { component: Workspad, path: '/vendors/workspad' },
        { component: Rupost, path: '/vendors/rupost' },
        { component: Aquarius, path: '/vendors/aquarius' },
    ];

    return (
        <div className="min-h-dvh bg-brand-black py-40">
            <h1 className="
                    text-center mb-10 font-bold uppercase mx-5 text-white
                    xl:text-[58px] lg:text-[50px] max-[1260px]:text-[45px]
                    max-[1024px]:text-[40px] max-[768px]:text-[34px]
                    max-[576px]:text-[30px] max-[480px]:text-[26px]
                    max-[370px]:text-[22px]
                ">
                НАШИ <span className="italic font-normal underline decoration-red-500">ВЕНДОРЫ</span>
            </h1>
            {/* Табы */}
            <div className="flex justify-center mb-12">
            <div className="inline-flex">
                    <button
                        onClick={() => setActiveTab('foreign')}
                        className={`
                            px-8 py-3 text-lg font-medium rounded-full transition-all
                            max-[576px]:px-4 max-[576px]:py-2 max-[576px]:text-base
                            ${activeTab === 'foreign'
                            ? 'bg-red-600 text-white shadow-lg'
                            : 'text-gray-300 hover:text-white hover:bg-gray-700'
                        }
                        `}
                    >
                        ЗАРУБЕЖНЫЕ
                    </button>
                    <button
                        onClick={() => setActiveTab('russian')}
                        className={`
                            px-8 py-3 text-lg font-medium rounded-full transition-all
                            max-[576px]:px-4 max-[576px]:py-2 max-[576px]:text-base
                            ${activeTab === 'russian'
                            ? 'bg-red-600 text-white shadow-lg'
                            : 'text-gray-300 hover:text-white hover:bg-gray-700'
                        }
                        `}
                    >
                        ОТЕЧЕСТВЕННЫЕ
                    </button>
                </div>
            </div>

            {/* Контент */}
            <div className="
                mx-auto
                w-[70%] max-[1600px]:w-[80%] max-[1440px]:w-[80%]
                max-[1260px]:w-[85%] max-[1024px]:w-[95%] max-[992px]:w-[95%]
                max-[768px]:w-[95%] max-[576px]:w-[90%] max-[480px]:w-[90%]
                max-[370px]:w-[90%]
            ">
                <div className="
                    grid grid-cols-4 gap-8
                    max-[576px]:grid-cols-2 max-[480px]:grid-cols-2 max-[370px]:grid-cols-2
                ">
                    {activeTab === 'foreign'
                        ? foreignVendors.map((vendor, index) => (
                            <div key={index} className="flex justify-center">
                                <LogoCardVendors Image={vendor.component} href={vendor.path} />
                            </div>
                        ))
                        : russianVendors.map((vendor, index) => (
                            <div key={index} className="flex justify-center">
                                <LogoCardVendors Image={vendor.component} href={vendor.path} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}