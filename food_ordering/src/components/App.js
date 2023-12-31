
 import React, { useState } from 'react';
 import { Link, Outlet } from 'react-router-dom';
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
import {ReactComponent as Home} from '../media/icon/home.svg';
import {ReactComponent as Like} from '../media/icon/like.svg';
import {ReactComponent as Notification}  from '../media/icon/notification.svg';
import  {ReactComponent as Profilecircle} from '../media/icon/profilecircle.svg';
import {ReactComponent as Buscket} from '../media/icon/redBucket.svg';
import line from '../media/icon/LINE.svg';
import Card  from './Card';
import Footer from '../components/footer.js';


function App() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClickItem = (item) => {
    setSelectedItem(item);
  };

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
                  <Link to="/Card"><img src={burger} alt="burger" onClick={() => handleItemClickItem('burger')} /></Link> 
                  <Link to="/Card"> <img src={pizza} alt="pizza" onClick={() => handleItemClickItem('pizza')} /></Link> 
                  <Link to="/Card"><img src={pasta} alt="pasta" onClick={() => handleItemClickItem('pasta')} /></Link> 
                  <Link to="/*"><img src={sandwich} alt="sandwich" onClick={() => handleItemClickItem('sandwich')} /></Link> 
                  <Link to="/*"><img src={fri} alt="fri" onClick={() => handleItemClickItem('fri')} /></Link> 
                  <Link to="/*"> <img src={kebab} alt="kebab" onClick={() => handleItemClickItem('kebab')} /></Link> 
          </div>
           {selectedItem && (
             <Card item={selectedItem} />
               )}
          <button className='see_more'>See More... </button>
          <div className='content_mini_menu'>
                  <Link  to='/Card'><img src={Vegan} alt="burger" /></Link>  
                  <Link to='/Card'><img src={Sea_food} alt="pizza" /></Link>  
                  <Link to='/Card'><img src={Fast} alt="pasta" /></Link>  
                  <Link to='/Card'><img src={Kebab} alt="pasta" /></Link>    
                  <Link to='/Card'> <img src={Salad} alt="andwich" /></Link> 
                  <Link to='/Card'><img src={Dessert} alt="fri" /></Link> 
                  <Link to='/Card'> <img src={Cake} alt="kebab" /></Link> 
                  <Link to='/Card'><img src={Coffe} alt="kebab" /></Link>
                  <Outlet />  
          </div>
            <Footer />
      </body>
    </div>
  );


}

export default App;
