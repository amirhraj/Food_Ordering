import React, { useState, useEffect } from 'react';


function Card(){
    const [myData, setMyData] = useState([]);

    const updateData = () => {
        const newData = [
          {'fotoGeneral': Rest_italia, 'foto1': Rest_italia, 'foto2': Rest_italia, 'foto3': Rest_italia, 'foto4': Rest_italia, title : 'Burger', price: '$8.99', description: "Ham, Cheddar Cheese, Onion, Cornichon, Salad, Tomato", name : "Cheese Burger Whopper" },
          {'fotoGeneral': Rest_italia, 'foto1': Rest_italia, 'foto2': Rest_italia, 'foto3': Rest_italia, 'foto4': Rest_italia, title : 'Burger', price: '$8.99', description: "Ham, Cheddar Cheese, Onion, Cornichon, Salad, Tomato", name : "Cheese Burger Whopper" },,
          {'fotoGeneral': Rest_italia, 'foto1': Rest_italia, 'foto2': Rest_italia, 'foto3': Rest_italia, 'foto4': Rest_italia, title : 'Burger', price: '$8.99', description: "Ham, Cheddar Cheese, Onion, Cornichon, Salad, Tomato", name : "Cheese Burger Whopper" },,
        ]; 
        setMyData(newData);
      };
  
      useEffect(() => {
          updateData();
        }, []);
    return(
            <></>
    )
}

export default Card;