import { useLocation } from 'react-router-dom';
import './../assets/css/Footer.css';

function Footer() {
  const currentPage = useLocation().pathname;

  return (
    <footer>
      <h5>Thanks for visiting!</h5>
    </footer> 
     
  );
}

export default Footer;