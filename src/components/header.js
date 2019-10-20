import React from 'react';
import { Link } from 'react-router-dom';

const Header = () =>  {
  return (
    <div>
      <Link to='/'>navTo home</Link>
      <br/>
      <Link to='/login'>navTo login</Link>
    </div>
  )
}

export default Header;