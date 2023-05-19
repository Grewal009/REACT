import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import { CDN_URL } from '../utils/constants';
import ShimmerUI from './ShimmerUI';

const RestaurantMenu = () => {
    const params = useParams();
    const {id} = params;
    const [restaurant, setRestaurant] = useState(null);

    useEffect(
        ()=>{
            getMenu();
        }, []
    );

    async function getMenu(){
        const data = await fetch(("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.7016176&lng=76.820049&restaurantId="+id));

        const json = await data.json();
        console.log(json);
        setRestaurant(json.data);
    }
    //Early return
    if(!restaurant){
        return <ShimmerUI />;
    }


    return(
        <div>
            <h1>{id}</h1>
            <h2>{restaurant?.cards[0]?.card?.card?.info?.name}</h2>
            <h3>{restaurant?.cards[0]?.card?.card?.info?.areaName}, {restaurant?.cards[0]?.card?.card?.info?.city}</h3>
            <h4>Average Rating {restaurant?.cards[0]?.card?.card?.info?.avgRating}</h4>
            <h5>Total Rating {restaurant?.cards[0]?.card?.card?.info?.totalRatings/1000}K+ ratings</h5>
           {
            /**
              <img src={CDN_URL+restaurant?.cards[0]?.card?.card?.info?.cloudinaryImageId}/>
             */
           }
            <h2>cuisines : {restaurant?.cards[0]?.card?.card?.info?.cuisines.join(', ')}</h2>

            <h2>Menu:</h2>


            <ul>
                {
                    restaurant.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards.map(
                        (rest)=>(<li key={rest.card.info.id}>{rest.card.info.name}
                        <img src={CDN_URL+ rest.card.info.imageId} className='w-32 '/>
                        </li>)
                    )
                }
            </ul>

            
        </div>
    )
}

export default RestaurantMenu;