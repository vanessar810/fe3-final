import React from 'react'
import { useContextGlobal } from '../Components/utils/global.context';
import "../Styles/App.css";


const Footer = () => {
  const {state} = useContextGlobal();
  return (
    <footer  className={state.theme ? "dark" : "light"}>
        <p>Powered by</p>
        <img className="footer > img1" src="/images/DH.png" alt='DH-logo' />
        <img className="footer > img" src="/images/ico-facebook.png" alt='facebook' />
        <img className="footer > img" src="/images/ico-instagram.png" alt='instagram' />
        <img className="footer > img" src="/images/ico-tiktok.png" alt='tiktok' />
        <img className="footer > img" src="/images/ico-whatsapp.png" alt='whatsapp' />
    </footer>
  )
}

export default Footer
