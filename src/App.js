/* App */
import "./css/styles.css";
import "./css/Nav.css";
import { useState } from "react";
// import Quotes from "./components/Quotes";
import Footer from "./components/Footer";
import Welcome from "./components/Welcome";
import Character from "./components/Character";
import Darot from "./components/Darot";
import Plan from "./components/Plan";

const appTitle = "Hollow Hallway";

const App = () => {
  // Form
  const [formData, setFormData] = useState({
    Name: "",
    Location: "",
    NavHome: true,
    NavWelcome: false,
    NavCharacter: false,
    NavDarot: false,
    NavBoards: false,
  });
  const homeValues = formData;
  const valueUpdated = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const homeClick = () => {
    setFormData({
      ...formData,
      NavHome: true,
    });
  };
  const metaDesc = document.querySelector('meta[name="description"]');
  const navigateClick = (e) => {
    // console.log("Open", e.target);
    document.title = appTitle + " | " + e.target.innerText;
    document.querySelector("#mainNav").classList.add("zoom");
    metaDesc.setAttribute("content", e.target.innerText);
    setFormData({
      ...formData,
      NavHome: false,
      NavWelcome: false,
      NavCharacter: false,
      NavDarot: false,
      [e.target.id]: true,
    });
    console.log("FormData", formData);
  };

  // Logo
  const Logo = () => {
    let logoClassName = "logo";
    let taglineClassName = "tagline";
    if (!formData.NavHome) {
      logoClassName += " print";
    }
    if (!formData.NavHome) {
      taglineClassName += " print";
    }
    return (
      <div className="lockup">
        <div className={logoClassName}>Hollow Hallway</div>
        <div className={taglineClassName}>Unlock from within.</div>
      </div>
    );
  };

  // Nav
  const Nav = () => {
    let navClassName = "nav";
    if (!formData.NavHome) {
      navClassName += " zoom";
    }
    return (
      <nav className={navClassName} id="mainNav">
        <div className="homeLogo"></div>
        <ul className="nav-items">
          <li onClick={navigateClick}>
            <div className="door">
              <div className="door-front">
                <div className="knob"></div>
              </div>
              <div
                className="door-back"
                id="NavWelcome"
                title="Hollow Hallway."
              >
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
                Planning Boards
              </div>
            </div>
          </li>
        </ul>
      </nav>
    );
  };

  // UI
  let homeClassName = "";
  if (formData.NavHome) {
    homeClassName += "home";
  }

  return (
    <div className="App">
      <Logo />
      <Nav />
      {formData.NavWelcome && <Welcome />}
      {formData.NavDarot && <Darot />}
      {formData.NavCharacter && <Character />}
      {formData.NavBoards && <Plan />}
      <Footer />
    </div>
  );

  // Original UI
  /*
  return (
    <div className="App">
      <Nav />
      <h2>Start editing to see some magic happen!</h2>
      <div>
        Your name is: {formData.Name} @ {formData.Location}
      </div>
      <form>
        <TextField
          fieldName="Name"
          className="name_field"
          onChange={valueUpdated}
        />
        <TextField fieldName="Location" onChange={valueUpdated} />
        <TextField fieldName="HandSize" onChange={valueUpdated} />
      </form>
      <DrawButton canDraw={canDraw} />
      {Hand}
    </div>
  );
  */
};

export default App;
