"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import menuData from "@/data/navitem.json"; // Ensure this path is correct

const NavBottomDropDown = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  const handleMouseEnter = (index) => {
    setActiveMenu(index);
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
  };

  return (
    <nav className="flex space-x-6 mt-3 px-6 relative z-50">
      {menuData.menu.map((menu, index) => (
        <div
          key={menu.name}
          className="relative"
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
          {/* Main Menu Button */}
          <button className="flex items-center gap-1 text-black hover:text-blue-600 focus:outline-none">
            {menu.name}
            <ChevronDown size={16} />
          </button>

          {/* Dropdown */}
          {activeMenu === index && (
            <div
              className={`absolute top-10 ${
                index < 4 ? "left-0" : "right-0"
              } bg-white border border-gray-300 rounded-lg shadow-lg p-4 grid grid-cols-3 gap-6 w-[600px]`}
            >
              {/* Map Subcategories */}
              {menu.subcategories.map((subcategory, subIndex) => {
                if (typeof subcategory === "string") {
                  // Render simple subcategory as a title
                  return (
                    <div
                      key={subIndex}
                      className="font-bold text-black hover:bg-gray-100 p-2 rounded-md"
                    >
                      {subcategory}
                    </div>
                  );
                } else if (subcategory.name && subcategory.items) {
                  // Render subcategory with items
                  return (
                    <div key={subIndex}>
                      <div className="font-bold text-black mb-2">
                        {subcategory.name}
                      </div>
                      <ul className="">
                        {subcategory.items.map((item, itemIndex) => (
                          <li
                            key={itemIndex}
                            className="text-black hover:bg-gray-100 p-2 rounded-md"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                } else {
                  return null; // Gracefully handle unexpected data
                }
              })}
            </div>
          )}
        </div>
      ))}
    </nav>
  );
};

export default NavBottomDropDown;
