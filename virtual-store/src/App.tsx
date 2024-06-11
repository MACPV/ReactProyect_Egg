

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./views/Cart";
import Details from "./views/Details";
import NotFound from "./views/NotFound";
import OnSale from "./views/OnSale";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/details/:productId",
    element: <Details />
  },
  {
    path: "/cart",
    element: <Cart />
  },
  {
    path: "/onsale",
    element: <OnSale />
  },
  {
    path: "*",
    element: <NotFound />
  }
]);

function App() {
  return (
    
      <RouterProvider router = {router} />
    
  )
}


export default App