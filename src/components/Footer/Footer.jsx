import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaMoon, FaSun } from "react-icons/fa";

const Footer = ({isDarkMode}) => {

  return (
    <footer className={`py-10 px-6 md:px-20 ${!isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"}`}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
          <h2 className="text-xl font-bold flex items-center">
            Communion
          </h2>
          <p className="text-gray-400 text-sm mt-2">
            Discover the power of connection with Communion. Uniting diverse communities through spirituality and innovation.
          </p>
         <div className="flex space-x-4 mt-4">
            <FaFacebook size={24} className="text-gray-400 hover:text-white" />
            <FaTwitter size={24} className="text-gray-400 hover:text-white" />
            <FaInstagram size={24} className="text-gray-400 hover:text-white" />
            <FaYoutube size={24} className="text-gray-400 hover:text-white" />
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Company</h3>
          <ul className="mt-2 text-gray-400 space-y-2">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">Communities</li>
            <li className="hover:text-white cursor-pointer">Events</li>
            <li className="hover:text-white cursor-pointer">Leaders</li>
            <li className="hover:text-white cursor-pointer">Support</li>
            <li className="hover:text-white cursor-pointer">Profile</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Contact</h3>
          <p className="text-gray-400 mt-2">contact@communionhub.org</p>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between text-gray-400 text-sm">
        <p>Copyright © 2024. All rights reserved to Communion</p>
        <div className="flex space-x-6">
          <span className="hover:text-white cursor-pointer">Privacy Policy</span>
          <span className="hover:text-white cursor-pointer">Terms & Conditions</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
