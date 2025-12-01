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
