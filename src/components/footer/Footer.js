import React from 'react'
import './footer.css'
import {FaFacebookF, FaInstagram, FaTwitter} from 'react-icons/fa'

function Footer() {
  return (
    <footer>
      <a href="" className='footer__logo'>PNDT</a>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#certificate">Certificate</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com/PhamNguyenDuyTien"><FaFacebookF/></a>
        <a href="https://www.instagram.com/vn.8121/"><FaInstagram/></a>
        <a href="https://twitter.com/DuyTien8121"><FaTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; PhamNguyenDuyTien. All right s reservse 2022</small>
      </div>

    </footer>
  )
}

export default Footer