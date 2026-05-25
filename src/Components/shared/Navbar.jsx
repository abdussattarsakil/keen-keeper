import { IoHomeOutline } from "react-icons/io5";
import { MdQueryStats } from "react-icons/md";
import { RiTimeLine } from "react-icons/ri";
import { Link, NavLink } from "react-router";

const Navbar = () => {
    return (
        <div className="flex justify-around shadow p-3">
            <div>
                <Link to={"/"}>
                <img src="/assets/logo.png" alt="brand logo" />
                </Link>
                
            </div>
            <div className="hidden md:flex gap-2">
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

            {/* mobile dropdown */}
            <div className="dropdown dropdown-end md:hidden">
                <div tabIndex={0} role="button" className="btn m-1">Menubar</div>
                <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li>
                        <div className="">
                            <NavLink to="/"
                                className={({ isActive }) => `p-2 rounded-xl font-semibold flex items-center ${isActive ? "bg-green-900 text-white" : "text-gray-600"}`}
                            ><IoHomeOutline />
                                Home</NavLink>
                        </div>
                    </li>


                    <li>
                        <div className="">
                            <NavLink to="/timeline"
                                className={({ isActive }) => `p-2 rounded-xl font-semibold flex items-center ${isActive ? "bg-green-900 text-white" : "text-gray-600"}`}
                            ><RiTimeLine />
                                Timeline</NavLink>
                        </div>
                    </li>


                    <li>
                        <div className="">
                            <NavLink to="/state"
                                className={({ isActive }) => `p-2 rounded-xl font-semibold flex items-center ${isActive ? "bg-green-900 text-white" : "text-gray-600"}`}
                            ><MdQueryStats />
                                State</NavLink>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;