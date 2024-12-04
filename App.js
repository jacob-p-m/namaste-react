import React from "react";
import ReactDOM from "react-dom/client"

/**
 * Plan
 * Header
 *  logo
 *  nav items
 * Body
 *  search
 *  restaurant container
 * Footer
 *  copyright
 *  links
 *  addresses
 *  contact
 */
 
const root = ReactDOM.createRoot(document.getElementById("root"));

//Header component
const Header = () =>{
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://www.clipartmax.com/png/small/111-1118804_android-food-delivery-apps.png"></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                </ul>

            </div>
        </div>
    )
}

const resList =
[
    {
    "info": {
    "id": "442425",
    "name": "Pizza Hut",
    "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/17/54f7617a-0f49-4449-abc5-634b1c814bcc_442425.jpg",
    "locality": "MC Road",
    "areaName": "Thiruvalla",
    "costForTwo": "₹350 for two",
    "cuisines": [
    "Pizzas"
    ],
    "avgRating": 4.3,
    "parentId": "721",
    "avgRatingString": "4.3",
    "totalRatingsString": "2.8K+",
    "sla": {
    "deliveryTime": 39,
    "lastMileTravel": 4.9,
    "serviceability": "SERVICEABLE",
    "slaString": "35-40 mins",
    "lastMileTravelString": "4.9 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-12-04 23:00:00",
    "opened": true
    },
    "badges": {
    "imageBadges": [
    {
    "imageId": "Rxawards/_CATEGORY-Pizza.png",
    "description": "Delivery!"
    }
    ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {
    "badgeObject": [
    {
    "attributes": {
    "description": "Delivery!",
    "imageId": "Rxawards/_CATEGORY-Pizza.png"
    }
    }
    ]
    },
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "60% OFF",
    "subHeader": "UPTO ₹120"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {},
    "externalRatings": {
    "aggregatedRating": {
    "rating": "--"
    }
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
    "context": "seo-data-9005f8b5-cda8-4182-8d42-00992ded80e9"
    },
    "cta": {
    "link": "https://www.swiggy.com/city/thiruvalla/pizza-hut-mc-road-thiruvalla-rest442425",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "365628",
    "name": "Domino's Pizza",
    "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/29/8dd3e68a-629f-49cc-acd5-525041af2f69_365628.jpg",
    "locality": "Mazhuvangadu",
    "areaName": "Thiruvalla",
    "costForTwo": "₹400 for two",
    "cuisines": [
    "Pizzas",
    "Italian",
    "Pastas",
    "Desserts"
    ],
    "avgRating": 4.4,
    "parentId": "2456",
    "avgRatingString": "4.4",
    "totalRatingsString": "1.0K+",
    "sla": {
    "deliveryTime": 25,
    "lastMileTravel": 4.3,
    "serviceability": "SERVICEABLE",
    "slaString": "20-25 mins",
    "lastMileTravelString": "4.3 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-12-04 23:59:00",
    "opened": true
    },
    "badges": {
    "imageBadges": [
    {
    "imageId": "Rxawards/_CATEGORY-Pizza.png",
    "description": "Delivery!"
    }
    ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {
    "badgeObject": [
    {
    "attributes": {
    "description": "Delivery!",
    "imageId": "Rxawards/_CATEGORY-Pizza.png"
    }
    }
    ]
    },
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "₹125 OFF",
    "subHeader": "ABOVE ₹1199",
    "discountTag": "FLAT DEAL"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {},
    "externalRatings": {
    "aggregatedRating": {
    "rating": "--"
    }
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
    "context": "seo-data-9005f8b5-cda8-4182-8d42-00992ded80e9"
    },
    "cta": {
    "link": "https://www.swiggy.com/city/thiruvalla/dominos-pizza-mazhuvangadu-thiruvalla-rest365628",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "235620",
    "name": "KFC",
    "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/5/b4270f82-15bf-46f7-bd69-6662df95cff2_235620.JPG",
    "locality": "Block 199",
    "areaName": "Thiruvalla",
    "costForTwo": "₹400 for two",
    "cuisines": [
    "Burgers",
    "Fast Food",
    "Rolls & Wraps"
    ],
    "avgRating": 4.3,
    "parentId": "547",
    "avgRatingString": "4.3",
    "totalRatingsString": "6.6K+",
    "sla": {
    "deliveryTime": 23,
    "lastMileTravel": 4.2,
    "serviceability": "SERVICEABLE",
    "slaString": "20-25 mins",
    "lastMileTravelString": "4.2 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-12-04 23:00:00",
    "opened": true
    },
    "badges": {
    "imageBadges": [
    {
    "imageId": "Rxawards/_CATEGORY-Burger.png",
    "description": "Delivery!"
    }
    ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {
    "badgeObject": [
    {
    "attributes": {
    "description": "Delivery!",
    "imageId": "Rxawards/_CATEGORY-Burger.png"
    }
    }
    ]
    },
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "30% OFF",
    "subHeader": "UPTO ₹75"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {},
    "externalRatings": {
    "aggregatedRating": {
    "rating": "--"
    }
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
    "context": "seo-data-9005f8b5-cda8-4182-8d42-00992ded80e9"
    },
    "cta": {
    "link": "https://www.swiggy.com/city/thiruvalla/kfc-block-199-thiruvalla-rest235620",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "655604",
    "name": "Baskin Robbins - Ice Cream Desserts",
    "cloudinaryImageId": "85ccae4e3576f9330af102c46ca85395",
    "locality": "M C Road",
    "areaName": "Thiruvalla",
    "costForTwo": "₹200 for two",
    "cuisines": [
    "Ice Cream",
    "Beverages",
    "Desserts",
    "Bakery"
    ],
    "avgRating": 4.5,
    "veg": true,
    "parentId": "5588",
    "avgRatingString": "4.5",
    "totalRatingsString": "131",
    "sla": {
    "deliveryTime": 23,
    "lastMileTravel": 4.4,
    "serviceability": "SERVICEABLE",
    "slaString": "20-25 mins",
    "lastMileTravelString": "4.4 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-12-04 21:30:00",
    "opened": true
    },
    "badges": {
    "imageBadges": [
    {
    "imageId": "v1695133679/badges/Pure_Veg111.png",
    "description": "pureveg"
    }
    ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {
    "badgeObject": [
    {
    "attributes": {
    "description": "pureveg",
    "imageId": "v1695133679/badges/Pure_Veg111.png"
    }
    }
    ]
    },
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "20% OFF",
    "subHeader": "UPTO ₹50"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {},
    "externalRatings": {
    "aggregatedRating": {
    "rating": "--"
    }
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
    "context": "seo-data-9005f8b5-cda8-4182-8d42-00992ded80e9"
    },
    "cta": {
    "link": "https://www.swiggy.com/city/thiruvalla/baskin-robbins-ice-cream-desserts-m-c-road-thiruvalla-rest655604",
    "type": "WEBLINK"
    }
    }]

    //image common link
    
    const RestaurantCard = (props)=>{
    const resCardImageCommonLink = 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/'
    const {resObj} = props;
    const {name, cloudinaryImageId, cuisines,avgRating, sla}=resObj.info;
    return (
        <div className="res-card">
            <img src={resCardImageCommonLink + cloudinaryImageId} alt="food image"></img>
            <h3>{name}</h3>
            <h3>{cuisines.join(', ')}</h3>
            <h3>{avgRating} rating</h3>
            <h3>{sla.deliveryTime} mins</h3>
        </div>
    )
}
const Body = () =>{
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                {resList.map(res => <RestaurantCard key={res.info.id} resObj={res}/> )}
            </div>
        </div>
    )
}



//app container
 const AppLayout = () =>{
    return (
        <div className="app">
            <Header/>
            <Body />
        </div>
    )
 }

root.render(<AppLayout/>);
 