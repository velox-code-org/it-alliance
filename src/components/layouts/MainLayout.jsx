import { Outlet } from 'react-router-dom'
import Header from '../common/Header'
import Footer from '../common/Footer'

import './MainLayout.scss'

const MainLayout = () => {
    return (
        <div className="main-layout">
            <Header />
            <main className="main-layout__content">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default MainLayout