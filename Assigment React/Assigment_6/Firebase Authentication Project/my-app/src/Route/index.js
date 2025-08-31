import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import Signup from "../Signup";
import Login from "../Login";
import Dashboard from "../Dashborad";
import PostAd from "../Post Ads";

function MainRoute(){
  return <Router>
    <Routes>
      <Route path="/" element={<Signup/>} />
      <Route path="/Login" element={<Login/>} />
      <Route path="/PostAds" element={<PostAd/>} />
      <Route path="/Dashboard" element={< Dashboard/>} />
    </Routes>
  </Router>
}
export default MainRoute

// function Router() {
//   return <RouterProvider router={router} />
// }

// export default Router