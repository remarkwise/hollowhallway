import { useState } from "react";
import TextField from "./TextField";
import Deck from "./Deck";
import GamePlays from "./GamePlay";
import PlayCard from "./PlayCard";
import "../css/Darot.css";
// https://codepen.io/jsulpis/pen/VwBNoEb
// https://codepen.io/gayane-gasparyan/pen/wvxewXO

const Darot = () => {
  // Form
  const [formData, setFormData] = useState({
    GamePlay: 1,
    HandSize: 2,
    Results: false,
  });
  const valueUpdated = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Game Format
  let cardCursor = 0;
  let resultCursor = 0;
  let GamePlay;
  if (
    GamePlays[formData.GamePlay] !== undefined &&
    GamePlays[formData.GamePlay].length > 0
  ) {
    formData.HandSize = GamePlays[formData.GamePlay].length;
    /* canDraw = false; */
    cardCursor = 0;
    GamePlay = GamePlays[formData.GamePlay];
  }

  // Card Question
  const CardQuestion = (question) => {
    return (
      <div className="explanation-question">
        <br />
        <i className="question">{question}</i>
      </div>
    );
  };

  // Card Quote
  const CardQuoteContent = (quote, quoteSource) => {
    return (
      <div className="explanation-quote">
        <br />
        <div className="quote-content">
          <i className="fa fa-quote-left fa-2x fa-pull-left"></i>
          <i className="fa fa-quote-right fa-2x fa-pull-right"></i>
          {quote}
        </div>
        <br />- <i>{quoteSource}</i>
      </div>
    );
  };

  // Explanation
  const Explanations = Deck.slice(0, formData.HandSize).map((card, id) => {
    // console.log(card);
    if (GamePlays[formData.GamePlay] === undefined) {
      return;
    }
    let title = card.name;
    if (title === "") {
      title = card.tarotCard;
    }
    let question = "";
    if (card.question !== "") {
      question = CardQuestion(card.question);
    }
    let quote = "";
    if (card.quote !== "") {
      quote = CardQuoteContent(card.quote, card.quoteSource);
    }
    return (
      <li className="explanation" key={id}>
        <a href={card.img} target="_blank">
          <img src={card.img} />
        </a>
        <b className="text-lg">{title}</b> - {card.meaning}
        <br />
        <span className="subtle">
          <b>{GamePlay[id].statement}: </b>
          {GamePlay[id].label} {card.lifeExamples}.
        </span>
        {question}
        {quote}
      </li>
    );
  });

  // Hand
  const Hand = Deck.slice(0, formData.HandSize).map((card, id) => {
    // console.log(card);
    if (GamePlays[formData.GamePlay] === undefined) {
      return;
    }
    let cardType = "Back";
    cardType = GamePlay[cardCursor].statement;
    cardCursor++;
    return <PlayCard cardType={cardType} key={id} obj={card} />;
  });

  const ResultsButton = () => {
    return (
      <p className="resultsButton">
        <button name="Results" value="1" onClick={valueUpdated}>
          <i className="fa fa-fw fa-eye"></i> Show Results
        </button>
      </p>
    );
  };

  const Results = () => {
    return (
      <div className="resultsContainer">
        {" "}
        <h3 className="results">Your Results</h3>
        <div className="expectations">
          <ul>
            {Explanations}
            <li className="text-center">
              Thank you for playing in the Hollow Hallway
            </li>
          </ul>
        </div>
        <form className="controls">
          <TextField fieldName="GamePlay" onChange={valueUpdated} />
        </form>
      </div>
    );
  };

  // Card Question
  const DarotBoard = () => {
    return (
      <div className="Darot">
        <h2>Story Cards</h2>
        <p className="tagline">Situation Exploration Role Playing Game</p>
        <div className="board">{Hand}</div>
        <ResultsButton />
        {formData.Results && <Results />}
      </div>
    );
  };

  // UI
  return <DarotBoard />;
};

export default Darot;
