import React from 'react'
import "../styles/footer.css"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';

export default function Footer() {
   return (
      <div className='footer'>
         <div className='linksIcons'>

            <a href={'https://www.linkedin.com/in/vladyslav-bieliaiev/'}><LinkedInIcon /></a>
            <a href={'https://github.com/VladBieliaiev'}> <GitHubIcon /></a>
            <a href={'https://www.facebook.com/vlad.bieliaiev.902'}><FacebookIcon /></a>
         </div>
         <p>&copy; 2022 Vladyslav Bieliaiev</p>
      </div>
   )
}
