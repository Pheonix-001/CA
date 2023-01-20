const Navbar = () => {
  return (
    <>
      <nav className="nav-container">
        <div className="nav-logo">Jayant</div>
        <div className="nav-links">
          <div className="nav-menu">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">Skills</a>
              </li>
              <li>
                <a href="/">Projects</a>
              </li>
              <li>
                <a href="/">Contact</a>
              </li>
            </ul>
          </div>
          <div className="nav-divider"></div>
          <div className="nav-social-links">
            <ul>
              <li>
                <a href="/">FB</a>
              </li>
              <li>
                <a href="/">Ig</a>
              </li>
              <li>
                <a href="/">Github</a>
              </li>
            </ul>
          </div>
        </div>
        <span className="nav-close-btn">
          <i className="fa-solid fa-xmark"></i>
        </span>
        <span className="nav-menu-btn">
          <i className="fa-solid fa-bars"></i>
        </span>
      </nav>
    </>
  );
};

export default Navbar;
