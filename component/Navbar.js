import Link from "next/link";
import { withRouter } from "next/router";
function Navbar({ router }) {
  const navs = [
    { text: "Home", href: "/" },
    { text: "Experience", href: "/experience" },
    { text: "Interest", href: "/interest" },
    { text: "Project", href: "/project" },
    { text: "Contact", href: "/contact" },
  ];
  return (
    <>
      <header className="main-header">
        <nav>
          <input id="nav-toggle" type="checkbox"></input>
          <Link href="/">
            <div className="logo">AP.</div>
          </Link>
          <ul className="nav-links">
            {navs.map((nav) => (
              <li classname="nav-link">
                <Link href={nav.href}>
                  <a
                    className={`nav-a ${
                      router.pathname == nav.href ? "nav-active" : ""
                    }`}
                  >
                    {nav.text}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
          <label for="nav-toggle" className="icon-burger">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </label>
        </nav>
      </header>
      <div className="custom-shape-divider-top-1612063469">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </>
  );
}
export default withRouter(Navbar);
