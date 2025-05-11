import Image from "next/image";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import Button from "../common/Button";

const footerData = [
    {
        title: "Company",
        links: ["About", "Features", "Works", "Career"],
    },
    {
        title: "Help",
        links: ["Customer Support", "Delivery Details", "Terms & Conditions", "Privacy Policy"],
    },
    {
        title: "FAQ",
        links: ["Account", "Manage Deliveries", "Orders", "Payments"],
    },
    {
        title: "Resources",
        links: ["Free eBooks", "Development Tutorial", "How to - Blog", "Youtube Playlist"],
    },
];

const Footer = () => {
    return (
        <footer className="bg-[#f0f0f0] text-sm text-gray-700 w-full relative pt-7">
            {/* Newsletter Banner */}
            <div className="bg-black text-white px-4 md:px-16 py-8 rounded-2xl mx-auto w-full 2xl:w-7xl xl:w-5xl -mt-20">
                <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
                    <h2 className="text-2xl md:text-3xl font-bold text-center md:text-left font-secondry">
                        STAY UPTO DATE ABOUT OUR LATEST OFFERS
                    </h2>
                    <div className="flex flex-col justify-center items-center space-y-2 w-full md:w-auto">
                        <div className="flex items-center bg-white rounded-full px-4 py-2 w-80">
                            <FiMail className="text-gray-500 mr-2" />
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="w-full outline-none text-black bg-transparent placeholder-gray-400"
                            />
                        </div>
                        <Button text="Subscribe to Newsletter" className="bg-white text-black w-80 font-semibold" />
                    </div>
                </div>
            </div>

            {/* Footer Links */}
            <div className="max-w-screen-xl mx-auto px-4 md:px-16 py-10 grid grid-cols-2 md:grid-cols-6 gap-8">
                {/* Logo & Description */}
                <div className="col-span-2 space-y-4">
                    <h3 className="text-xl font-bold font-secondry">SHOP.CO</h3>
                    <p className="text-gray-600">
                        We have clothes that suits your style and which you’re proud to
                        wear. From women to men.
                    </p>
                    <div className="flex space-x-4">
                        <FaFacebookF className="cursor-pointer" />
                        <FaTwitter className="cursor-pointer" />
                        <FaInstagram className="cursor-pointer" />
                    </div>
                </div>

                {/* Link Columns */}
                {footerData.map((section) => (
                    <div key={section.title}>
                        <h4 className="mb-3 font-medium text-base leading-[112%] tracking-[0.19em] uppercase text-black">{section.title}</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                            {section.links.map((link) => (
                                <li key={link} className="hover:text-black cursor-pointer">{link}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            {/* Footer Bottom */}
            <div className="border-t py-6 px-4 md:px-16 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
                <p>Shop.co © 2025, All Rights Reserved</p>
                <div className="flex space-x-2 mt-4 md:mt-0">
                    <span className="w-16 h-12 bg-white rounded-sm flex justify-center items-center p-2">
                        <Image src="/cards/Visa.svg" alt="Visa" className="h-6" width={40} height={30} />
                    </span>
                    <span className="w-16 h-12 bg-white rounded-sm flex justify-center items-center p-2">
                        <Image src="/cards/Mastercard.svg" alt="MasterCard" className="h-6" width={40} height={30} />
                    </span>
                    <span className="w-16 h-12 bg-white rounded-sm flex justify-center items-center p-2">
                        <Image src="/cards/Paypal.svg" alt="PayPal" className="h-6" width={40} height={30} />
                    </span>
                    <span className="w-16 h-12 bg-white rounded-sm flex justify-center items-center p-2">
                        <Image src="/cards/ApplePay.svg" alt="Apple Pay" className="h-6" width={40} height={30} />

                    </span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
