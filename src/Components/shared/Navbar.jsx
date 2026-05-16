import { IoHomeOutline } from "react-icons/io5";
import { MdQueryStats } from "react-icons/md";
import { RiTimeLine } from "react-icons/ri";
import { NavLink } from "react-router";

const Navbar = () => {
    return (
        <div className="flex justify-around shadow p-3">
            <div>
                <img src="/assets/logo.png" alt="brand logo" />
            </div>
            <div className="flex gap-2">
                <div className="">
                    <NavLink to="/"
                        className={({ isActive }) => `p-2 rounded-xl font-semibold flex items-center ${isActive ? "bg-green-900 text-white" : "text-gray-600"}`}
                    ><IoHomeOutline />
                        Home</NavLink>
                </div>


                <div className="">
                    <NavLink to="/timeline"
                        className={({ isActive }) => `p-2 rounded-xl font-semibold flex items-center ${isActive ? "bg-green-900 text-white" : "text-gray-600"}`}
                    ><RiTimeLine />
                        Timeline</NavLink>
                </div>


                <div className="">
                    <NavLink to="/state"
                        className={({ isActive }) => `p-2 rounded-xl font-semibold flex items-center ${isActive ? "bg-green-900 text-white" : "text-gray-600"}`}
                    ><MdQueryStats />
                        State</NavLink>
                </div>


            </div>
        </div>
    );
};

export default Navbar;