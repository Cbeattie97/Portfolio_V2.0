import { Link, useLocation } from 'react-router-dom';
import './../assets/css/Header.css';
import myImage from './../assets/images/CameronAvatar.svg';

function Header() {
  const currentPage = useLocation().pathname;

  return (
    <header>
      <Link
      to='/'
      className={ currentPage === '/' ? 'nav-link active': 'nav-link' }>
        <div className='title'>
         <img src={myImage} alt="My Image" />
        <h1>Cameron Beattie</h1>
        </div>
      </Link>
      </header> 
     
  );
}

export default Header;