import { RES_CARD_IMAGE_COMMON_LINK } from "../utils/constants";

const RestaurantCard = (props)=>{
    
    const {resObj} = props;
    const {name, cloudinaryImageId, cuisines,avgRating, sla}=resObj.info;
    return (
        <div className="res-card">
            <img src={RES_CARD_IMAGE_COMMON_LINK + cloudinaryImageId} alt="food image"></img>
            <h3>{name}</h3>
            <h3>{cuisines.join(', ')}</h3>
            <h3>{avgRating} rating</h3>
            <h3>{sla.deliveryTime} mins</h3>
        </div>
    )
}

export default RestaurantCard;