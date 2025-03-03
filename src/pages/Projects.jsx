import { useEffect, useState } from "react";
import {projectsData} from "../../public/assets/assets.js";
import { motion } from "framer-motion";
import Navbar from "../Components/Navbar.jsx";

function Projects() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardsToShow, setCardsToShow] = useState(1);
    const slideWidth = 100; // Each slide width in percentage

    useEffect(() => {
        const updateCardsToShow = () => {
            setCardsToShow(window.innerWidth >= 1024 ? projectsData.length : 1);
        };

        updateCardsToShow(); // ✅ Run once to set initial state
        window.addEventListener("resize", updateCardsToShow);

        return () => window.removeEventListener("resize", updateCardsToShow);
    }, []);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === projectsData.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1
        );
    };

    return (
        <>
            <Navbar />
            <motion.div
                initial={{ opacity: 0, x: -200 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="wrapper"
                id="Projects"
            >
                <h1 className="heading">
                    Projects <span className="span">Completed</span>
                </h1>
                <p className="para">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis,
                    perspiciatis.
                </p>

                {/* Slider Buttons */}
                <div className="flex justify-end items-center mb-8">
                    <button
                        className="p-3 bg-gray-200 rounded mr-2"
                        aria-label="Previous button"
                        onClick={prevSlide}
                    >
                        <img src="/assets/left_arrow.svg" alt="left arrow" />
                    </button>

                    <button
                        className="p-3 bg-gray-200 rounded mr-2"
                        aria-label="Next button"
                        onClick={nextSlide}
                    >
                        <img src="/assets/right_arrow.svg" alt="right arrow" />
                    </button>
                </div>

                {/* Project Cards Slider */}
                <div className="overflow-hidden relative">
                    <div
                        className="flex gap-8 transition-transform duration-500 ease-in-out"
                        style={{
                            transform: `translateX(-${(currentIndex * slideWidth) / cardsToShow}%)`,
                            width: `${projectsData.length * slideWidth}%`, // Ensures correct width
                        }}
                    >
                        {projectsData.map((project, index) => (
                            <div
                                key={index}
                                className="relative flex-shrink-0 w-full md:w-1/2 lg:w-1/3 bg-gray-200"
                            >
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className=" w-[350px] h-[250px] sm:h-[350px] object-cover rounded-lg"
                                />

                                <div className="absolute left-0 right-0 bottom-5 flex justify-center">
                                    <div className="inline-block bg-white w-3/4 px-4 py-2 shadow-md rounded-md">
                                        <h2 className="font-semibold text-xl text-gray-900">
                                            {project.title}
                                        </h2>
                                        <p className="text-gray-500 text-sm">
                                            {project.price} <span>|</span> {project.location}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </>
    );
}

export default Projects;
