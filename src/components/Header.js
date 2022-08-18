import Navbar from './Navbar';
// ...
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.svg';
import user from '../assets/img/user.svg';

const Header = () => {
  return (
    <header>
      <div className="nav-area">
        <Link to="/" className="logo">
          <img src={logo} alt="logo" />
        </Link>
        <Navbar />
      </div>
      {/* <div className="user-options"> */}
        {/* <img src={user} alt="user" /> */}
      {/* </div> */}
    </header>
  );
};

export default Header;
