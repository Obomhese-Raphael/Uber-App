import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import "./Footer.css"
import { BsTwitterX, BsYoutube } from "react-icons/bs";
import globe from "../../assets/globe.jpg"
import location from "../../assets/location.jpg"
import googlePlay from "../../assets/google_play.svg"
import andriodStore from "../../assets/app_store.svg"
import BackToTopButton from "../TopButton/BackToTopButton";


const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="sect">
                    <div className="logo">
                        <h3>Uber</h3>
                        <p>Visit Help Center</p>
                    </div>
                </div>
                <div className="top-footer">
                    <div className="section1 section_space">
                        <h4>Company</h4>
                        <p>About Us</p>
                        <p>Our Offerings</p>
                        <p>Newsroom</p>
                        <p>Investors</p>
                        <p>Blog</p>
                        <p>Careers</p>
                    </div>

                    <div className="section2 section_space">
                        <h4>Products</h4>
                        <p>Ride</p>
                        <p>Drive </p>
                        <p>Eat</p>
                        <p>Uber Freight</p>
                        <p>Gift cards</p>
                    </div>

                    <div className="section3 section_space">
                        <h4>Global Citizenship </h4>
                        <p>Safety</p>
                        <p>Diversity and Inclusion</p>
                        <p>Sustainability</p>
                    </div>

                    <div className="section4 section_space">
                        <h4>Travel</h4>
                        <p>Reserve</p>
                        <p>Airports</p>
                        <p>Cities</p>
                    </div>
                </div>
                <div className="bottom-footer">
                    <div className="bottom">
                        <ul>
                            <li>
                                <p className="ps"><FaFacebook /></p>
                            </li>
                            <li>
                                <p className="ps"><BsTwitterX /></p>
                            </li>
                            <li>
                                <p className="ps"><BsYoutube /></p>
                            </li>
                            <li>
                                <p className="ps"><FaLinkedinIn /></p>
                            </li>
                            <li>
                                <p className="ps"><FaInstagram /></p>
                            </li>
                        </ul>
                        <div className="flex">
                            <li>
                                <img src={globe} alt="" />
                                <p>English</p>
                            </li>
                            <li>
                                <img src={location} alt="" />
                                <p>Location</p>
                            </li>
                        </div>
                    </div>
                    <div className="flex play">
                        <img src={googlePlay} alt="" />
                        <img src={andriodStore} alt="" />
                    </div>
                    <div className="flex play end">
                        <div className="left">&copy; 2024 Uber Technologies Inc.</div>
                        <div className="right">
                            <ul>
                                <li>Privacy</li>
                                <li>Accesibility</li>
                                <li>Terms</li>
                            </ul>
                        </div>
                        <div className="btp">
                            <BackToTopButton />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;