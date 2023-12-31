import '../App.css';
import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import {ReactComponent as Home} from '../media/icon/home.svg';
import {ReactComponent as Like} from '../media/icon/like.svg';
import {ReactComponent as Notification}  from '../media/icon/notification.svg';
import  {ReactComponent as Profilecircle} from '../media/icon/profilecircle.svg';
import {ReactComponent as Buscket} from '../media/icon/redBucket.svg';
import line from '../media/icon/LINE.svg';



function Footer(){
    const [activeIndex, setActiveIndex] = useState(0);

    const handleItemClick = (index) => {
      setActiveIndex(index);
    };
    return(
        <footer className = "footer_content">
        <div className="fab-container">
         <ul>
         <li
           className={`fab-item ${activeIndex === 0 ? 'active' : ''}`}
           onClick={() => handleItemClick(0)}
         >
           <Link to="/">
           <Home className="home"/>
           </Link>
          
         </li>
         <li
           className={`fab-item ${activeIndex === 1 ? 'active' : ''}`}
           onClick={() => handleItemClick(1)}
         >
           <Link to="/favorit">      
           <Like className="like"/>
           </Link>
          
         </li>
         <li
           className={`fab-item red  ${activeIndex === 2 ? 'active' : ''}`}
           onClick={() => handleItemClick(2)}
         >
           <Link to="#section">
           <Buscket className="buscket" />
           </Link>
          
         </li>
         <li
           className={`fab-item ${activeIndex === 3 ? 'active' : ''}`}
           onClick={() => handleItemClick(3)}
         >
           <Link to="/*">
           <Notification className="notification"/>
           </Link>
          
         </li>
         <li
           className={`fab-item ${activeIndex === 4 ? 'active' : ''}`}
           onClick={() => handleItemClick(4)}
         >
           <Link to="/*">
           <Profilecircle className="profilecircle" />
           </Link>
         </li>
           <div className='indicator'>
             <img src={line} alt="" />
           </div>
         </ul>
         </div>
       </footer>
    )

}
export default Footer;