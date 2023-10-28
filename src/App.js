import "./css/styles.css";
import "./css/Nav.css";
import { useState } from "react";
// import Quotes from "./components/Quotes";
import Character from "./components/Character";
import Darot from "./components/Darot";

const App = () => {
  // Form
  const [formData, setFormData] = useState({
    Name: "",
    Location: "",
    NavCharacter: false,
    NavDarot: false,
  });
  const valueUpdated = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const navigateClick = (e) => {
    console.log("Open", e.target.id);
    setFormData({
      ...formData,
      NavCharacter: false,
      NavDarot: false,
      [e.target.id]: true,
    });
    console.log("FormData", formData);
  };

  // Nav
  const Nav = () => {
    return (
      <nav className="nav">
        <ul className="nav-items">
          <li onClick={navigateClick}>
            <div className="door">
              <div className="door-front">
                <div className="knob"></div>
              </div>
              <div className="door-back" id="NavCharacter">
                Character
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
