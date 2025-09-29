import { useEffect, useState } from "react";
import logo from "../../assets/LOGO copy.png";
import manu from '../../assets/menu-icon.png';
import "./Navbar.css";
import { Link } from 'react-scroll';
function Navbar() {
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 100 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const [mobilemenu,setMobilemanu] = useState(true)
  const toggleEvent=()=>{
    mobilemenu ? setMobilemanu(false): setMobilemanu(true)

  }
  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      <img src={logo} alt="logo" className="logo" />
      <ul className={mobilemenu?"hide-mobile-menu":""}>
        <li> <Link to="hero" smooth={true} offset={0} duration={500}>Home</Link></li>
         <li> <Link to="about" smooth={true} offset={-150} duration={500}>About</Link></li>
         <li> <Link to="card-container" smooth={true} offset={-260} duration={500}>Features</Link></li>
         <li> <Link to="testimonial" smooth={true} offset={-250} duration={500}>Testimonial</Link></li>
        <li>
          <Link to="contract" smooth={true} offset={-230} duration={500}className="btn">Contact</Link>
        </li>
      </ul>
      <img src={manu} alt=""  className="menu-icon"  onClick={toggleEvent}/>
    </nav>
  );
}

export default Navbar;
