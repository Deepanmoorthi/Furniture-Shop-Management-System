import React from 'react'
import { Link } from 'react-router-dom'
import { FaLinkedin } from 'react-icons/fa'
import { FaFacebookF } from 'react-icons/fa'
import { AiOutlineTwitter } from 'react-icons/ai'
import { AiFillInstagram } from 'react-icons/ai'



const Footer = () => {
  return (
    <footer >
        <div className='container footer_container'>
            <article>
               <h3>KFS</h3>
                <p>
                    Welcome to the shop 
                </p>
                <div className='footer_socials'>
                    <a href='https://linkedin.com/' ><FaLinkedin/></a>
                    <a href='https://facebook.com/' ><FaFacebookF/></a>
                    <a href='https://twitter.com/' ><AiOutlineTwitter/></a>
                    <a href='https://instagram.com/' ><AiFillInstagram/></a>
                </div>
            </article>
            <article>
                <h3>KFS</h3>
                <Link to='/about'><h4>About</h4></Link>
                <Link to='/service'><h4>Service</h4></Link>
                <Link to='/contact'><h4>Contact</h4></Link>
                
            </article>
            <article>
                <h4>Furnitures</h4>
                <Link to='/granite'><h4>Tables</h4></Link>
                <Link to='/granite'><h4>Chairs</h4></Link>
                <Link to='/granite'><h4>Beds</h4></Link>
                <Link to='/granite'><h4>Desks</h4></Link>
            </article>
            <article>
                <h4>Wooden Works</h4>
                <Link to='/tiles'><h4>Cupboard Works</h4></Link>
                <Link to='/tiles'><h4>Door design</h4></Link>
                <Link to='/tiles'><h4>Wooden showcase</h4></Link>
                <Link to='/tiles'><h4>window works</h4></Link>
            </article>

        </div>
        <div className='footer_copyright'>
            <small>2022 KFS &copy; All Rights Reserved</small>
        </div>
    </footer>
  )
}

export default Footer
