import "./Header.css"
import Home from "../../assets/Home-page.webp"
import { Send } from "lucide-react";
import Suggestions from "../Suggestions/Suggestions";

const Header = () => {
    return (
        <div>
            <div className="header">
                <div className="left">
                    <p className="gawu">Go anywhere with <br /> Uber</p>
                    <p className="rar">Request a ride, hop in, and go.</p>
                    <div className="input_msg">
                        <input className="input_1" type="text" placeholder="Enter Location" />
                        <span><Send /> </span>
                    </div>
                    <input className="des" type="text" placeholder="Enter Destination" />
                    <button className="sp">See prices</button>
                </div>
                <div className="right">
                    <img src={Home} alt="" />
                </div>
            </div>
            <Suggestions />
        </div>
    )
}

export default Header;