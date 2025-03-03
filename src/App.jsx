
import Header from "./pages/Header.jsx";

import About from "./pages/About.jsx";
import Projects from "./pages/Projects.jsx";
import Testimonials from "./pages/Testimonials.jsx";
import Contact from "./Components/Contact.jsx";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import Footer from "./Components/Footer.jsx";
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import RootLayout from "./layout/RootLayout.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";


function App() {

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<RootLayout/>}>
                <Route path="/" element={<Header/>}/>
                <Route path="about" element={<About/>}/>
                <Route path="projects" element={<Projects/>}/>
                <Route path="testimonials" element={<Testimonials/>}/>
                <Route path="contact" element={<Contact/>}/>
                <Route path="*" element={<PageNotFound/>}/>
            </Route>
        )
    )

    return (
        <div>
            <ToastContainer/>
            <RouterProvider router={router}/>


            <Footer/>
        </div>
    );
}

export default App;