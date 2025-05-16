import React from "react";
import { FaXTwitter, FaMedium, FaGithub } from "react-icons/fa6";
import footerBg from "../assets/footer.png"; // correct path to background

const Footer = () => {
    return (
        <footer
            className="text-light py-5"
            style={{
                backgroundImage: `url(${footerBg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div className="container">
                <div className="row">
                    {/* Product */}
                    <div className="col-6 col-md-3 mb-4">
                        <h6 className="fw-bold">Product</h6>
                        <ul className="list-unstyled small">
                            <li>Features</li>
                            <li>Integrations</li>
                            <li>Pricing & Plans</li>
                            <li>Changelog</li>
                            <li>Our method</li>
                            <li>User policy</li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div className="col-6 col-md-3 mb-4">
                        <h6 className="fw-bold">Company</h6>
                        <ul className="list-unstyled small">
                            <li>About us</li>
                            <li>Diversity & Inclusion</li>
                            <li>Blog</li>
                            <li>Careers</li>
                            <li>Financial statements</li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div className="col-6 col-md-3 mb-4">
                        <h6 className="fw-bold">Resources</h6>
                        <ul className="list-unstyled small">
                            <li>Community</li>
                            <li>Terms of service</li>
                            <li>Report a vulnerability</li>
                        </ul>
                    </div>

                    {/* Content Library */}
                    <div className="col-6 col-md-3 mb-4">
                        <h6 className="fw-bold">Content Library</h6>
                        <ul className="list-unstyled small">
                            <li>Templates</li>
                            <li>Tutorials</li>
                            <li>Knowledge base</li>
                            <li>Learn</li>
                            <li>Cookie manager</li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Row */}
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mt-4 pt-4 border-top border-secondary">
                    <div className="d-flex align-items-center gap-3">
                        <div className="bg-primary rounded-circle p-2" style={{ width: 32, height: 32 }}></div>
                        <small>© Cruip.com · <a href="#" className="text-light text-decoration-none">Terms</a></small>
                    </div>

                    <div className="mt-3 mt-md-0 d-flex gap-3 fs-5">
                        <a href="#" className="text-light"><FaXTwitter /></a>
                        <a href="#" className="text-light"><FaMedium /></a>
                        <a href="#" className="text-light"><FaGithub /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
