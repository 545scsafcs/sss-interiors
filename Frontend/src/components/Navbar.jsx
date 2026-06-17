import logo from "../assets/logo.jpg";
function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
  <img src={logo} alt="SSS Interiors" />
  <h2>SSS Interiors</h2>
</div>

      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;