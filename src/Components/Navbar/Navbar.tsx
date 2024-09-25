
import { useState, useEffect } from "react"
import { AlignJustify, ChevronDown, ChevronUp, Globe, X } from "lucide-react"
import "./Navbar.css"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"

const Navbar = () => {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHome, setIsHome] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isMenu, setIsMenu] = useState(false);

  const handleMenu = () => {
    setIsMenu(!isMenu);
  }

  useEffect(() => {
    setIsHome(!isHome); // find a way to do this without pressing the Uber text in the navbar 
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleHomeClick = () => {
    setIsOpen(false);
    navigate("/");
    setIsMobile(!isMobile);
  };

  const handleLogin = () => {
    navigate("/login");
    setIsHome(!isHome);
  }

  const handleChevron = () => {
    setIsExpanded(!isExpanded);
  };

  const handleButtonClick = () => {
    navigate("/mid");
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
    setIsHome(!isHome)
    console.log(options);
  };

  const options = [
    "About us",
    "Our Offerings",
    "How Uber works",
    "Impact",
    "Diversity, equity, and Inclusion",
    "Sustainability",
    "Newsroom",
    "Investor relations",
    "Autonomous",
    "Blog",
    "Careers",
  ];

  const menus = [
    "Ride",
    "Drive",
    "Uber Eats",
    "About",
  ]


  return (
    <div className='navbar'>
      <div className='left-side'>
        <Link className="uber" style={{ textDecoration: "none" }} onClick={handleHomeClick} to="/"><p>Uber</p></Link>
        {isHome ? <ul>
          <li className="li">Ride</li>
          <li className="li">Drive</li>
          <li className="li">
            <Link style={{ textDecoration: "none", color: "inherit" }} to="/eats">Uber Eats</Link>
          </li>
          {isMobile ? <li
            className="about"
            style={{ display: 'flex', alignItems: 'center' }}
            onClick={handleToggle}
          >
            <p onClick={handleChevron} className="text">About</p>
            <span onClick={handleChevron} style={{ marginLeft: "-20px", width: "20px", marginTop: "5px", color: "white", cursor: "pointer" }}>
              {isExpanded ? <ChevronUp /> : <ChevronDown />}
            </span>
            {isOpen ? (
              <div className="dropdown">
                <ul className="open">
                  {options.map((option) => (
                    <li
                      className="opened"
                      key={option}
                      style={{ padding: '10px' }}
                    >
                      {option}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </li> : null}
        </ul> : null}
      </div>
      <div className='right-side'>
        {isHome ? <ul>
          <li className="en"><span><Globe className="globe" /></span>EN</li>
          <li>Help</li>
          <li><Link onClick={handleLogin} style={{ textDecoration: "none", color: "inherit" }} to="/login">Log in</Link></li>
          <li className="button"><button onClick={handleButtonClick}>Sign Up</button></li>
        </ul> : null}
      </div>
      {isMobile && (
        <div className="menu">
          <button><Link to="/login">Login</Link></button>
          <button className="button"><Link to="/mid">Signup</Link></button>
          {!isMenu ? <AlignJustify onClick={handleMenu} /> : <X onClick={handleMenu} />}
          <div className="dpd">
            {isMenu && (
              menus.map((option, index) => (
                <ul className="menu_option" key={index}>
                  <li>{option}</li>
                </ul>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  )
}
export default Navbar
