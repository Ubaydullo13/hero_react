import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {createGlobalStyle} from 'styled-components'
import Footer from './components/Footer/Footer.jsx'

const Global = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Poppins", sans-serif;
    }
`

ReactDOM.createRoot(document.getElementById('root')).render(
    <>
        <Global />
        <App />
        <Footer />
    </>
)
