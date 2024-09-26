
import { useState, useEffect } from "react"
import { AlignJustify, ChevronDown, ChevronUp, Globe, X } from "lucide-react"
import "./Navbar.css"
import { useLocation, useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"

const Navbar = () => {
  const navigate = useNavigate();
  const newPath = useLocation().pathname;
  console.log(newPath)

  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHome, setIsHome] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isMenu, setIsMenu] = useState(false);

  const handleMenu = () => {
    setIsMenu(!isMenu);
  }

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleHomeClick = () => {
    setIsOpen(false);
    navigate("/");
    // setIsMobile(!isMobile);
    // setIsHome(isHome);
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
    // setIsHome(!isHome);
  };

  const handleEats = () => {
    navigate("/eats");
    setIsHome(!isHome);
  }

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
        {
          isHome && newPath === "/"
            ?
            <Link className="uber" style={{ textDecoration: "none" }} onClick={handleHomeClick} to="/"><p>Uber</p></Link>
            :
            <div className="aea">
              <svg className="svg" width="121" height="20" fill="none">
                <path fill="#06c167" d="M 63.5 0.3 H 77 v 3.3 h -9.9 v 4.8 h 9.7 v 3.2 H 67 v 4.8 h 10 v 3.3 H 63.4 V 0.3 Z M 114 20 c 4.1 0 6.5 -2 6.5 -4.7 c 0 -2 -1.4 -3.4 -4.3 -4 l -3.1 -0.7 c -1.8 -0.3 -2.3 -0.6 -2.3 -1.3 c 0 -0.8 0.8 -1.4 2.4 -1.4 c 1.7 0 3 0.5 3.3 2 h 3.6 C 120 7 117.8 5 113.4 5 c -3.7 0 -6.4 1.6 -6.4 4.6 c 0 2 1.5 3.4 4.6 4 l 3.4 0.9 c 1.4 0.2 1.8 0.6 1.8 1.2 c 0 0.9 -1 1.4 -2.7 1.4 c -2 0 -3.3 -0.4 -3.7 -2 h -3.7 c 0.5 3 2.8 5 7.3 5 Z m -8.3 -3.6 H 103 c -0.8 0 -1.3 -0.3 -1.3 -1.1 V 8.6 h 4 V 5.4 h -4 v -4 H 98 v 4 h -2.7 v 3.2 H 98 v 7.6 c 0 2 1.4 3.5 3.8 3.5 h 4 v -3.3 Z m -12 -11 v 14.3 h -3.5 v -1.3 a 7.5 7.5 0 1 1 0 -11.7 V 5.4 h 3.6 Z m -3.5 7.1 c 0 -2.4 -1.9 -4.3 -4.3 -4.3 s -4.3 1.9 -4.3 4.3 a 4.3 4.3 0 1 0 8.6 0 Z"></path>
                <path fill="#fff" d="M 8 17.4 c 2.7 0 4.7 -2 4.7 -5.1 V 0.3 h 3 v 19.4 h -3 v -1.8 a 7 7 0 0 1 -5 2.1 c -4.2 0 -7.4 -3 -7.4 -7.6 V 0.4 h 3 v 11.9 c 0 3 2 5.1 4.7 5.1 Z m 9.8 2.3 h 2.7 v -1.8 A 7.3 7.3 0 0 0 33 12.7 c 0 -4.1 -3.2 -7.4 -7.3 -7.4 a 7 7 0 0 0 -5 2 v -7 h -2.8 v 19.4 Z m 7.6 -2.2 a 4.9 4.9 0 0 1 -4.9 -4.9 a 4.9 4.9 0 1 1 9.7 0 c 0 2.8 -2.2 5 -4.8 5 Z m 16 -12.2 a 7.2 7.2 0 0 0 -7.3 7.3 c 0 4.2 3.2 7.4 7.5 7.4 c 2.5 0 4.6 -1.2 6 -3 l -2 -1.5 c -1 1.4 -2.4 2 -4 2 a 4.7 4.7 0 0 1 -4.7 -4 h 11.5 v -0.9 c 0 -4.2 -3 -7.3 -7 -7.3 Z m -4.4 6 a 4.4 4.4 0 0 1 4.3 -3.6 c 2 0 3.8 1.5 4.2 3.6 H 37 Z m 20 -3.2 V 5.5 h -1 c -1.5 0 -2.6 0.7 -3.3 1.8 V 5.6 h -2.8 v 14 h 2.8 v -8 c 0 -2.1 1.3 -3.5 3.1 -3.5 H 57 Z"></path>
              </svg>
            </div>
        }
        {isHome ? <ul>
          <li className="li">Ride</li>
          <li className="li">Drive</li>
          <li className="li">
            <Link style={{ textDecoration: "none", color: "inherit" }} onClick={handleEats} to="/eats">Uber Eats</Link>
          </li>
          {isHome && isMobile ? <li
            className="about"
            style={{ display: 'flex', alignItems: 'center' }}
            onClick={handleToggle}
          >
            <p onClick={handleChevron} className="text">About</p>
            <span onClick={handleChevron} style={{ marginLeft: "-20px", width: "20px", marginTop: "5px", color: "white", cursor: "pointer" }}>
              {isExpanded ? <ChevronUp className="chev" /> : <ChevronDown className="chev" />}
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
          {/* <button><Link to="/login">Login</Link></button> */}
          <button className="button"><Link to="/mid">Signup</Link></button>
          {!isMenu ?
            <AlignJustify
              className="alj"
              onClick={handleMenu}
            />
            :
            <X
              className="x"
              onClick={handleMenu}
            />
          }
          <div className="dpd">
            {isMenu && (
              menus.map((option, index) => (
                <ul className="menu_option" key={index}>
                  <li>
                    <Link to={option === "Uber Eats" ? "/eats" : "/"}>{option}</Link>
                  </li>
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
