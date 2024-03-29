import { Link } from "react-router-dom"
import "./nav.css"

const Nav = () => {
  return (
    <div className="nav">
        <div className="navContainer">
            <span className="logo"><Link to="/" style={{textDecoration: "none", color:"inherit"}}>TheKnower-Booking</Link></span>
            <div className="navItems">
                <button className="navButton">Register</button>
                <button className="navButton">Login</button>
            </div>
        </div>
    </div>
  )
}

export default Nav