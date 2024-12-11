import RestaurantCard from "./RestaurantCard";
import { resList } from "../utils/mockData";
import { useState } from "react";

const Body = () =>{
    const [resList2, setresList2] = useState(resList);
    return (
        <div className="body">
                
            <div className="filter">
                <button className="btn-filter" onClick={()=>{
                    
                    let filteredList = resList2.filter(resObj => resObj.info.avgRating > 4.3)
                    setresList2(filteredList);
                }}>Show Top rated Restaurants</button>
            </div>
            <div className="res-container">
                {resList2.map(res => <RestaurantCard key={res.info.id} resObj={res}/> )}
            </div>
        </div>
    )
}

export default Body;