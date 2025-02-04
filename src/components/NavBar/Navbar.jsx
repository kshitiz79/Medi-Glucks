import Link from 'next/link';
import SearchBar from './Header2';
import Header1 from './Header1';
import NavBottomDropDown from './NavBottomDropDown';
const NavBar = () => {
  return (
    <>
<Header1/>
  <SearchBar/>
<NavBottomDropDown/>
    </>
  );
};

export default NavBar;
