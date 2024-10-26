import React from 'react'
import './footer.css'
import './mobile-footer.css'
import { Facebook, Twitter, Instagram, Whatsapp, WavyBg } from '../Icons/icons'

function Footer() {
  return (
    <>
    <footer>
<WavyBg />
    <ul>
        <li>
            <a href='https://www.facebook.com' target='_blank'><Facebook /></a>
        </li>
        <li>
            <a href='https://www.twitter.com' target='_blank'><Twitter /></a>
        </li>
        <li>
            <a href='https://www.instagram.com' target='_blank'><Instagram /></a>
        </li>
        <li>
            <a href='https://www.whatsapp.com' target='_blank'><Whatsapp /></a>
        </li>
    </ul>

    <p>Discover your style at Trend Haven, where fashion meets comfort. 
    From timeless classics to the latest trends, our curated collection offers something for every wardrobe. 
    Elevate your look and express your unique personality with pieces designed to make you feel confident and chic. 
    Trend Haven – where every day is a runway.</p>

    </footer>
    </>
  )
}

export { Footer }
