import "./nav.css"

const Nav = () => {
  return (
    <div className="nav">
        <div className="navContainer">
            <span className="logo">AllTun-Booking</span>
            <div className="navItems">
                <button className="navButton">Register</button>
                <button className="navButton">Login</button>
            </div>
        </div>
    </div>
  )
}

export default Nav