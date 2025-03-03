import { useState } from "react";
import {NavLink, useNavigate} from "react-router-dom";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const navigate = useNavigate()

    function handleToggleMenu() {
        setMenuOpen(!menuOpen);
    }


    return (
        <>
            <nav className="absolute w-full top-0 left-0 z-10 bg-gray-400 shadow-2xl">
                <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent ">
                    <img src="/assets/logo.svg" alt="logo" className="h-10 w-auto" onClick={()=>navigate("/",{replace:true})} />

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex gap-7 text-white">
                        {["Home", "About", "Projects", "Testimonials"].map((item) => (
                            <li key={item}>
                                <NavLink
                                    to={`/${item.toLowerCase()}`}
                                    className={({ isActive }) =>
                                        `cursor-pointer hover:text-gray-400 ${isActive ? "text-gray-300" : "text-white"}`
                                    }
                                >
                                    {item}
                                </NavLink>
                            </li>
                        ))}
                    </ul>

                    <button className="hidden md:block bg-white px-8 py-2 rounded-full"
                    onClick={()=>navigate("/Contact",{replace:true})}
                    >Sign up</button>

                    {/* Mobile Menu Toggle */}
                    <img
                        src="/assets/menu_icon.svg"
                        alt="menu icon"
                        className="md:hidden w-8 cursor-pointer"
                        onClick={handleToggleMenu}
                    />
                </div>
            </nav>

            {/* --- Mobile Menu --- */}
            <nav className={`md:hidden fixed w-full right-0 top-0 bottom-0 bg-white transition-transform duration-300 ${menuOpen ? "translate-x-0" : "translate-x-full"}`}>
                <div className="flex justify-end p-6 cursor-pointer" onClick={handleToggleMenu}>
                    <img src="/assets/cross_icon.svg" alt="cross icon" />
                </div>
                <ul className="flex flex-col items-center gap-5 mt-10 text-lg font-medium">
                    {["Home", "About", "Projects", "Testimonials"].map((item) => (
                        <li key={item}>
                            <NavLink
                                to={`/${item.toLowerCase()}`}
                                className="px-4 py-2"
                                onClick={() => setMenuOpen(false)}
                            >
                                {item}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    );
}

export default Navbar;
