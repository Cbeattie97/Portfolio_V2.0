// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import Nav from './components/NavTabs';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';


function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <>
      <Header />
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
