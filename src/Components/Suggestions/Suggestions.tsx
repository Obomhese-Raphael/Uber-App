import "./Suggestions.css"
import ride from "../../assets/suggestions-ride.png"
import connect from "../../assets/suggestions-connect.png"
import calender from "../../assets/suggestions-calender.png"
import Drive from "../../assets/earner-illustra.webp"
import port from "../../assets/u4b-square.webp"
import qr_1 from "../../assets/QR-Code_1.webp"
import qr_2 from "../../assets/QR-Code_1.webp"
import { ArrowRight } from "lucide-react"


const Suggestions = () => {
    return (
        <div className="suggestions">
            <div>
                <div className="head">
                    <h3>Suggestions</h3>
                </div>
                <ul className="programs">
                    <li className="program">
                        <div className="left">
                            <h3>Ride</h3>
                            <p>Go anywhere with Uber. Request a ride, hop in, and go</p>
                            <button className="button">Details</button>
                        </div>
                        <div className="right">
                            <img src={ride} alt="Ride" />
                        </div>
                    </li>
                    <li className="program">
                        <div className="left">
                            <h3>Package</h3>
                            <p>Uber Connect makes same-day delivery easier than ever</p>
                            <button className="button">Details</button>
                        </div>
                        <div className="right">
                            <img src={connect} alt="Ride" />       
                        </div>
                    </li>
                    <li className="program">
                        <div className="left">
                            <h3>Reserve</h3>
                            <p>Reserve your ride in advance so you can relax on the day of your trip</p>
                            <button className="button">Details</button>
                        </div>
                        <div className="right">
                            <img src={calender} alt="Ride" />
                        </div>
                    </li>
                </ul>
            </div>

            <div className="section_2">
                <div className="left">
                    <img src={Drive} alt="" />
                </div>    
                <div className="right">
                    <p className="gawu">Drive when you <br /> want, make what you need</p>
                    <p className="rar">Make money on your schedule with deliveries or rides—or <br /> both. You can use your own car or choose a rental <br /> through Uber.</p>

                    <div className="inner">
                        <button>Get Started</button>
                        <p>Already have an account? Sign in</p>
                    </div>

                </div>
            </div>

            <div className="section_3">
                <div className="left">
                    <p className="gawu">The Uber you <br /> know, reimagined <br /> for business </p>
                    <p className="rar">Make money on your schedule with deliveries or rides—or <br /> both. You can use your own car or choose a rental <br /> through Uber.</p>

                    <div className="inner">
                        <button>Get Started</button>
                        <p>Already have an account? Sign in</p>
                    </div>
                </div>
                <div className="right">
                    <img src={port} alt="" />

                </div>
            </div>

            <div className="qr">
                <div className="head">
                    <h3>It's easier in the apps</h3>
                </div>
                <ul className="programs">
                    <li className="program">
                        <div className="right">
                           <img src={qr_1} alt="" />
                        </div>
                        <div className="right other_right">
                            <h4>Download the Uber App</h4>
                            <p>Scan to download</p>
                        </div>
                        <div className="end">
                            <span><ArrowRight /></span>
                        </div>
                    </li>
                    <li className="program">
                        <div className="right">
                            <img src={qr_2} alt="" />
                        </div>
                        <div className="right other_right">
                            <h4>Download the Driver's App</h4>
                            <p>Scan to download</p>
                        </div>
                        <div className="end">
                            <span><ArrowRight /></span>
                        </div>
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default Suggestions;