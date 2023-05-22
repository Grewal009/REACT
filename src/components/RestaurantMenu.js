import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import { CDN_URL } from '../utils/constants';
import ShimmerUI from './ShimmerUI';
import errorImage from '../assets/images/404-error-1.png';
import noImageAvailable from '../assets/images/no-image-available-200.jpg';

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
        <div className='flex justify-center'>
        <div className='w-[374px] sm:w-[550px] md:w-[680px] lg:w-[850px]'>
            <div className='text-center'>
            <h1 className='text-sm'>ID:{id}</h1>

            <h2 className='text-4xl font-bold leading-8 mb-1'>{restaurant?.cards[0]?.card?.card?.info?.name}</h2>

            <h3 className='text-lg font-medium leading-5 mb-1'>{restaurant?.cards[0]?.card?.card?.info?.areaName}, {restaurant?.cards[0]?.card?.card?.info?.city}</h3>

            <h4 className='text-sm leading-4'>Average Rating {restaurant?.cards[0]?.card?.card?.info?.avgRating}</h4>

            <h5 className='text-sm leading-4 mb-1'>Total Rating {restaurant?.cards[0]?.card?.card?.info?.totalRatings}+ ratings</h5>
            
           {
            /**
              <img src={CDN_URL+restaurant?.cards[0]?.card?.card?.info?.cloudinaryImageId}/>
             */
           }
            <h2 className='text-lg font-semibold leading-5'>cuisines : {restaurant?.cards[0]?.card?.card?.info?.cuisines?.join(', ')}</h2>
            </div>

            <ul>
                {
                    restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards?.map(
                        (rest)=>(
                        
                        <li key={rest?.card?.info?.id} className='p-1  mx-5 my-5 flex flex-col justify-between shadow-md shadow-slate-900'>

                    <div className='flex justify-between items-center'>        
                        <img src=
                        {
                            (rest?.card?.info?.imageId === undefined)
                            ? noImageAvailable
                            : CDN_URL+ rest?.card?.info?.imageId
                            
                        } 



                            className='w-32 '/>
                        <div>

                        {
    console.log(CDN_URL+ rest?.card?.info?.imageId)
}

                            <button className='w-32 h-9 text-slate-600 bg-green-300 rounded-md hover:font-bold'>Add to cart</button>
                        </div>
                    </div>

                        <h1 className='text-lg font-bold leading-4 mb-1'>{rest?.card?.info?.name}</h1>   
                        
                        <h3 className='text-xs font-medium leading-3'>{rest?.card?.info?.description}</h3>

                      
                        
                        

                      
                        </li>)
                    )
                }
            </ul>

            
        </div>
    </div>    
    )
}

export default RestaurantMenu;