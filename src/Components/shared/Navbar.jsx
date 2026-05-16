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
            <div className="flex gap-4">
                <div className="flex items-center">
                    <IoHomeOutline />
                    <NavLink to="/"
                        className={({ isActive }) => ` ${isActive ? "bg-green-500" : "bg-gray-600"}`}
                    >
                        Home</NavLink>
                </div>


                <div className="flex items-center">
                    <RiTimeLine />
                    <NavLink to="/timeline"
                        className={({ isActive }) => ` ${isActive ? "bg-green-500" : "bg-gray-600"}`}
                    >
                        Timeline</NavLink>
                </div>


                <div className="flex items-center">
                    <MdQueryStats className=""/>
                    <NavLink to="/state"
                        className={({ isActive }) => ` ${isActive ? "bg-green-500" : "bg-gray-600"}`}
                    >
                        State</NavLink>
                </div>


            </div>
        </div>
    );
};

export default Navbar;