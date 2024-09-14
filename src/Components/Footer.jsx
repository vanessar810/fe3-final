import React from 'react'
import { useContextGlobal } from '../Components/utils/global.context';


const Footer = () => {
  const {state} = useContextGlobal();
  return (
    <footer className={state.theme ? "dark" : "light"}>
        <p>Powered by</p>
        <img src="/public/images/DH.png" alt='DH-logo' />
        <img src="/public/images/ico-facebook.png" alt='facebook' />
        <img src="/public/images/ico-instagram.png" alt='instagram' />
        <img src="/public/images/ico-tiktok.png" alt='tiktok' />
        <img src="/public/images/ico-whatsapp.png" alt='whatsapp' />
    </footer>
  )
}

export default Footer
