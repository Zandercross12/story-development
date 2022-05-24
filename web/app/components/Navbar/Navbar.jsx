import { NavLink } from "remix";

export const Navbar = () => {
  const toggleNav = () => {
    const sidenav = document.getElementById("nav-list");
    const background = document.getElementById("nav-background");

    if (sidenav.classList.contains("cooldown")) {
      return;
    }

    if (sidenav.classList.contains("nav_closed")) {
      sidenav.classList.remove("nav_closed");
      background.style.display = "block";
      setTimeout(() => {
        background.style.opacity = "50%";
        background.style.zIndex = "1";
      }, 100);
    } else {
      sidenav.classList.add("nav_closed");
      setTimeout(() => {
        background.style.display = "none";
        background.style.zIndex = "-1";
      }, 400);
      background.style.opacity = "0";
    }
    sidenav.classList.add("cooldown");
    setTimeout(() => {
      sidenav.classList.remove("cooldown");
    }, 400);
  };

  return (
    <header>
      <div
        id="nav-background"
        className="dark_background"
        onClick={toggleNav}
      ></div>
      <div className="nav_space"></div>
      <nav>
        <div className="nav_top">
          <button onClick={toggleNav}>
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>
        <ul id="nav-list" className="nav_list nav_closed">
          <li className="nav_list_item">
            <NavLink to="/">
              <i className="fa-solid fa-house"></i> Home
            </NavLink>
          </li>
          <li className="nav_list_item">
            <NavLink to="/read">
              <i className="fa-solid fa-book"></i> Read
            </NavLink>
          </li>
          <li className="nav_list_item">
            <NavLink to="/characters">
              <i className="fa-solid fa-person"></i> Characters
            </NavLink>
          </li>
          <li className="nav_list_item">
            <NavLink to="/locations">
              <i className="fa-solid fa-location-dot"></i> Locations
            </NavLink>
          </li>
          <li className="nav_list_item">
            <NavLink to="/story">
              <i className="fa-solid fa-pen"></i> Story
            </NavLink>
          </li>
          <li className="nav_list_item">
            <NavLink to="/magic">
              <i className="fa-solid fa-hat-wizard"></i> Magic
            </NavLink>
          </li>
          <li className="nav_list_item">
            <NavLink to="/worldbuilding">
              <i className="fa-solid fa-earth-americas"></i> World Building
            </NavLink>
          </li>
          <li className="nav_list_item">
            <NavLink to="/ideas">
              <i class="fa-solid fa-lightbulb"></i> Ideas
            </NavLink>
          </li>
          <li className="nav_list_item">
            <NavLink to="/about">
              <i className="fa-solid fa-address-card"></i> About
            </NavLink>
          </li>
          <li className="nav_list_item">
            <NavLink to="/contact">
              <i className="fa-solid fa-address-book"></i> Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
