import React from 'react';
import './Header.css'
import CustomLink from '../CustomLink/CustomLink';
import { Link } from 'react-router-dom';

// const navLinkStyles = ({isActive}) =>{
//   return {
//     fontWeight: isActive ? 'bold' : 'normal'
//     // textDecoration: isActive ? 'none' : 'underline',
//     // color: isActive ? 'red' : 'normal'

//   }
// }

const Header = () => {
  return (
    <nav className='navlink'>
      <Link to='/'>Home</Link>
      <Link to='/friends'>Friends</Link>
      <Link to='/posts'>Posts</Link>
      <Link to='/countries'>Countries</Link>
      <Link to='/about'>About</Link>
      {/* <CustomLink to="/">Home</CustomLink>
      <CustomLink to="/friends">Friends</CustomLink>
      <CustomLink to="/about">About</CustomLink> */}
    </nav>
  );
};

export default Header;