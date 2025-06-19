import axios from "axios"
import { useEffect, useState } from "react";

function ApiCalling(){
    const [allRestaurantArr,setAllRestaurantArr] = useState([])
    
    useEffect(function(){
        async function calling(){
            // yeh main website ki api hai jaha se data aa rha hai 'v5' wala link Inspect->Network->XHR->v5
            const API = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.1766701&lng=78.00807449999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"; 
            const resp = await axios.get(API);
            // console.log(resp.data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
            setAllRestaurantArr(resp.data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
        }
        calling()
    } , [])

    return allRestaurantArr;
}

export default ApiCalling;