import RestaurentCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
// body component

const Body = () => {
  const [listOfRestaurants,setListofRestaurants] = useState([])
  useEffect(()=>{
    fetchData();
  },[]);
  const fetchData = async() =>{
    try {
      const data = await fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=31.3722571&lng=75.4017654&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`);
    const jsonData = await data.json();
    console.log("jasmeen",jsonData)

    setListofRestaurants(jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    } catch (error) {
      console.log(error)
    }
  }
  console.log(listOfRestaurants.length)
    return (
      <>
      {listOfRestaurants.length === 0 ?(<Shimmer/>) : (
      <div>
        <div className="filter">
          <div className="search">
            <input type="text" className="searchbox"></input>
            {/* filters the restaurant card and update the ui */}
            <button onClick={()=>{}}>Search</button>
          </div>
           <button className="filter-btn" onClick={()=>{
            const filteredList = listOfRestaurants.filter((res) => res.info.avgRating > 4);
            setListofRestaurants(filteredList);
          
           }}>Top-rated Restaurants</button>
        </div>
        <div className="restaurent-container">
         {listOfRestaurants.map((restaurant) => (
         <RestaurentCard key={restaurant.info.id} resData={restaurant} />
         ))}
         
        </div>
      </div>
    )}
      </>
    )
  
  }
export default Body;