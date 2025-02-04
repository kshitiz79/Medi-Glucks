import Link from 'next/link';
import { FiPercent, FiShoppingCart } from "react-icons/fi"; 
import { FiUser } from "react-icons/fi";
import { FaPercentage } from "react-icons/fa";
const Header1 = () => {
  return (
    <header className="bg-white ">
      <div className="container mx-auto flex items-center justify-between py-3 ">
        {/* Logo */}
        <div className="flex items-center ">
          <img src="/nav.png" alt="Logo"  />
         
        </div>

        {/* Navigation Links */}
        {/* <nav className="flex space-x-8">
          <Link href="/medicines" className="font-medium hover:underline">
            MEDICINES
          </Link>
          <Link href="/lab-tests" className="font-medium hover:underline flex items-center">
            LAB TESTS
           
          </Link>
          <Link href="/consult-doctors" className="font-medium hover:underline">
            CONSULT DOCTORS
          </Link>
          <Link href="/cancer-care" className="font-medium hover:underline">
            CANCER CARE
          </Link>
          <Link href="/partnerships" className="font-medium hover:underline">
            PARTNERSHIPS
           
          </Link>
          <Link href="/care-plan" className="font-medium hover:underline flex items-center">
            CARE PLAN
            
          </Link>
        </nav> */}

        {/* Right Section */}
        <div className="flex items-center space-x-6">
  <Link href="/cart" className="relative">
    <FiShoppingCart className="h-6 w-6 text-gray-700" /> {/* Using react-icon */}
  </Link>

  <div className="flex items-center justify-center w-8 h-8 border-2 border-black rounded-full">
      <FaPercentage className="text-black text-xl" />
    </div>

  <button className="flex items-center border-2 border-green-600 px-3 py-1 rounded-md space-x-2 hover:bg-green-50 transition">
      <FiUser className="h-5 w-5 text-green-600" />
      <span className="text-green-600 font-medium">Login</span>
    </button>


   

        </div>




      </div>
    </header>
  );
};

export default Header1;
