import LocationDropdown from "./Navloaction";

const SearchBar = () => {
    return (
      <div className="flex items-center justify-between  px-4 py-2 rounded-md ">
        {/* Location Selector */}
        <LocationDropdown/>
  
        {/* Search Input */}
        <div className="flex-1 mx-4">
          <input
            type="text"
            className="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Search for Medicines and Health Products"
          />
        </div>
  
        {/* Quick Order Button */}
        <div className="flex items-center space-x-4">
          <div className="text-blue-600 font-bold">
            <span className="text-blue-500 material-icons">bolt</span> QUICK BUY! Get 15% off 
          </div>
          <button className="bg-green-400 text-white px-4 py-2 rounded-md hover:bg-red-600">
            Quick order
          </button>
        </div>
      </div>
    );
  };
  
  export default SearchBar;
  