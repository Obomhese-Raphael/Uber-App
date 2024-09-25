
import "./Login.css"
import google_icon from "../../assets/google_icon.webp"
import apple_icon from "../../assets/apple-icon.png"
import { QrCode } from "lucide-react"

const Login = () => {
    return (
        <div className="login">
            <div className="inner_login">
                <div className="main">
                    <div className="inner_main">
                        <div className="entry">
                            <h2>What is your phone number or email?</h2>
                            <div className="inner_entry">
                                <div className="input">
                                    <input type="text" placeholder="Enter phone number or email" id="" />
                                </div>
                                <p id="message" className="messgage"></p>
                                <div className="space"></div>
                                <button className="button"><p>Continue</p></button>
                                <div>
                                    <div className="space"></div>
                                    <div className="bottom h3">
                                        <h3>or</h3>
                                    </div>
                                    <div className="buttons">
                                        <div className="btns">
                                            <div className="buton">
                                                <button>
                                                    <div className="inner_buton">
                                                        <div className="h-space"></div>
                                                        <div className="content">
                                                            <div className="inner_content">
                                                                <div className="icon">
                                                                    <img className="img" src={google_icon} alt="" />
                                                                </div>
                                                                <div className="g-text">
                                                                    <p className="g-text_inner">
                                                                        Continue with Google
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </button>
                                            </div>
                                            <div className="buton">
                                                <button>
                                                    <div className="inner_buton">
                                                        <div className="h-space"></div>
                                                        <div className="content">
                                                            <div className="inner_content">
                                                                <div className="icon">
                                                                    <img className="img" src={apple_icon} alt="" />
                                                                </div>
                                                                <div className="g-text">
                                                                    <p className="g-text_inner">
                                                                        Continue with Apple
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </button>
                                            </div>
                                            <div className="space"></div>
                                            <div className="bottom h3">
                                                <h3>or</h3>
                                            </div>
                                            <div className="buton">
                                                <button>
                                                    <div className="inner_buton">
                                                        <div className="h-space"></div>
                                                        <div className="content">
                                                            <div className="inner_content">
                                                                <div className="icon">
                                                                    <QrCode />
                                                                </div>
                                                                <div className="g-text">
                                                                    <p className="g-text_inner">
                                                                        Login with QR-Code
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </button>
                                            </div>

                                        </div>
                                        <div></div>
                                        <div className="space"></div>
                                        <div className="pro">
                                            <p>By proceeding, you consent to get calls, WhatsApp or SMS/RCS messages, including by automated means, from Uber and its affiliates to the number provided.</p>
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login