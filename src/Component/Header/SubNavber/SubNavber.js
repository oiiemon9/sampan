import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './SubNavber.css'; // Style as needed.
import { Link } from 'react-router-dom';
function Navbar() {
  const [show, setShow] = useState(false); // Navbar visibility control
  const [firstScroll, setFirstScroll] = useState(false); // Track user interaction
  const [lastScrollY, setLastScrollY] = useState(0);
  const threshold = 100; // Pixels from the top where the navbar will start hiding

  const controlNavbar = () => {
    if (!firstScroll) return; // If no interaction, keep navbar hidden

    if (window.scrollY < threshold) {
      // Hide if near the top
      setShow(false);
    } else if (window.scrollY > lastScrollY) {
      // Hide on scroll down
      setShow(false);
    } else {
      // Show on scroll up
      setShow(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!firstScroll && window.scrollY > 0) {
        // First interaction detected
        setFirstScroll(true);
        setShow(true); // Allow navbar to start showing/hiding
      }
      controlNavbar();
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [firstScroll, lastScrollY]);

  return (
    <div>
      <motion.nav
        animate={{
          y: show ? 0 : -100,
        }} // Adjust Y axis for hiding/revealing
        transition={{
          duration: 0.3,
          type: 'spring',
          stiffness: 260,
          damping: 20,
        }}
        className="fixed top-0 w-full"
        style={{ display: firstScroll ? 'flex' : 'none' }} // Control visibility
      >
        <motion.header className="subNavberwidth p-4">
          <div className="navbar rounded-full headerBorder backdrop-blur-xl p-0 ps-1 pe-1">
            <div className="navbar-start">
              <div className="dropdown">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost lg:hidden"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                >
                  <li>
                    <Link to="/about">about</Link>
                  </li>
                  <li>
                    <a>Parent</a>
                    <ul className="p-2">
                      <li>
                        <a>Submenu 1</a>
                      </li>
                      <li>
                        <a>Submenu 2</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a>Item 3</a>
                  </li>
                </ul>
              </div>
              <Link
                to="./"
                className="p-2 text-xl italic font-bold cursor-pointer"
              >
                Sampan
              </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">
                <li>
                  <Link to="/about">about</Link>
                </li>
                <li>
                  <details>
                    <summary>Parent</summary>
                    <ul className="p-2">
                      <li>
                        <a>Submenu 1</a>
                      </li>
                      <li>
                        <a>Submenu 2</a>
                      </li>
                    </ul>
                  </details>
                </li>
                <li>
                  <a>Item 3</a>
                </li>
              </ul>
            </div>
            <div className="navbar-end">
              <a className="">Button</a>
            </div>
          </div>
        </motion.header>
      </motion.nav>
    </div>
  );
}

export default Navbar;
