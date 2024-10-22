import { Link, useLocation } from 'react-router-dom';
import './../assets/css/Header.css';

function Header() {
  const currentPage = useLocation().pathname;

  return (
    <header>
      <Link
      to='/'
      className={ currentPage === '/' ? 'nav-link active': 'nav-link' }>
        <h1>Cameron Beattie</h1>
      </Link>
      </header> 
     
  );
}

export default Header;