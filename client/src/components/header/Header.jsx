import { Helmet, HelmetProvider } from "react-helmet-async";


export default function Header() {
  return (
    <>
      <div className="header_section">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="logo">
            <a href="index.html">
              <img src="images/logo.png" />
            </a>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link" href="/home">
                  HOME
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">
                  ABOUT
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/games">
                  OUR PRODUCTS
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/games/create">
                  CREATE
                </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="/login">
                  LOGIN
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/register">
                  REGISTER
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}
