
import React, { useState, useEffect } from 'react';
import  '../styled/General_style.css'
import star from '../media/menu/Stars.png';
import Rest_italia from '../media/menu/Italia.png';
import Rest_Kebab from '../media/menu/Traditional_kebab.png';
import Rest_fish from '../media/menu/Star_fish.png';
import Rest_Burger from '../media/menu/Buster_Burger.png';
import mini_star from '../media/menu/mini_stars.svg';
import {ReactComponent as Home} from '../media/icon/home.svg';
import {ReactComponent as Like} from '../media/icon/like.svg';
import {ReactComponent as Notification}  from '../media/icon/notification.svg';
import  {ReactComponent as Profilecircle} from '../media/icon/profilecircle.svg';
import {ReactComponent as Buscket} from '../media/icon/redBucket.svg';
import line from '../media/icon/LINE.svg';

function getRandomColor() {
    const getRandomValue = () => Math.floor(Math.random() * 256);
    return `rgb(${getRandomValue()}, ${getRandomValue()}, ${getRandomValue()})`;
  }

function General (){
    const [myData, setMyData] = useState([]);
    const [activeIndex, setActiveIndex] = useState(null);

    const handleItemClick = (index) => {
      setActiveIndex(index);
    };


    const updateData = () => {
      const newData = [
        {'foto': Rest_italia, title : 'Pizza Italiano', review: '4/5' },
        {'foto': Rest_Kebab, title : 'Traditional Kebab', review: '2/5'},
        {'foto': Rest_fish, title : 'Star Fish', review: '5/5'},
        {'foto': Rest_Burger, title : 'Boston Burger’s', review: '3/5'}
      ]; 
      setMyData(newData);
    };

    useEffect(() => {
        updateData();
      }, []);

    return (
        <>
        <div className='content_general'>
            <img className='star' src={star} alt="Stars" />
            {myData.map((item, index) => (
                <div className='content_general_middle' key={index}> 
                     <img src={item.foto} alt={item.title} />
                     <h3>{item.title}</h3>
                     <p style={{ color: getRandomColor(), backgroundColor: getRandomColor(), color: getRandomColor() }}>
                        <img src={mini_star} alt="" />
                      {item.review}</p>
                     {index !== myData.length - 1 &&  <div className='line'></div>}
                    
                </div>
                
      ))}
                  <footer className = "footer_content">
       <div className="fab-container">
        <ul>
        <li
          className={`fab-item ${activeIndex === 0 ? 'active' : ''}`}
          onClick={() => handleItemClick(0)}
        >
          <a href="#section">
          <Home className="home" />
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
          className={`fab-item ${activeIndex === 2 ? 'active' : ''}`}
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
        </>
    )
}

export default General;