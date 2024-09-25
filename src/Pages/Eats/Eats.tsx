import { ChevronDown, ClockIcon, MapPin } from "lucide-react";
import "./Eats.css";
import Eats_Mid from "../../Components/Eats_Mid/Eats_Mid";

const Eats = () => {
    return (
        <div className="eats">
            <div className="top">
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
                            <p>Or <span style={{ textDecoration: "underline" }}>Sign In</span></p>
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