import React from 'react'
import { Link } from 'react-router-dom'

function NavigationMenu(props){
   return(
      <div>
         <h1 className="text-xl p-2">The Menu</h1>
         <ul className="p-3">
            <Link to="/">
                  <li onClick={props.closeMenu} className="text-blue-300 block">
                     Home Page
                  </li>
            </Link>
            
            <Link to="/aboutus">
                  <li onClick={props.closeMenu} className="text-blue-300 block">
                     About Us
                  </li>
            </Link>

            <Link to="/product">
                  <li onClick={props.closeMenu} className="text-blue-300 block">
                     Product
                  </li>
            </Link>
         </ul>
      </div>
   )
}

export default NavigationMenu;