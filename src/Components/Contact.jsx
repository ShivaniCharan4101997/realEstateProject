import {useState} from "react";
import {motion} from "framer-motion";
import {toast} from "react-toastify";

function Contact() {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "a4a0afae-1f49-4618-8d3d-61d1df83593c");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("")
            toast.success("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            toast.error(data.message)
            setResult();
        }
    };

    return (
        <motion.div
            initial={{opacity:0,x:-200}}
            transition={{duration:1}}
            whileInView={{opacity:1,x:0}}
            viewport={{once:true}}

            className="wrapper" id="Testimonials">
            <h1 className="heading">
                Contact <span className="span"> With Us</span>
            </h1>
            <p className="para">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis,
                perspiciatis.
            </p>


            <form onSubmit={onSubmit} className="mx-auto max-w-2xl text-gray-900 pt-8">
                <div className="flex flex-wrap">
                    <label htmlFor="name" className="w-full md:w-1/2 text-left">Your Name
                    <input type="text" id="name" placeholder="Your name" required className="w-full border border-gray-300 rounded py-3 px-4 mt-2" />
                    </label>
                    <label htmlFor="email" className="w-full md:w-1/2 text-left md:pl-4">Your Email
                    <input type="email" id="email" placeholder="Your email" required className="w-full border border-gray-300 rounded py-3 px-4 mt-2" />
                    </label>
                </div>

                <label htmlFor="textarea">
                    Message
                    <textarea id="textarea" placeholder="Your message" required className="w-full border border-gray-300 rounded py-3 px-4 mt-2" />
                </label>
                    <button className="text-white bg-blue-600 px-12 py-2 mb-10 mx-auto">{result ? result:'Send Message'}</button>
            </form>
        </motion.div>
    );
}

export default Contact;