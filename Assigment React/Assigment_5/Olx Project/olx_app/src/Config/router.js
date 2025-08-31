import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom"

import HomePage from "../HomePage";
import AdDeatail from "../Deatils";

  const router = createBrowserRouter([
    {
      path: "/",
      element:<HomePage/> ,
    },
    {
        path: `/Addeatail/:adid`,
        element:<AdDeatail/> ,
      },
  ]);

  

  function Router(){
    return <RouterProvider router={router} />
  }


  export default Router