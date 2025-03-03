
import Navbar from "../Components/Navbar.jsx";
import {Outlet} from "react-router-dom";

function RootLayout() {
    return (
        <div>
            <Navbar/>
            <div className="mt-14">
                <Outlet/>

            </div>
        </div>
    );
}

export default RootLayout;