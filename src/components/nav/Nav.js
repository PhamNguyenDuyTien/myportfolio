import React from 'react'
import './nav.css'
import {AiOutlineHome, AiOutlineUser, AiOutlineBook} from 'react-icons/ai'
import {TbCertificate} from 'react-icons/tb'
import {BiMessageCheck} from 'react-icons/bi'
import { useState } from 'react'
import App from '../../App'


function Nav() {
  const [activeNav, setActiveNav] = useState('');

  const handleChangeTab = () =>{
    setActiveNav(`${App.section.id}`);
  }

  const activeClassName = () =>{
    return activeNav === `${App.section.id}` ? 'active' : ''
  }

  return (
    <nav>
      <a href='#' className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
      <a 
        href='#about' 
        onClick={handleChangeTab}
        className={activeClassName}
      ><AiOutlineUser/></a>
      <a 
        href='#experience'
        onClick={handleChangeTab}
        className={activeClassName}
      ><AiOutlineBook/></a>
      <a 
        href='#certificates'
        onClick={handleChangeTab}
        className={activeClassName}
      ><TbCertificate/></a>
      <a 
        href='#contact'
        onClick={handleChangeTab}
        className={activeClassName}
      ><BiMessageCheck/></a>
    </nav>
  )
}

export default Nav