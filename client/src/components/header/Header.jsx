import { Link } from "react-router";
import { FaUserCircle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";

export default function Header() {
  const { email } = useAuth();
  

  return (
    <>
      <div className="header_section">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="logo">
            <Link to="/">
              <img src="/images/logo.png" />
            </Link>
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
            <ul className="navbar-nav ml-auto">
              {/* Use ml-auto for right alignment */}
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  HOME
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/devices">
                  OUR DEVICES
                </Link>
              </li>
              {email ? (
                <>
                  <li className="nav-item">                 
                    <Link className="nav-link" to="/devices/create">
                      CREATE
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/logout">
                      LOGOUT
                    </Link>
                  </li>
                  <li className="nav-item">
                    <span className="nav-link user-email">
                      <FaUserCircle style={{ marginRight: "8px" }} />
                      {email}
                    </span>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item active">
                    <Link className="nav-link" to="/login">
                      LOGIN
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/register">
                      REGISTER
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}
