import "./css/styles.css";
import "./css/Nav.css";
import { useState } from "react";
// import Quotes from "./components/Quotes";
import Character from "./components/Character";
import Darot from "./components/Darot";

const appTitle = "Hollow Hallway";

const App = () => {
  // Form
  const [formData, setFormData] = useState({
    Name: "",
    Location: "",
    NavCharacter: false,
    NavDarot: false,
  });
  const homeValues = formData;
  const valueUpdated = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const homeClick = () => {
    document.getElementById("mainNav").classList.remove("zoom");
  };
  const navigateClick = (e) => {
    // console.log("Open", e.target);
    document.title = appTitle + " | " + e.target.innerText;
    document.getElementById("mainNav").classList.add("zoom");
    document
      .querySelector('meta[name="description"]')
      .setAttribute("content", e.target.innerText);
    setFormData({
      ...formData,
      NavWelcome: false,
      NavCharacter: false,
      NavDarot: false,
      [e.target.id]: true,
    });
    console.log("FormData", formData);
  };

  // Nav
  const Nav = () => {
    return (
      <nav className="nav" id="mainNav">
        <div className="homeLogo">Hollow Hallway</div>
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
                Come On In
              </div>
              <div className="door-mat"></div>
            </div>
          </li>
          <li onClick={navigateClick}>
            <div className="door">
              <div className="door-front">
                <div className="knob"></div>
              </div>
              <div
                className="door-back"
                id="NavCharacter"
                title="Character Designer leverages AI to identify archetypes, attributes, and references."
              >
                Character Designer
              </div>
            </div>
          </li>
          <li onClick={navigateClick}>
            <div className="door">
              <div className="door-front">
                <div className="knob"></div>
              </div>
              <div className="door-back" id="NavDarot">
                Darot Cards
              </div>
            </div>
          </li>
        </ul>
      </nav>
    );
  };

  // UI
  return (
    <div className="App">
      <Nav />
      {formData.NavDarot && <Darot />}
      {formData.NavCharacter && <Character />}
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
