import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../styles/NavBar.css'
import ReorderSharpIcon from '@mui/icons-material/ReorderSharp';


export default function NavBar() {
   const [openNav, setOpenNav] = useState(false);

   const location = useLocation();

   useEffect(() => {
      setOpenNav(false);
   }, [location])
   return (
      <div className='navbar' id={openNav ? 'open' : 'close'}>
         <div className='burgerBtn'>
            <button
               onClick={() => {
                  setOpenNav(prev => !prev)
               }}
            >
               <ReorderSharpIcon /></button>
         </div>
         <div className='links'>
            <Link to='/'>Home</Link>
            <Link to='/projects'>Projects</Link>
         </div>

      </div>
   )
}
