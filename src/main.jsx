import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {HelmetProvider} from 'react-helmet-async'
import App from './App.jsx'
import './styles/main.scss'

// Global helmet context if needed for SSR, but for Client-side it can be empty
const helmetContext = {};

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <HelmetProvider context={helmetContext}>
            <App/>
        </HelmetProvider>
    </StrictMode>,
)