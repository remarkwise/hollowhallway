import React from "react";
import { useState } from "react";
import "../css/PlayCard.css";

const PlayCardHead = ({ title }) => {
  return <div className="play-card-title">{title}</div>;
};

let PlayCardCount = 0;
const PlayCard = ({ cardType, ...props }) => {
  const obj = props.obj;
  const [isActive, setIsActive] = useState(false);
  const handleClick = (event) => {
    setIsActive((current) => !current);
  };
  let title = obj.name;
  if (title === "") {
    title = obj.tarotCard;
  }
  if (!obj.img) {
    obj.img = "";
  }
  let randPick = Math.floor(Math.random() * 10);
  let reverse = false;
  if (randPick > 5) {
    // reverse = true;
  }
  PlayCardCount++;
  // key={_.uniqueId()}
  // console.log("PlayCard", obj);
  return (
    <React.Fragment key={obj.id}>
      <div
        className={isActive ? "play-card flip" : "play-card"}
        onClick={handleClick}
      >
        <div className="play-card-inner">
          <div className="play-card-front">
            <div className="play-card-front-title">{cardType}</div>
          </div>
          <div
            className={reverse ? "play-card-back reverse" : "play-card-back"}
            style={{ backgroundImage: "url(" + obj.img + ")" }}
          >
            <PlayCardHead title={title} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default PlayCard;
