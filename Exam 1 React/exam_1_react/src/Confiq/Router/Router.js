import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "../../Views/Dashboard/Dashboard";
import Deatail from "../../Views/Detail/Detail";
import Login from "../../Views/Login";
import Signup from "../../Signup";

function MainRoute() {
    return <Router>
        <Routes>
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/Detail/:adid" element={<Deatail />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/" element={<Signup />} />
        </Routes>
    </Router>
}
export default MainRoute