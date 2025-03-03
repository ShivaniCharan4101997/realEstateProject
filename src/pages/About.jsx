import {motion} from "framer-motion";
import Navbar from "../Components/Navbar.jsx";

function About() {
    return (
        <>
        <Navbar/>
        <motion.div
            initial={{opacity:0,x:100}}
            transition={{duration:1}}
            whileInView={{opacity:1,x:0}}
            viewport={{once:true}}
            className="wrapper" id='About' >
            <h1 className="heading">About <span className="span">Our Brand</span> </h1>
            <p className="para">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, laborum?</p>

            <div className="flex-col flex md:flex-row items-center md:items-start md:gap-20">
                <img src="/assets/brand_img.png" alt="brand image" className="w-full sm:w-1/2 max-w-lg"/>
                <div className="flex flex-col items-center md:items-start mt-10 text-gray-600">
                    <div className=" grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28">
                        <div>
                            <p className="text-4xl font-medium text-gray-900">10+</p>
                            <p>Years of Excellence</p>
                        </div>
                        <div>
                            <p className="text-4xl font-medium text-gray-900">12+</p>
                            <p>Years of Excellence</p>
                        </div>
                        <div>
                            <p className="text-4xl font-medium text-gray-900">20+</p>
                            <p>Years of Excellence</p>
                        </div>
                        <div>
                            <p className="text-4xl font-medium text-gray-900">25+</p>
                            <p>Ongoing Projects</p>
                        </div>
                    </div>
              <p className="my-10 max-w-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda cupiditate distinctio dolores eius in ipsum molestiae molestias, non, nulla pariatur quis repudiandae sed voluptates voluptatum.</p>
                    <button className="bg-blue-800 text-white px-6 rounded py-4">Learn more</button>
                </div>
            </div>
        </motion.div>
            </>
    );
}

export default About;