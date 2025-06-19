import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Offer from './components/Offer.jsx'
import Body from './components/Body.jsx'
import Help from './components/Help.jsx'
import SignIn from './components/SignIn.jsx'
import { RouterProvider, Routes } from "react-router"
import { createBrowserRouter } from 'react-router-dom';
import Error from './components/Error.jsx';
import RestaurantDetails from './components/RestaurantDetails.jsx'
import Clock from './components/Clock.jsx'
import Cart from './components/Cart.jsx'
const appRoutes = createBrowserRouter([
  {
    path: "/",
    element: <App />, 
    errorElement: <Error/>,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
      path: "/Offers",
      element: <Offer />,
    },
    {
      path: "/help",
      element: <Help />,
    },
    {
      path: "/SignIn",
      element: <SignIn />,
    },
    {
      path: 'restaurant/:id',
      element: <RestaurantDetails/>
    },
    {
      path: '/Clock',
      element: <Clock/>
    },
    {
      path : '/Cart',
      element: <Cart/>
    }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={appRoutes} />
)
