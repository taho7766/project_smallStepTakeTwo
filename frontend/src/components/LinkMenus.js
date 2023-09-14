import { useLocation, Link } from "react-router-dom";
import "../assets/css/LinkMenus.css";

function LinkMenus() {
    const location = useLocation();

    const isHomePage = location.pathname === '/home-page';

    return (
        <div className={isHomePage ? "home-menu-container" : "non-home-menu-container"}>
                <Link to="/bio" className="custom-link">Bio</Link>
                <Link to="/showcase" className="custom-link">Showcase</Link>
                <Link to="/contact" className="custom-link">Contact</Link>
        </div>
    )
}

export default LinkMenus;