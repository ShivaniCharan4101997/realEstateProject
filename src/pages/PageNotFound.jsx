import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function NotFound() {
    return (
        <motion.div
            className="flex flex-col items-center justify-center h-screen text-center bg-gray-100"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <h1 className="text-6xl font-bold text-gray-900">404</h1>
            <p className="text-xl text-gray-600 mt-4">Oops! The page you are looking for does not exist.</p>

            <Link
                to="/"
                className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-full text-lg hover:bg-blue-700 transition"
            >
                Go Back Home
            </Link>
        </motion.div>
    );
}

export default NotFound;
