import {CDN_URL} from "../utils/constant"
// restaureqnt card component 
const RestaurentCard = ({resData}) =>{

    const{cloudinaryImageId,name,deliveryTime,avgRating,costForTwo,cuisines} =resData?.info
    return(
      <div className="restaurent-card">
        <img className="res-logo" src={CDN_URL + resData.info.cloudinaryImageId} alt="burgerking" />
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{costForTwo }</h4>
        <h4>{resData.info.sla.deliveryTime} minutes</h4>
  
  
      </div>
    )
  }
export default RestaurentCard;  