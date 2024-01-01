import React, { useState, useEffect } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import '../styled/Card.css';
import Burger_General from '../media/Burger_card/General_burger.png';
import burger1  from '../media/Burger_card/burger1.png';
import  burger2 from '../media/Burger_card/burger2.png';
import burger3  from '../media/Burger_card/burger3.png';
import burger4  from '../media/Burger_card/burger4.png';
import Pizza from '../media/Pizza_card/Pizza_General.png';
import pizza1 from '../media/Pizza_card/pizza1.png';
import pizza2 from '../media/Pizza_card/pizza2.png';
import pizza3 from '../media/Pizza_card/pizza3.png';
import pizza4 from '../media/Pizza_card/pizza4.png';
import Kebab from '../media/Cebab_card/kebab_general.png';
import kebab1 from '../media/Cebab_card/kebab1.png';
import kebab2 from '../media/Cebab_card/kebab2.png';
import kebab3 from '../media/Cebab_card/kebab3.png';
import kebab4 from '../media/Cebab_card/kebab4.png';
import Back from '../media/icon/arrowleft.svg';
import busk from '../media/icon/shoppingcart.svg';
import {ReactComponent as Heart }from '../media/icon/heart.svg';



function Card(){


  const {item } = useParams()
  console.log(typeof item, 'item in start')
    const [myData, setMyData] = useState(null)
    const [count, setCount] = useState(0);
    const [isLiked, setIsLiked] = useState(false);

    const handleToggleLike = () => {
      setIsLiked(!isLiked);
    };
    const heartColor = isLiked ? 'red' : 'white';

    const updateData = () => {
         const newData = [
          { id : "burger",'fotoGeneral': Burger_General, 'foto1': burger1, 'foto2': burger2, 'foto3': burger3, 'foto4': burger4, title : 'Burger', price: '$8.99', description: "Ham, Cheddar Cheese, Onion, Cornichon, Salad, Tomato", name : "Cheese Burger Whopper" },
         { id : "pizza",'fotoGeneral': Pizza, 'foto1': pizza1, 'foto2':pizza2 , 'foto3': pizza3, 'foto4': pizza4, title : 'Pizza', price: '$12.99', description: "Bread, Pepperoni, Cheese, Parsil", name : "Margarita Pepperoni Pizza" },
           { id : "pasta",'fotoGeneral': Kebab, 'foto1': kebab1, 'foto2': kebab2, 'foto3': kebab3, 'foto4': kebab4, title : 'Kebab', price: '$8.99', description: "Beef, Chicken, Potato, Aubergine, Tomato Sauce, Pepper, Mushroom", name : "Mix of Beef, Chicken, Ribs, Potato" },,
         ]; 

        setMyData(newData);
      };

      
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count -1 );
    if (count <= 0){
      setCount(count );
    }
  };
  
      useEffect(() => {
          updateData();
        }, []);

    return(
            <>
                   {myData ? myData.map((items, index)=>(
                    console.log(typeof items.id, typeof item, item === items, item, items.id, 'itemsasas'),
                    item ===  items.id ?  (
                      <div className='content_card' key={index}>
                      <div className='content_card_header'>
                        <Link to="/">
                            <img src={Back} alt="" />
                        </Link>
                        <p className='content_header_title'>{items.title}</p>
                        <a href="#busck">
                          <img src={busk} alt="" />
                        </a>
                      </div>
                      <div className='content_card_link'>
                        <Link to="/*">All items</Link>
                        <Link to="/*">New items</Link>
                        <Link to="/*">Recommended</Link>
                        <Link to="/*">special</Link>
                      </div>
                      <div className='content_card_middle'>
                        <div className='content_card_foto'>
                            <img className='general_foto' src={items.fotoGeneral} alt="" />
                            <div className='content_foto_column'>
                            <img src={items.foto1} alt="" />
                            <img src={items.foto2} alt="" />
                            <img src={items.foto3} alt="" />
                            <img src={items.foto4} alt="" />
                            </div>
      
                        </div>
                            <p className='content_card_name'>{items.name}</p>
                            <Heart 
                            onClick={handleToggleLike}
                            className='foto_heart'
                            fill={heartColor}  />
                            <p className='content_card_descp'>{items.description}</p>
                            <p className='content_card_price'>{items.price}</p>
                      </div>
                      <div className='content_card_count'>
                            <button onClick={increment}>+</button>
                            <p className='count'>{count}</p>
                            <button className='decrement' onClick={decrement}>-</button>
                      </div>
                      <div className='btn_content_add'>
                            <button className='btn_add'>
                            Add To Cart
                            </button>
                      </div>
      
      
                  </div>
                    ) : null

                    )): <Link to="/*"></Link>}
           
            </>
    )
}

export default Card;