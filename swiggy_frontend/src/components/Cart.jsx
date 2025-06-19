import { useSelector, useDispatch } from "react-redux";
import { resetCart } from "../utils/cartSlice";

function Cart() {
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();
    function handleClear() {
        dispatch(resetCart());
    }

    return (
        <div className="min-h-[60vh] bg-gradient-to-br from-green-50 to-blue-100 py-10">
            <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-2xl p-8">
                <h2 className="text-3xl font-bold text-center mb-8 text-green-700">Your Cart</h2>
                {cartItems.length === 0 ? (
                    <div className="text-center text-gray-500 text-lg py-20">
                        Your cart is empty. Add some delicious food!
                    </div>
                ) : (
                    <div className="space-y-8">
                        {cartItems.map((foodItem, idx) => (
                            <div key={idx} className="flex items-center justify-between bg-gray-50 rounded-lg shadow p-4 hover:shadow-lg transition">
                                <div className="flex flex-col w-2/3">
                                    <h1 className="text-xl font-semibold text-gray-800 mb-1">{foodItem.card.info.name}</h1>
                                    <h2 className="text-lg text-green-600 font-bold mb-1">₹{(foodItem.card.info.defaultPrice / 100) || (foodItem.card.info.price / 100)}</h2>
                                    <span className="text-sm text-gray-500">{foodItem.card.info.category}</span>
                                </div>
                                <img
                                    className="w-32 h-28 object-cover rounded-lg border border-gray-200 shadow-md ml-4"
                                    src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${foodItem.card.info.imageId}`}
                                    alt={foodItem.card.info.name}
                                />
                            </div>
                        ))}
                    </div>
                )}
                {cartItems.length > 0 && (
                    <button
                        onClick={handleClear}
                        className="mt-10 w-full py-3 bg-gradient-to-r from-green-400 to-blue-400 text-white font-bold rounded-lg shadow hover:from-green-500 hover:to-blue-500 transition text-lg"
                    >
                        Clear Cart
                    </button>
                )}
            </div>
        </div>
    );
}

export default Cart;