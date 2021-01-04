import React from 'react'
import '../style/Footer.css';
import { Link } from 'react-router-dom';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function Footer() {
    return (
        <div className="footer">
           <div className="footer__contact">
               <div className="footer__contactPhoneAndMail">
                   <div className='footer__contactPhone'>
                       <Link className='footer__link'>Nurushare Agro</Link><h7 className='bar'> | | </h7>
                       <Link className='footer__link'>+233 24 152 8799</Link>
                   </div>
                   <div className="footer__contactMail">
                       <Link className='footer__link'>nukushareagrolimited@gmail.com</Link><h7 className='bar'> | </h7>
                       <Link className='footer__link'>© Nukushare Agro 2021</Link>
                   </div>
               </div>
               <div className="footer__contactCookies">
                   <Link className='footer__link'>Terms and Conditions</Link><h7 className='bar'> | </h7>
                   <Link className='footer__link'>Privacy and Cookies</Link>
               </div>
           </div>
           <div className="footer__socialMedia">
               <div className="footer__socialMedia1">
                   <Link className='text-white footer__socialMedioLink'>
                   <FacebookIcon/>
                   </Link>
                   <Link className='text-white footer__socialMedioLink'>
                   <TwitterIcon/>
                   </Link >
                   <Link className='text-white footer__socialMedioLink'>
                   <InstagramIcon/>
                   </Link>
                   <Link className='text-white footer__socialMedioLink'>
                   <YouTubeIcon/>
                   </Link>
                   <Link className=' text-white footer__socialMedioLink'>
                   <LinkedInIcon/>
                   </Link>
               </div>
               <div>
                   <Link to='#topPage' className='text-white'>Go Up</Link>
               </div>
           </div>
        </div>
    )
}

export default Footer
