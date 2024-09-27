import "../../Pages/Eats/Eats.css"
import img_1 from "../../assets/img_1.webp"
import img_2 from "../../assets/img_2.webp"
import img_3 from "../../assets/img_3.webp"
import "./Eats_Mid.css"
import map from "../../assets/2024-09-24.png"
import apple_icon from "../../assets/apple-icon.png"

const Eats_Mid = () => {
    return (
        <div className="eats_mid">

            <div className="ev">
                <div className="al">
                    <div className="ma">
                        <div className="ac">
                            <img src="https://www.ubereats.com/_static/31ee382bd0e6ed84.svg" className="ex" />
                            <div className="spacer _16"></div>
                            <p className="fm">There's more to the iPhone app.</p>
                        </div>
                        <a href="">
                            <a href="https://play.google.com/store/apps/details?id=com.ubercab.eats&hl=en">
                                <button className="btt">
                                    <div className="al">
                                        <a style={{ display: "flex", alignItems: "center", cursor: "pointer", width: "100%" }} href="">
                                            <img className="img" src={apple_icon} alt="" />
                                            <div className="spacer _8"></div>
                                            Get the app
                                        </a>
                                    </div>
                                </button>
                            </a>
                        </a>
                    </div>
                </div>
                <div className="ek cd"></div>
                <div className="ew">
                    <a>
                        <img className="f7" src="https://www.ubereats.com/_static/88d55f7112efe55f.webp" />
                        <p className="bm">Feed your employees</p>
                        <p className="bn">Create a business account</p>
                    </a>
                    <div className="ek dg"></div>
                    <a>
                        <img className="f7" src="https://www.ubereats.com/_static/711d51ca1b458931.webp" />
                        <p className="bm">Our restaurant, delivered</p>
                        <p className="bn">Add your restaurant</p>
                    </a>
                    <div className="ek dg"></div>
                    <a>
                        <img className="f7" src="https://www.ubereats.com/_static/16522a701585873b.webp" />
                        <p className="bm">Deliver with Uber Eats</p>
                        <p className="bn">Sign up to deliver</p>
                    </a>
                </div>
                <div className="ek cd"></div>
                <div className="eb">
                    <h2 className="bk">Cities near me</h2>
                    <div className="lazy">
                        <div className="hk">
                            <div className="hl">
                                <div className="ae">
                                    <div className="ti">
                                        <img className="img" src={map} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="gh">
                        <div className="go gp">
                            <a>
                                <span className="bq">Alberquerque</span>
                            </a>
                        </div>
                        <div className="go gp">
                            <a>
                                <span className="bq">Concord</span>
                            </a>
                        </div>
                        <div className="go gp">
                            <a>
                                <span className="bq">Houston</span>
                            </a>
                        </div>
                        <div className="go gp">
                            <a>
                                <span className="bq">Indianaoplis</span>
                            </a>
                        </div>
                        <div className="go gp">
                            <a>
                                <span className="bq">Milwaukee</span>
                            </a>
                        </div>
                        <div className="go gp">
                            <a>
                                <span className="bq">Mesa</span>
                            </a>
                        </div>
                        <div className="go gp">
                            <a>
                                <span className="bq">Nashville</span>
                            </a>
                        </div>
                        <div className="go gp">
                            <a>
                                <span className="bq">Oklahoma City</span>
                            </a>
                        </div>
                        <div className="go gp">
                            <a>
                                <span className="bq">Providence</span>
                            </a>
                        </div>
                        <div className="go gp">
                            <a>
                                <span className="bq">Queens</span>
                            </a>
                        </div>
                        <div className="go gp">
                            <a>
                                <span className="bq">Tuscon</span>
                            </a>
                        </div>
                        <div className="go gp">
                            <a>
                                <span className="bq">West Hollywood</span>
                            </a>
                        </div>
                    </div>
                    <div className="ek eh"></div>
                    <a className="b1">View all 500+ cities</a>
                </div>
                <div className="ek cd"></div>
                <div className="ci">
                    <h2 className="cw">Countries with Uber Eats</h2>
                    <div className="gh">
                        <div className="go gp">
                            <a>
                                <span className="sp">Austrialia</span>
                            </a>
                        </div>
                        <div className="go gp">
                            <a>
                                <span className="sp">Belgium</span>
                            </a>
                        </div>
                        <div className="go gp">
                            <a>
                                <span className="sp">Canada</span>
                            </a>
                        </div>
                        <div className="go gp">
                            <a>
                                <span className="sp">Chile</span>
                            </a>
                        </div>
                        <div className="go gp">
                            <a>
                                <span className="sp">Costa Rica</span>
                            </a>
                        </div>
                        <div className="go gp">
                            <a>
                                <span className="sp">Dominican Republic</span>
                            </a>
                        </div>
                        <div className="go gp">
                            <a>
                                <span className="sp">Ecuador</span>
                            </a>
                        </div>
                        <div className="go gp">
                            <a>
                                <span className="sp">El Salvador</span>
                            </a>
                        </div>
                        <div className="go gp">
                            <a>
                                <span className="sp">France</span>
                            </a>
                        </div>
                        <div className="go gp">
                            <a>
                                <span className="sp">Germany</span>
                            </a>
                        </div>
                        <div className="go gp">
                            <a>
                                <span className="sp">Guatemala</span>
                            </a>
                        </div>
                        <div className="go gp">
                            <a>
                                <span className="sp">Ireland</span>
                            </a>
                        </div>
                        <div className="go gp">
                            <a>
                                <span className="sp">Italy</span>
                            </a>
                        </div>
                        <div className="go gp">
                            <a>
                                <span className="sp">Japan</span>
                            </a>
                        </div>
                        <div className="go gp">
                            <a>
                                <span className="sp">Kenya</span>
                            </a>
                        </div>
                        <div className="go gp">
                            <a>
                                <span className="sp">Luxembourg</span>
                            </a>
                        </div>
                        <div className="go gp">
                            <a>
                                <span className="sp">Mexico</span>
                            </a>
                        </div>
                        <div className="go gp">
                            <a>
                                <span className="sp">Netherlands</span>
                            </a>
                        </div>
                        <div className="go gp">
                            <a>
                                <span className="sp">New Zealand</span>
                            </a>
                        </div>
                        <div className="go gp">
                            <a>
                                <span className="sp">Panama</span>
                            </a>
                        </div>
                        <div className="go gp">
                            <a>
                                <span className="sp">Poland</span>
                            </a>
                        </div>
                        <div className="go gp">
                            <a>
                                <span className="sp">Portugal</span>
                            </a>
                        </div>
                        <div className="go gp">
                            <a>
                                <span className="sp">South Africa</span>
                            </a>
                        </div>
                        <div className="go gp">
                            <a>
                                <span className="sp">Spain</span>
                            </a>
                        </div>
                        <div className="go gp">
                            <a>
                                <span className="sp">Sri Lanka</span>
                            </a>
                        </div>
                        <div className="go gp">
                            <a>
                                <span className="sp">Sweden</span>
                            </a>
                        </div>
                        <div className="go gp">
                            <a>
                                <span className="sp">Austrialia</span>
                            </a>
                        </div>
                        <div className="go gp">
                            <a>
                                <span className="sp">Taiwan (ROC)</span>
                            </a>
                        </div>
                        <div className="go gp">
                            <a>
                                <span className="sp">United Kingdom</span>
                            </a>
                        </div>
                        <div className="go gp">
                            <a>
                                <span className="sp">United States</span>
                            </a>
                        </div>
                    </div>
                    <div className="ek eh"></div>
                    <a className="by">View all Countries</a>
                </div>
            </div>
            <div className="bh">
                <div className="ei">
                    <a href="" className="cp">
                        <div className="ap">
                            <div className="lw">
                                <img className="as" src={img_1} alt="" />
                            </div>
                            <p className="bk">Feed your Employees</p>
                            <p className="kb">Create a business account</p>
                        </div>
                    </a>
                </div>
                <div className="ei">
                    <a href="" className="cp">
                        <div className="ap">
                            <div className="lw">
                                <img className="as" src={img_2} alt="" />
                            </div>
                            <p className="bk">Your restaurant, delivered</p>
                            <p className="kb">Add your restaurant</p>
                        </div>
                    </a>
                </div>
                <div className="ei">
                    <a href="" className="cp">
                        <div className="ap">
                            <div className="lw">
                                <img className="as" src={img_3} alt="" />
                            </div>
                            <p className="bk">Deliver with Uber Eats</p>
                            <p className="kb">Sign up to deliver</p>
                        </div>
                    </a>
                </div>
            </div>
            <div className="space_16"></div>
            <div className="mp">
                <div className="al">
                    <h2 className="cnm">Cities near me</h2>
                    <a href="" className="vac">View all 500+ cities</a>
                </div>
                <div className="lazy">
                    <div className="ij">
                        <div className="bu">
                            <div className="wrapper">
                                <img className="img" src={map} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="i0">
                    <div className="i7">
                        <a href="">
                            <span className="br">Akron</span>
                        </a>
                    </div>
                    <div className="i7">
                        <a href="">
                            <span className="br">Albuquerque</span>
                        </a>
                    </div>
                    <div className="i7">
                        <a href="">
                            <span className="br">Bridgeport</span>
                        </a>
                    </div>
                    <div className="i7">
                        <a href="">
                            <span className="br">Concord</span>
                        </a>
                    </div>
                    <div className="i7">
                        <a href="">
                            <span className="br">Dayton</span>
                        </a>
                    </div>
                    <div className="i7">
                        <a href="">
                            <span className="br">El Paso</span>
                        </a>
                    </div>
                    <div className="i7">
                        <a href="">
                            <span className="br">Hatford</span>
                        </a>
                    </div>
                    <div className="i7">
                        <a href="">
                            <span className="br">Houston</span>
                        </a>
                    </div>
                    <div className="i7">
                        <a href="">
                            <span className="br">Indianapolis</span>
                        </a>
                    </div>
                    <div className="i7">
                        <a href="">
                            <span className="br">McAllen</span>
                        </a>
                    </div>
                    <div className="i7">
                        <a href="">
                            <span className="br">Mesa</span>
                        </a>
                    </div>
                    <div className="i7">
                        <a href="">
                            <span className="br">Milwaukee</span>
                        </a>
                    </div>
                    <div className="i7">
                        <a href="">
                            <span className="br">Nashville</span>
                        </a>
                    </div>
                    <div className="i7">
                        <a href="">
                            <span className="br">New Orleans</span>
                        </a>
                    </div>
                    <div className="i7">
                        <a href="">
                            <span className="br">Oklahoma City</span>
                        </a>
                    </div>
                    <div className="i7">
                        <a href="">
                            <span className="br">Ohama</span>
                        </a>
                    </div>
                    <div className="i7">
                        <a href="">
                            <span className="br">Orlando</span>
                        </a>
                    </div>
                    <div className="i7">
                        <a href="">
                            <span className="br">Palm Bay</span>
                        </a>
                    </div>
                    <div className="i7">
                        <a href="">
                            <span className="br">Providence</span>
                        </a>
                    </div>
                    <div className="i7">
                        <a href="">
                            <span className="br">Queens</span>
                        </a>
                    </div>
                    <div className="i7">
                        <a href="">
                            <span className="br">San Antiono</span>
                        </a>
                    </div>
                    <div className="i7">
                        <a href="">
                            <span className="br">Stony Brook</span>
                        </a>
                    </div>
                    <div className="i7">
                        <a href="">
                            <span className="br">Tuscany</span>
                        </a>
                    </div>
                    <div className="i7">
                        <a href="">
                            <span className="br">West Hollywood</span>
                        </a>
                    </div>
                </div>
            </div>
            <hr style={{ width: "100%" }} />
            <div className="space_16"></div>
            <div className="mp mps">
                <div className="bc al">
                    <h2 className="cnm">Countries with Uber Eats </h2>
                    <a className="vac" href="">View all Countries</a>
                </div>
                <div className="i0 ii">
                    <div className="i7">
                        <a href="">
                            <span className="br">United States</span>
                        </a>
                    </div>
                    <div className="i7">
                        <a href="">
                            <span className="br">Canada</span>
                        </a>
                    </div>
                    <div className="i7">
                        <a href="">
                            <span className="br">United Kingdom</span>
                        </a>
                    </div>
                    <div className="i7">
                        <a href="">
                            <span className="br">Australia</span>
                        </a>
                    </div>
                    <div className="i7">
                        <a href="">
                            <span className="br">Japan</span>
                        </a>
                    </div>
                    <div className="i7">
                        <a href="">
                            <span className="br">Mexico</span>
                        </a>
                    </div>
                    <div className="i7">
                        <a href="">
                            <span className="br">France</span>
                        </a>
                    </div>
                    <div className="i7">
                        <a href="">
                            <span className="br">Germany</span>
                        </a>
                    </div>
                    <div className="i7">
                        <a href="">
                            <span className="br">Spain</span>
                        </a>
                    </div>
                    <div className="i7">
                        <a href="">
                            <span className="br">Nrtherlands</span>
                        </a>
                    </div>
                    <div className="i7">
                        <a href="">
                            <span className="br">Brazil</span>
                        </a>
                    </div>
                    <div className="i7">
                        <a href="">
                            <span className="br">South Africa</span>
                        </a>
                    </div>
                    <div className="i7">
                        <a href="">
                            <span className="br">India</span>
                        </a>
                    </div>
                    <div className="i7">
                        <a href="">
                            <span className="br">Italy</span>
                        </a>
                    </div>
                    <div className="i7">
                        <a href="">
                            <span className="br">Chile</span>
                        </a>
                    </div>
                    <div className="i7">
                        <a href="">
                            <span className="br">Belgium</span>
                        </a>
                    </div>
                    <div className="i7">
                        <a href="">
                            <span className="br">Portugal</span>
                        </a>
                    </div>
                    <div className="i7">
                        <a href="">
                            <span className="br">New Zealand</span>
                        </a>
                    </div>
                    <div className="i7">
                        <a href="">
                            <span className="br">Taiwan</span>
                        </a>
                    </div>
                    <div className="i7">
                        <a href="">
                            <span className="br">Singapore</span>
                        </a>
                    </div>
                    <div className="i7">
                        <a href="">
                            <span className="br">Sweden</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Eats_Mid