import {BrowserRouter, Routes, Route, Navigate, useParams} from "react-router-dom";
import MainLayout from "./components/layouts/MainLayout.jsx";
import Home from "./pages/Home.jsx";
//import About from "./pages/About.jsx";
import CarsPages from "./pages/cars.jsx";
import CarsFLPages from "./pages/cars/carsFL.jsx";
import CarsULPages from "./pages/cars/carsUL.jsx";
import Contacts from "./pages/Contacts";
import Personal from "./pages/Personal";
import ScrollToTop from './components/ScrollToTop';
import Partners from './pages/Partners';
import Clients from './pages/Clients';
import PartnerPage from './pages/partners/PartnerPage';
import NotFound from './pages/NotFound';

// Маппинг старых vendors slug на новые partners slug
const vendorToPartnerMap = {
    'hp': 'hpe',
    'huawei': 'huawei',
    'xfusion': 'xfusion',
    'juniper': 'juniper',
    'ibm': 'ibm',
    'brocade': 'brocade',
    'delta': 'delta',
    'unv': 'unv',
    'dji': 'dji',
    'cisco': 'cisco',
    'dell': 'dell',
    'lenovo': 'lenovo',
    'depo': 'depo',
    'qtech': 'qtech',
    'nebo': 'nebo',
    'mellanox': 'mellanox',
    'h3c': 'h3c',
    'netapp': 'netapp',
    'supermicro': 'supermicro',
    'hitachi': 'hitachi',
    'aquarius': 'aquarius',
    'astra': 'astra',
    'basealt': 'basealt',
    'communigatepro': 'communigatepro',
    'cyberprotect': 'cyberprotect',
    'dallmeier': 'dallmeier',
    'dataru': 'dataru',
    'eltex-co': 'eltex',
    'evadapower': 'evadapower',
    'idisglobal': 'idis',
    'iq-tools': 'iqtools',
    'kraftway': 'kraftway',
    'mindsw': 'mindsw',
    'myoffice': 'myoffice',
    'openyard': 'openyard',
    'orionsoft': 'orionsoft',
    'r7-office': 'r7-office',
    'red-soft': 'red-soft',
    'rupost': 'rupost',
    'sangrus': 'sangrus',
    'sinexcel': 'sinexcel',
    'termidesk': 'termidesk',
    'vectortechnologies': 'vectortechnologies',
    'workspacevk': 'workspacevk',
    'workspad': 'workspad',
    'yadro': 'yadro',
};

// Компонент для редиректа со старых vendors на partners
const VendorRedirect = () => {
    const {slug} = useParams();
    const newSlug = vendorToPartnerMap[slug] || slug;
    return <Navigate to={`/partners/${newSlug}`} replace/>;
};

function App() {
    return (
        <BrowserRouter>
            <ScrollToTop/>
            <Routes>
                <Route element={<MainLayout/>}>
                    {/* Основные маршруты */}
                    <Route path="/" element={<Home/>}/>
                    <Route path="/cars" element={<CarsPages/>}/>
                    <Route path="/cars/fl" element={<CarsFLPages/>}/>
                    <Route path="/cars/ul" element={<CarsULPages/>}/>
                    <Route path="/contacts" element={<Contacts/>}/>
                    <Route path="/personal" element={<Personal/>}/>
                    <Route path="/partners" element={<Partners/>}/>
                    <Route path="/clients" element={<Clients/>}/>
                    <Route path="/partners/:slug" element={<PartnerPage/>}/>
                    {/* Редиректы со старых vendors на partners */}
                    <Route path="/vendors" element={<Navigate to="/partners" replace/>}/>
                    <Route path="/vendors/:slug" element={<VendorRedirect/>}/>
                    {/* Страница 404 */}
                    <Route path="*" element={<NotFound/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;