import Navbar from './Navbar';
// ...
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.svg';
// import help from '../assets/img/help.svg';
// import search from '../assets/img/search.svg';
import UserBar from './UserBar';
import './header.scss'

const Header = () => {
  return (
    <header>
      <div className="nav-area">
        <Link to="/" className="logo">
          <img src={logo} alt="logo" />
        </Link>
        <Navbar />
      </div>
      <div className="user-options">
        {/* <div className="btn ">
          <button > 
            <img src={search}></img>
          </button>
          <label>Pesquisar</label>
        </div>
        <Link to='/help' className="help">
            <img src={help}></img>
          </Link> */}
        <UserBar/>     
      </div>

    </header>
  );
};

export default Header;
