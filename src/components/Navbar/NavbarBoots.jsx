import { useState } from "react";
import { Link } from "react-router-dom";

function NavbarBoots() {
  const [showDrop, setShowDrop] = useState(false);

  const showDropdown = () => {
    setShowDrop(!showDrop);
  };

  return (
    <nav className="navbar">
      <ul>
        <li className="itemNav">
          <Link to="/">Home</Link>
        </li>
        <li className="itemNav">
          <Link to="/about">About</Link>
        </li>
        <li className={`container_dropdown`} onClick={showDropdown}>
          Difficulty
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
            <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />
          </svg>
          <ul className={`dropdown ${showDrop ? "showDrop" : ""}`}>
            <li>
              <Link to="/newbie">Newbie</Link>
            </li>
            <li>
              <Link to="/junior">Junior</Link>
            </li>
            <li>
              <Link to="/intermediate">Intermediate</Link>
            </li>
            <li>
              <Link to="/advanced">Advanced</Link>
            </li>
            <li>
              <Link to="/guru">Guru</Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}

export default NavbarBoots;
