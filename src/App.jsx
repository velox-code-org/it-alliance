import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./components/layouts/MainLayout.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import HpPages from "./pages/vendors/hp.jsx";
import HuaweiPages from "./pages/vendors/huawei.jsx";
import XfusionPages from "./pages/vendors/xfusion.jsx";
import JuniperPages from "./pages/vendors/juniper.jsx";
import IbmPages from "./pages/vendors/ibm.jsx";
import BrocadePages from "./pages/vendors/brocade.jsx";
import DeltaPages from "./pages/vendors/delta.jsx";
import UnvPages from "./pages/vendors/unv.jsx";
import DjiPages from "./pages/vendors/dji.jsx";
import CiscoPages from "./pages/vendors/cisco.jsx";
import DellPages from "./pages/vendors/dell.jsx";
import LenovoPages from "./pages/vendors/lenovo.jsx";
import DepoPages from "./pages/vendors/depo.jsx";
import QtechPages from "./pages/vendors/qtech.jsx";
import NeboPages from "./pages/vendors/nebo.jsx";
import MellanoxPages from "./pages/vendors/mellanox.jsx";
import H3cPages from "./pages/vendors/h3c.jsx";
import NetappPages from "./pages/vendors/netapp.jsx";
import SupermicroPages from "./pages/vendors/supermicro.jsx";
import HitachiPages from "./pages/vendors/hitachi.jsx";
import CarsPages from "./pages/cars.jsx";
import CarsFLPages from "./pages/cars/carsFL.jsx";
import CarsULPages from "./pages/cars/carsUL.jsx";
import Vendors from "./pages/Vendors";
import Contacts from "./pages/Contacts";
import Personal from "./pages/Personal";
import ScrollToTop from './components/ScrollToTop'
// Импорты для новых вендоров
import CyberprotectPage from "./pages/vendors/cyberprotect.jsx";
import AstraPage from "./pages/vendors/astra.jsx";
import DallmeierPage from "./pages/vendors/dallmeier.jsx";
import IdisglobalPage from "./pages/vendors/idisglobal.jsx";
import OpenyardPage from "./pages/vendors/openyard.jsx";
import DataruPage from "./pages/vendors/dataru.jsx";
import SinexcelPage from "./pages/vendors/sinexcel.jsx";
import IqToolsPage from "./pages/vendors/iq-tools.jsx";
import VectortechnologiesPage from "./pages/vendors/vectortechnologies.jsx";
import KraftwayPage from "./pages/vendors/kraftway.jsx";
import YadroPage from "./pages/vendors/yadro.jsx";
import EltexCoPage from "./pages/vendors/eltex-co.jsx";
import SangrusPage from "./pages/vendors/sangrus.jsx";
import RedSoftPage from "./pages/vendors/red-soft.jsx";
import BasealtPage from "./pages/vendors/basealt.jsx";
import OrionsoftPage from "./pages/vendors/orionsoft.jsx";
import MindswPage from "./pages/vendors/mindsw.jsx";
import R7OfficePage from "./pages/vendors/r7-office.jsx";
import MyofficePage from "./pages/vendors/myoffice.jsx";
import CommunigateproPage from "./pages/vendors/communigatepro.jsx";
import WorkspacevkPage from "./pages/vendors/workspacevk.jsx";
import TermideskPage from "./pages/vendors/termidesk.jsx";
import WorkspadPage from "./pages/vendors/workspad.jsx";
import RupostPage from "./pages/vendors/rupost.jsx";
import EvadapowerPage from "./pages/vendors/evadapower.jsx";
import AquariusPage from "./pages/vendors/aquarius.jsx";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop/>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vendors/hp" element={<HpPages />} />
          <Route path="/vendors/huawei" element={<HuaweiPages />} />
          <Route path="/vendors/xfusion" element={<XfusionPages />} />
          <Route path="/vendors/juniper" element={<JuniperPages />} />
          <Route path="/vendors/ibm" element={<IbmPages />} />
          <Route path="/vendors/brocade" element={<BrocadePages />} />
          <Route path="/vendors/delta" element={<DeltaPages />} />
          <Route path="/vendors/unv" element={<UnvPages />} />
          <Route path="/vendors/dji" element={<DjiPages />} />
          <Route path="/vendors/cisco" element={<CiscoPages />} />
          <Route path="/vendors/dell" element={<DellPages />} />
          <Route path="/vendors/lenovo" element={<LenovoPages />} />
          <Route path="/vendors/depo" element={<DepoPages />} />
          <Route path="/vendors/qtech" element={<QtechPages />} />
          <Route path="/vendors/nebo" element={<NeboPages />} />
          <Route path="/vendors/mellanox" element={<MellanoxPages />} />
          <Route path="/vendors/h3c" element={<H3cPages />} />
          <Route path="/vendors/netapp" element={<NetappPages />} />
          <Route path="/vendors/supermicro" element={<SupermicroPages />} />
          <Route path="/vendors/hitachi" element={<HitachiPages />} />
          <Route path="/vendors/aquarius" element={<AquariusPage />} />
          <Route path="/vendors/astra" element={<AstraPage />} />
          <Route path="/vendors/basealt" element={<BasealtPage />} />
          <Route path="/vendors/communigatepro" element={<CommunigateproPage />} />
          <Route path="/vendors/cyberprotect" element={<CyberprotectPage />} />
          <Route path="/vendors/dallmeier" element={<DallmeierPage />} />
          <Route path="/vendors/dataru" element={<DataruPage />} />
          <Route path="/vendors/eltex-co" element={<EltexCoPage />} />
          <Route path="/vendors/evadapower" element={<EvadapowerPage />} />
          <Route path="/vendors/idisglobal" element={<IdisglobalPage />} />
          <Route path="/vendors/iq-tools" element={<IqToolsPage />} />
          <Route path="/vendors/kraftway" element={<KraftwayPage />} />
          <Route path="/vendors/mindsw" element={<MindswPage />} />
          <Route path="/vendors/myoffice" element={<MyofficePage />} />
          <Route path="/vendors/openyard" element={<OpenyardPage />} />
          <Route path="/vendors/orionsoft" element={<OrionsoftPage />} />
          <Route path="/vendors/r7-office" element={<R7OfficePage />} />
          <Route path="/vendors/red-soft" element={<RedSoftPage />} />
          <Route path="/vendors/rupost" element={<RupostPage />} />
          <Route path="/vendors/sangrus" element={<SangrusPage />} />
          <Route path="/vendors/sinexcel" element={<SinexcelPage />} />
          <Route path="/vendors/termidesk" element={<TermideskPage />} />
          <Route path="/vendors/vectortechnologies" element={<VectortechnologiesPage />} />
          <Route path="/vendors/workspacevk" element={<WorkspacevkPage />} />
          <Route path="/vendors/workspad" element={<WorkspadPage />} />
          <Route path="/vendors/yadro" element={<YadroPage />} />

          <Route path="/cars" element={<CarsPages />} />
          <Route path="/cars/fl" element={<CarsFLPages />} />
          <Route path="/cars/ul" element={<CarsULPages />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/vendors" element={<Vendors />} />
          <Route path="/personal" element={<Personal />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
