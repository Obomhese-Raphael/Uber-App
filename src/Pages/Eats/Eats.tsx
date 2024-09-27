import { ChevronDown, ClockIcon, MapPin } from "lucide-react";
import "./Eats.css";
import Eats_Mid from "../../Components/Eats_Mid/Eats_Mid";
import { Link } from 'react-router-dom';

const Eats = () => {
    return (
        <div className="eats">
            <div className="top">
                <div className="sm_home">
                    <img className="bg_img" src="https://www.ubereats.com/_static/d8ceaf24a3164759.webp" />
                    <div className="ag">
                        <h2 className="odn">Order delivery near you</h2>
                        <div>
                            <div>
                                <a className="dm">
                                    <div className="fe">
                                        <MapPin className="map_pin" />
                                        <div className="je">
                                            <input type="text" className="input" placeholder="Enter delivery address" />
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <a className="cc5">
                            <div className="bc">
                                <div className="spacer _4"></div>
                                <div className="ek">
                                    <div className="ci">
                                        <div className="eg">
                                            <ClockIcon />
                                        </div>
                                    </div>
                                </div>
                                <div className="ub">
                                    <div className="cr">
                                        Deliver now
                                    </div>
                                    <div className="space _4"></div>
                                    <div className="ic">
                                        <div className="me">
                                            <ChevronDown />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a className="re" href="">
                            Search here
                        </a>
                        <div className="c6">
                            Or <span></span>
                            <a className="et"><Link to="/login">Sign In</Link></a>
                        </div>
                    </div>
                    <div className="ue"></div>
                </div>
                <div className="inner_top">
                    <div className="head">
                        <h1 style={{ marginBottom: "20px", fontFamily: "Uber Move Text" }}>Order delivery near you.</h1>
                        <div style={{ display: "flex" }} className="flex">
                            <div className="inner_flex">
                                <div className="address">
                                    <label className="label">Enter delivery address</label>
                                    <div className="fc">
                                        <div className="bo">
                                            <div className="location_icon">
                                                <MapPin />
                                            </div>
                                            <div className="space"></div>
                                            <input type="text" className="input" placeholder="Enter delivery address" />
                                            <div className="space"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="space"></div>
                                <div className="deliver">
                                    <div className="ak">
                                        <div className="fv">
                                            <div className="al">
                                                <div className="space_4"></div>
                                                <div className="icon">
                                                    <div>
                                                        <ClockIcon />
                                                    </div>
                                                    <div className="space_4"></div>
                                                    <div className="space_4"></div>
                                                    <div className="fw">
                                                        <div className="dn">Deliver now</div>
                                                        <div className="space_4"></div>
                                                        <div className="ee">
                                                            <div className="fj">
                                                                <ChevronDown />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="space"></div>
                                <button className="f0">
                                    Search here
                                </button>
                            </div>
                        </div>
                        <div className="link">
                            <p>Or <span style={{ textDecoration: "underline" }}><Link to="/login">Sign In</Link></span></p>
                        </div>
                    </div>
                </div>
                <div className="space_component"></div>
                <Eats_Mid />
            </div>
        </div>
    )
}

export default Eats