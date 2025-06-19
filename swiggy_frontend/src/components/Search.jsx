
function Search({ setAllRestaurant, restArr }) {
    function handleSearch(event) {
        const searchText = event.target.value.toLowerCase();
        const filteredRestaurants = restArr.filter((restaurant) =>
            restaurant.info.name.toLowerCase().includes(searchText)
        );
        setAllRestaurant(filteredRestaurants);
    }
    return (
        <input  className="border rounded-2xl p-2 mx-4" type="text" placeholder="Search Restaurants" onChange={handleSearch}/>
    );
}

export default Search;
