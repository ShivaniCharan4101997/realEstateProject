function Footer() {
    return (
        <div className="pt-10 px-4 md:px-20 bg-gray-900 w-full overflow-hidden text-gray-400" id="Footer">
            <div className="footerWrapper">
                <div className="footerBlock">
                    <img src="/assets/logo_dark.svg" alt="footer dark logo"/>
                    <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae id, minus nemo quas quisquam vel!</p>
                </div>
                <div className="footerBlock">
                    <h3 className="heading text-white">Company</h3>
                    <ul>
                        <li className="cursor-pointer hover:text-white"><a href="#Home">Home</a></li>
                        <li className="cursor-pointer hover:text-white"><a href="#About">About Us</a></li>
                        <li className="cursor-pointer hover:text-white"><a href="#PrivacyPolicy">Privacy Policy</a></li>
                        <li className="cursor-pointer hover:text-white"><a href="#Contact">Contact</a></li>
                    </ul>
                </div>
                <div className="footerBlock">
                    <h3 className="heading text-white">Quick Links</h3>
                    <ul>
                        <li className="cursor-pointer hover:text-white"><a href="#FAQ">FAQ</a></li>
                        <li className="cursor-pointer hover:text-white"><a href="#Support">Support</a></li>
                        <li className="cursor-pointer hover:text-white"><a href="#Careers">Careers</a></li>
                    </ul>
                </div>
            </div>
            <div className="text-center py-6 border-t border-gray-700 mt-6 text-sm">
                &copy; {new Date().getFullYear()} Your Company. All rights reserved.
            </div>
        </div>
    );
}

export default Footer;
