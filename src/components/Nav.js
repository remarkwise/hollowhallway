/*
import "../css/Nav.css";
const Nav = ({ page = false, navigateClick }) => {
  console.log("PAGE", page);
  let logoClassName = "homeLogo";
  let navClassName = "nav";
  if (page) {
    navClassName += " zoom";
  } else {
    logoClassName += " print";
  }
  return (
    <nav className={navClassName} id="mainNav">
      <div className={logoClassName}>
        Hollow
        <br />
        Hallway
      </div>
      <ul className="nav-items">
        <li onClick={navigateClick}>
          <div className="door">
            <div className="door-front">
              <div className="knob"></div>
            </div>
            <div className="door-back" id="NavWelcome" title="Hollow Hallway.">
              Come On In...
            </div>
            <div className="door-mat"></div>
          </div>
        </li>
        <li onClick={navigateClick}>
          <div className="door">
            <div className="door-front">
              <div className="knob"></div>
            </div>
            <div className="door-back door-back-trans-2" id="NavDarot">
              <img src="/img/meditation.png" />
              <br />
              Story Cards
            </div>
          </div>
        </li>
        <li onClick={navigateClick}>
          <div className="door">
            <div className="door-front">
              <div className="knob"></div>
            </div>
            <div
              className="door-back door-back-trans-1"
              id="NavCharacter"
              title="Archetype Explorer leverages AI to design characters, attributes, and references."
            >
              Archetype Explorer
            </div>
          </div>
        </li>
        <li onClick={navigateClick}>
          <div className="door">
            <div className="door-front">
              <div className="knob"></div>
            </div>
            <div className="door-back door-back-trans-3" id="NavBoards">
              Planning Boards &amp; Tools
            </div>
          </div>
        </li>
      </ul>
    </nav>
  );
};
export default Nav;
*/
