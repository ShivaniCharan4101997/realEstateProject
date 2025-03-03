import Navbar from "../Components/Navbar.jsx";
import {motion} from "framer-motion";

function Header() {
    return (
        <div
            className="h-screen bg-center bg-cover flex items-center w-full" id="Header"
            style={{ backgroundImage: "url('/assets/header_img.png')" }}
        >
            <Navbar />

            <motion.div
                initial={{opacity:0,y:100}}
                transition={{duration:1.5}}
                whileInView={{opacity:1,y:0}}
                viewport={{once:true}}
                className="container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white">
                <h2 className="text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20">Explore homes that fits your dream!</h2>
                <div className="space-x-6 mt-16 header-nav">
                    <a href="#Projects" className="link">Projects</a>
                    <a href="#Contact" className="link">Contact Us</a>
                </div>
            </motion.div>
        </div>
    );
}

export default Header;

