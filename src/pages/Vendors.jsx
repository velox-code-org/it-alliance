import LogoCardVendors from '../components/LogoCardVendors';

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

// Импорты для новых вендоров
import Cyberprotect from '../components/vendorsComponents/Cyberprotect';
import Astra from '../components/vendorsComponents/Astra';
import Dallmeier from '../components/vendorsComponents/Dallmeier';
import Idisglobal from '../components/vendorsComponents/Idisglobal';
import Openyard from '../components/vendorsComponents/Openyard';
import Dataru from '../components/vendorsComponents/Dataru';
import Sinexcel from '../components/vendorsComponents/Sinexcel';
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
import Evadapower from '../components/vendorsComponents/Evadapower';
import Aquarius from '../components/vendorsComponents/Aquarius';

export default function Vendors() {
    return (
        <div className="min-h-dvh bg-brand-black py-40">

            <h1
                className="
    text-center mb-20 font-bold uppercase mx-5 text-white
    xl:text-[58px]
    lg:text-[50px]
    max-[1260px]:text-[45px]
    max-[1024px]:text-[40px]
    max-[768px]:text-[34px]
    max-[576px]:text-[30px]
    max-[480px]:text-[26px]
    max-[370px]:text-[22px]
  "
            >
                НАШИ{" "}
                <span
                    className="italic font-normal underline decoration-red-500"
                >
                 ЗАРУБЕЖНЫЕ ВЕНДОРЫ
                </span>
            </h1>
            <div className="
            mb-30
                mx-auto
                w-[70%]
                max-[1600px]:w-[80%]
                max-[1440px]:w-[80%]
                max-[1260px]:w-[85%]
                max-[1024px]:w-[95%]
                max-[992px]:w-[95%]
                max-[768px]:w-[95%]
                max-[576px]:w-[90%]
                max-[480px]:w-[90%]
                max-[370px]:w-[90%]
              ">

                <div className="
                    grid grid-cols-4 gap-8
                    max-[576px]:grid-cols-2
                    max-[480px]:grid-cols-2
                    max-[370px]:grid-cols-2
                    ">

                    {/* Существующие зарубежные вендоры */}
                    <div className="flex justify-center ">
                        <LogoCardVendors Image={Huawei} href="/vendors/huawei" />
                    </div>

                    <div className="flex justify-center ">
                        <LogoCardVendors Image={Xfusion} href="/vendors/xfusion" />
                    </div>

                    <div className="flex justify-center ">
                        <LogoCardVendors Image={Juniper} href="/vendors/juniper" />
                    </div>

                    <div className="flex justify-center ">
                        <LogoCardVendors Image={IBM} href="/vendors/ibm" />
                    </div>

                    <div className="flex justify-center ">
                        <LogoCardVendors Image={Hp} href="/vendors/hp" />
                    </div>

                    <div className="flex justify-center ">
                        <LogoCardVendors Image={Delta} href="/vendors/delta" />
                    </div>

                    <div className="flex justify-center ">
                        <LogoCardVendors Image={Unv} href="/vendors/unv" />
                    </div>

                    <div className="flex justify-center ">
                        <LogoCardVendors Image={Dji} href="/vendors/dji" />
                    </div>

                    <div className="flex justify-center ">
                        <LogoCardVendors Image={Dell} href="/vendors/dell" />
                    </div>

                    <div className="flex justify-center ">
                        <LogoCardVendors Image={Lenovo} href="/vendors/lenovo" />
                    </div>

                    <div className="flex justify-center ">
                        <LogoCardVendors Image={Depo} href="/vendors/depo" />
                    </div>

                    <div className="flex justify-center ">
                        <LogoCardVendors Image={Qtech} href="/vendors/qtech" />
                    </div>

                    <div className="flex justify-center ">
                        <LogoCardVendors Image={Mellanox} href="/vendors/mellanox" />
                    </div>

                    <div className="flex justify-center ">
                        <LogoCardVendors Image={H3c} href="/vendors/h3c" />
                    </div>

                    <div className="flex justify-center ">
                        <LogoCardVendors Image={NetApp} href="/vendors/netapp" />
                    </div>

                    <div className="flex justify-center ">
                        <LogoCardVendors Image={Supermicro} href="/vendors/supermicro" />
                    </div>

                    <div className="flex justify-center ">
                        <LogoCardVendors Image={Brocade} href="/vendors/brocade" />
                    </div>

                    <div className="flex justify-center ">
                        <LogoCardVendors Image={Cisco} href="/vendors/cisco" />
                    </div>

                    <div className="flex justify-center ">
                        <LogoCardVendors Image={Nebo} href="/vendors/nebo" />
                    </div>

                    <div className="flex justify-center ">
                        <LogoCardVendors Image={Hitachi} href="/vendors/hitachi" />
                    </div>

                    {/* Новые зарубежные вендоры */}
                    <div className="flex justify-center">
                        <LogoCardVendors Image={Dallmeier} href="/vendors/dallmeier" />
                    </div>

                    <div className="flex justify-center">
                        <LogoCardVendors Image={Sinexcel} href="/vendors/sinexcel" />
                    </div>

                    <div className="flex justify-center">
                        <LogoCardVendors Image={Evadapower} href="/vendors/evadapower" />
                    </div>
                </div>
            </div>

            <h2
                className="
    text-center mb-20 font-bold uppercase mx-5 text-white
    xl:text-[58px]
    lg:text-[50px]
    max-[1260px]:text-[45px]
    max-[1024px]:text-[40px]
    max-[768px]:text-[34px]
    max-[576px]:text-[30px]
    max-[480px]:text-[26px]
    max-[370px]:text-[22px]
  "
            >
                НАШИ{" "}
                <span
                    className="italic font-normal underline decoration-red-500"
                >
                 ОТЕЧЕСТВЕННЫЕ ВЕНДОРЫ
                </span>
            </h2>
            <div className="
            mb-30
                mx-auto
                w-[70%]
                max-[1600px]:w-[80%]
                max-[1440px]:w-[80%]
                max-[1260px]:w-[85%]
                max-[1024px]:w-[95%]
                max-[992px]:w-[95%]
                max-[768px]:w-[95%]
                max-[576px]:w-[90%]
                max-[480px]:w-[90%]
                max-[370px]:w-[90%]
              ">

                <div className="
                    grid grid-cols-4 gap-8
                    max-[576px]:grid-cols-2
                    max-[480px]:grid-cols-2
                    max-[370px]:grid-cols-2
                    ">

                    {/* Существующие отечественные вендоры */}
                    <div className="flex justify-center">
                        <LogoCardVendors Image={Cyberprotect} href="/vendors/cyberprotect" />
                    </div>
                    <div className="flex justify-center">
                        <LogoCardVendors Image={Astra} href="/vendors/astra" />
                    </div>
                    <div className="flex justify-center">
                        <LogoCardVendors Image={Idisglobal} href="/vendors/idisglobal" />
                    </div>

                    {/* Новые отечественные вендоры */}
                    <div className="flex justify-center">
                        <LogoCardVendors Image={Openyard} href="/vendors/openyard" />
                    </div>
                    <div className="flex justify-center">
                        <LogoCardVendors Image={Dataru} href="/vendors/dataru" />
                    </div>
                    <div className="flex justify-center">
                        <LogoCardVendors Image={IqTools} href="/vendors/iq-tools" />
                    </div>
                    <div className="flex justify-center">
                        <LogoCardVendors Image={Vectortechnologies} href="/vendors/vectortechnologies" />
                    </div>
                    <div className="flex justify-center">
                        <LogoCardVendors Image={Kraftway} href="/vendors/kraftway" />
                    </div>
                    <div className="flex justify-center">
                        <LogoCardVendors Image={Yadro} href="/vendors/yadro" />
                    </div>
                    <div className="flex justify-center">
                        <LogoCardVendors Image={EltexCo} href="/vendors/eltex-co" />
                    </div>
                    <div className="flex justify-center">
                        <LogoCardVendors Image={Sangrus} href="/vendors/sangrus" />
                    </div>
                    <div className="flex justify-center">
                        <LogoCardVendors Image={RedSoft} href="/vendors/red-soft" />
                    </div>
                    <div className="flex justify-center">
                        <LogoCardVendors Image={Basealt} href="/vendors/basealt" />
                    </div>
                    <div className="flex justify-center">
                        <LogoCardVendors Image={Orionsoft} href="/vendors/orionsoft" />
                    </div>
                    <div className="flex justify-center">
                        <LogoCardVendors Image={Mindsw} href="/vendors/mindsw" />
                    </div>
                    <div className="flex justify-center">
                        <LogoCardVendors Image={R7Office} href="/vendors/r7-office" />
                    </div>
                    <div className="flex justify-center">
                        <LogoCardVendors Image={Myoffice} href="/vendors/myoffice" />
                    </div>
                    <div className="flex justify-center">
                        <LogoCardVendors Image={Communigatepro} href="/vendors/communigatepro" />
                    </div>
                    <div className="flex justify-center">
                        <LogoCardVendors Image={Workspacevk} href="/vendors/workspacevk" />
                    </div>
                    <div className="flex justify-center">
                        <LogoCardVendors Image={Termidesk} href="/vendors/termidesk" />
                    </div>
                    <div className="flex justify-center">
                        <LogoCardVendors Image={Workspad} href="/vendors/workspad" />
                    </div>
                    <div className="flex justify-center">
                        <LogoCardVendors Image={Rupost} href="/vendors/rupost" />
                    </div>
                    <div className="flex justify-center">
                        <LogoCardVendors Image={Aquarius} href="/vendors/aquarius" />
                    </div>
                </div>
            </div>
        </div>
    )
}