import "./css/styles.css";
import "./css/Nav.css";
import { useState } from "react";
// import Quotes from "./components/Quotes";
import Darot from "./components/Darot";

const App = () => {
  // Form
  const [formData, setFormData] = useState({
    Name: "",
    Location: "",
    NavDarot: true
  });
  const valueUpdated = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Nav
  const Nav = () => {
    return (
      <nav className="nav">
        <ul className="nav-items">
          <li
            onClick={() =>
              setFormData({ ...formData, NavDarot: !formData.NavDarot })
            }
          >
            <div className="door">Darot</div>
          </li>
          <li>
            <div className="door">End</div>
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