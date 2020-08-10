import React, { Component } from 'react';
import './CustomHeader.css'
import {Link} from "react-router-dom";

class CustomHeader extends Component {
   render() {
      return (

         <div className='container'>
           
            <div className='body'>
               <div className='Logo'>
              
                  <div className='InsideLogDiv'>
                     <a href="https://github.com/PankajTomar2014" target="_blank" >
                        <img className="SearchImage" alt='company-logo'   src={require('../Images/p.png')}/> 
                     </a>
                  </div>
               </div>

               <div className='HeaderCenter'>
             
               </div>

               <ul>
                    <li>Home</li>  
                    <li>Log/Signup</li>
                    <li>About Us</li>
                    <li>Contact Us</li>                 
               </ul>
            </div>

         </div>
      );
   }
}
export default CustomHeader;