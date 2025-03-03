import {testimonialsData} from "../../public/assets/assets.js";
import {motion} from "framer-motion";
import Navbar from "../Components/Navbar.jsx";

function Testimonials() {
    return (
        <>
            <Navbar/>
        <motion.div
            initial={{opacity:0,x:100}}
            transition={{duration:1}}
            whileInView={{opacity:1,x:0}}
            viewport={{once:true}}

            className="wrapper" id="Testimonials">
            <h1 className="heading">
                Customer's <span className="span"> Testimonials</span>
            </h1>
            <p className="para">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis,
                perspiciatis.
            </p>
             <div className="flex flex-wrap gap-8 justify-center">
                 {testimonialsData.map((testimonial,index)=>(
                     <div key={index} className="w-[240px] border shadow-lg rounded px-8 py-12 text-center">
                         <img src={testimonial.image} alt={testimonial.alt} className="w-20 h-20 rounded-full mx-auto mb-4"
                         />
                         <h2 className="text-xl font-medium text-gray-700">{testimonial.name}</h2>
                         <p>{testimonial.title}</p>
                         <div className="flex justify-center gap-1 my-4">
                             {Array.from({length:testimonial.rating},(item,index)=>(
                                 <img src="/assets/star_icon.svg" alt="star icon" key={index}/>
                             ))}
                         </div>
                         <p className="text-gray-600">{testimonial.text}</p>
                     </div>
                 ))}
             </div>

        </motion.div>
            </>
    );
}

export default Testimonials;