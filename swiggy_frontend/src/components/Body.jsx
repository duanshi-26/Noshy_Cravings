import { useEffect, useState } from "react";
import ApiCalling from "./ApiCalling"
import RestaurantCard from "./RestaurantCard";
import Search from "./Search";

function Body() {

    const restArr = ApiCalling();
    const[allRestaurant, setAllRestaurant] = useState(restArr);
    console.log(allRestaurant, "allRestaurant");

    const [setActive1, setActiveOne] = useState(false);
    const [setActive2, setActiveTwo] = useState(false);

    useEffect(function(){
        if(restArr.length && restArr){
            setAllRestaurant(restArr);
        }
    }, [restArr]);

    function averageRating() {
        const filteredRestaurants = restArr.filter((restaurant) => restaurant.info.avgRating >= 4.5);
        setAllRestaurant(filteredRestaurants);
        setActiveOne(true);
        setActiveTwo(false);
    }

    function handleReset() {
        setAllRestaurant(restArr);
        setActiveOne(false);
        setActiveTwo(true);
    }

  return (
    <div className="ml-20 mt-4 ">
       <h1 className="text-2xl my-4 font-bold">Restaurants with online food delivery in Agra</h1>
       <button className={setActive1 ? "border rounded-2xl p-2 mx-4 bg-orange-500" : "border rounded-2xl p-2 mx-4"} onClick={averageRating}>Ratings 4.5+</button>
       <button className={setActive2 ? "border rounded-2xl p-2 mx-4 bg-orange-500" : "border rounded-2xl p-2 mx-4"} onClick={handleReset}>Reset</button>
        <Search setAllRestaurant={setAllRestaurant} restArr={restArr} />
        <div className="mx-auto">
            <RestaurantCard restArr={allRestaurant} />
        </div>
    </div>
  )
}

export default Body