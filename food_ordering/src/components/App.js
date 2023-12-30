
 import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import logo from '../media/icon/Food_Offer.svg';
import  Burger from '../media/icon/hambergermenu.svg';
import Geo from '../media/icon/location.svg';
import Profile from '../media/menu/Rectangle 20.png';
import Arrow from '../media/icon/arrowdown2.svg';
import Search from '../media/icon/searchnormal1.svg';
import Settings from '../media/icon/setting5.svg';
import burger from '../media/menu/Rectangle 22.png';
import pizza from '../media/menu/Rectangle 23.png';
import pasta from '../media/menu/Rectangle 24.png';
import sandwich from '../media/menu/Rectangle 25.png';
import fri from '../media/menu/Rectangle 26.png';
import kebab from '../media/menu/Rectangle 27.png';
import Vegan from '../media/micro_menu/vegan.png';
import Cake from '../media/micro_menu/Cake.png';
import Coffe from '../media/micro_menu/Coffe.png';
import Dessert from '../media/micro_menu/Dessert.png';
import Fast from '../media/micro_menu/fast_food.png';
import Kebab from '../media/micro_menu/Kebab.png';
import Salad from '../media/micro_menu/Salad.png';
import Sea_food from '../media/micro_menu/sea_food.png';
import Heart from '../media/icon/heart.png';
import {ReactComponent as Home} from '../media/icon/home.svg';
import {ReactComponent as Like} from '../media/icon/like.svg';
import {ReactComponent as Notification}  from '../media/icon/notification.svg';
import  {ReactComponent as Profilecircle} from '../media/icon/profilecircle.svg';
import {ReactComponent as Buscket} from '../media/icon/redBucket.svg';
import line from '../media/icon/LINE.svg';


function App() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleItemClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img className="logo" src={logo} alt="Иконка" />
        <div className="wraper_group_header">
            <div className='geolocation'> 
            <img className="burger" src={Burger} alt="Меню" />
              <img className='geo' src={Geo} alt="" />
                <p>Paris, France</p>
                <img className='arrow' src={Arrow} alt="" />
              <img className='profile' src={Profile} alt="" />
            </div>
        </div>
        <div className='text'> 
            <p className='header_button_text'>Delicious Food? </p>
            <p className='header_button_text2'>Go Ahead...</p>
        </div>
        <div className='search'>
            <input className='header_input' placeholder="Search for your favourite food" type="text" />
            <img className='header_search' src={Search} alt="" />
            <img className='header_settings' src={Settings} alt="" />
        </div>
        
      </header>
      <body  className ="content">
          <div className='content_promo_offer'>
            <p className='promo_text'>30% Off on your first purchase</p>
          </div>
          <div className='content_menu'>
            <img src={burger} alt="burger" />
            <img src={pizza} alt="pizza" />
            <img src={pasta} alt="pasta" />
            <img src={sandwich} alt="andwich" />
            <img src={fri} alt="fri" />
            <img src={kebab} alt="kebab" />
          </div>
          <button className='see_more'>See More... </button>
          <div className='content_mini_menu'>
              <img src={Vegan} alt="burger" />
              <img src={Sea_food} alt="pizza" />
              <img src={Fast} alt="pasta" />
              <img src={Kebab} alt="pasta" />
              <img src={Salad} alt="andwich" />
              <img src={Dessert} alt="fri" />
              <img src={Cake} alt="kebab" />
              <img src={Coffe} alt="kebab" />
          </div>
      </body>
      <footer className = "footer_content">
       <div className="fab-container">
        <ul>
        <li
          className={`fab-item ${activeIndex === 0 ? 'active' : ''}`}
          onClick={() => handleItemClick(0)}
        >
          <a href="#section">
          <Home className="home"/>
          </a>
         
        </li>
        <li
          className={`fab-item ${activeIndex === 1 ? 'active' : ''}`}
          onClick={() => handleItemClick(1)}
        >
          <a href="#section">      
          <Like className="like"/>
          </a>
         
        </li>
        <li
          className={`fab-item red  ${activeIndex === 2 ? 'active' : ''}`}
          onClick={() => handleItemClick(2)}
        >
          <a href="#section">
          <Buscket className="buscket" />
          </a>
         
        </li>
        <li
          className={`fab-item ${activeIndex === 3 ? 'active' : ''}`}
          onClick={() => handleItemClick(3)}
        >
          <a href="#section">
          <Notification className="notification"/>
          </a>
         
        </li>
        <li
          className={`fab-item ${activeIndex === 4 ? 'active' : ''}`}
          onClick={() => handleItemClick(4)}
        >
          <a href="#section">
          <Profilecircle className="profilecircle" />
          </a>
        </li>
          <div className='indicator'>
            <img src={line} alt="" />
          </div>
        </ul>
        </div>
      </footer>
    </div>
  );


}

export default App;
