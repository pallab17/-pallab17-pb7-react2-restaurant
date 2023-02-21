import React,{useState} from 'react';
import "./style.css";
import Menu from "./menuApi";
import MenuCard from './MenuCard.js';



 const Restaurant = () => {
    const [menuData,setMenuData] = useState(Menu); 
   /*  usestate(menu) = usestate data manage kore 
    menuapi.js theke data ta ese store hocche Menu bole use usestate e
    usestate 2 to element pass kore array r form e
    first element ta current state 
    2nd element ta hooche updated/future state */

    console.log(menuData);


  return (
    <div>
    <nav className="navbar">
        <div className="btn-group">   
        <button className="btn-group__item">Breakfast</button>
        <button className="btn-group__item">Lunch</button>
        <button className="btn-group__item">Evening</button>
        <button className="btn-group__item">Dinner</button>
        <button className="btn-group__item">ALL</button>

        </div>


    </nav>
     
    <MenuCard menuData={menuData} />
    {/* eibar menucard.js file e jehetu ekbar component ta banano ache
    10 bar use korar jonno 10 bar copy paste na korleo hobe
    jate 10 bar na use korte hoye 
    amra props use korbo i.e. prothome menuapi.js theke data ta menuData te store hobe
    eibar amra menudata take props hisabe share korbo menucard.js e
    tarpor map fn use kore loop kore debo jate automatically data ta show hoye browser e

      */}
    </div>
   

    
   
  )
}

export default Restaurant;



    