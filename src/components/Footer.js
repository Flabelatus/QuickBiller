import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="text-center container-fluid py-5" style={{ backgroundColor: "#282c34  " }}>
            <hr />
            <div className="row">
                <div className="col mt-3">
                    <p style={{ fontWeight: 600, color: '#ccc' }}>Created by Javid Jooshesh</p>
                </div>
                <div className="col mt-3">
                    <p style={{ fontWeight: 600, color: '#ccc' }}>Contact: www.javidjooshesh.com</p>
                    <a href="!#" className=" btn" style={{ fontWeight: 600, color: '#ccc' }}>Privacy Policy and Terms & Conditions</a>
                    <br />
                </div>
                <div className="col mt-3">
                    <p style={{ fontWeight: 600, color: '#ccc' }}>Copyrights @ 2023 All rights reserved</p>
                    <a className="btn" href="!#" style={{ fontWeight: 600, color: '#ccc' }}>Contact</a>
                    <br />
                    <a href="!#" className="btn" style={{ fontWeight: 600, color: '#ccc' }}>Support</a>
                </div>
                <div className="col mt-3">
                    <p style={{ fontWeight: 600, color: '#ccc' }}>Socials</p><Link to="https://github.com/Flabelatus/woodPlatformGo/tree/master" className="fa-brands fa-github" /> <br /><i className="fa-brands fa-youtube" />
                    <br />
                    <br />
                </div>
            </div>
        </footer>
    )
}

export default Footer;