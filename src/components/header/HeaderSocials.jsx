import React from 'react'
import {FaFacebook, FaGithub, FaTwitter} from 'react-icons/fa'

function HeaderSocials() {
  return (
    <div className="header__socials">
        <a href="https://www.facebook.com/PhamNguyenDuyTien/" target='_blank' title='facebook'><FaFacebook/></a>
        <a href="https://github.com/PhamNguyenDuyTien" target='_blank' title='github'><FaGithub/></a>
        <a href="https://twitter.com/DuyTien8121" target='_blank' title='twitter'><FaTwitter/></a>
    </div>
  )
}

export default HeaderSocials