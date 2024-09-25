/* eslint-disable @typescript-eslint/no-explicit-any */
import { ArrowRight, X } from "lucide-react"
import "./Mid.css"
import { Link } from "react-router-dom";

const Mid = ({ setIsOpen }: any) => {
    const handleTabClick = () => {
        setIsOpen(false);
    }

    return (
        <div className="mid">
            <div className="inner_mid">
                <section className="section tab">
                    <button onClick={handleTabClick} className="button"><Link to="/"><X /></Link></button>
                    <div className="inner_section">
                        <div className="div">
                            <div className="inner_div">
                                <div className="grid">
                                    <div className="inner_grid">
                                        <a className="link">
                                            <div className="inner_link">
                                                <h2 className="inner_link_h2"><Link to="/login">Sign up to drive & deliver </Link><span><ArrowRight /></span></h2>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="inner_grid">
                                        <a className="link">
                                            <div className="inner_link">
                                                <h2 className="inner_link_h2"><Link to="/login">Create a rider account</Link> <span><ArrowRight /></span></h2>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="inner_grid">
                                        <a className="link">
                                            <div className="inner_link">
                                                <h2 className="inner_link_h2"><Link to="/loign">Order delivery with Uber Eats</Link> <span><ArrowRight /></span></h2>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="inner_grid">
                                        <a className="link">
                                            <div className="inner_link">
                                                <h2 className="inner_link_h2"><Link to="/login">Sign up for Uber Business</Link><span><ArrowRight /></span></h2>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Mid