import { useEffect, useState } from "react";
import TextField from "./TextField";
import Deck from "./Deck";
import GamePlays from "./GamePlay";
import OpenAI from "./OpenAI";
import PlayCard from "./PlayCard";
import "../css/Darot.css";
// https://codepen.io/jsulpis/pen/VwBNoEb
// https://codepen.io/gayane-gasparyan/pen/wvxewXO

const StoryCards = () => {
  // Form
  const [formData, setFormData] = useState({
    GamePlay: 1,
    HandSize: 2,
    Instructions: true,
    Results: false,
    Ai: false,
    AiResponse: { __html: "" },
    AiPrompt: "",
    CardPrompt: "",
    UserPrompt: "",
  });
  useEffect(() => {
    let aiProps = {
      prompt: formData.CardPrompt + formData.UserPrompt,
      type: "storycards",
    };
    if (formData.Ai) {
      console.log("HERE");
      setFormData({
        ...formData,
        AiResponse: { __html: OpenAI(aiProps) },
        Prompt: true,
      });
    }
  }, [formData]);
  const closeInstructions = () => {
    setFormData({
      ...formData,
      Instructions: false,
    });
  };
  const valueUpdated = (e) => {
    console.log(e.target.name, e.target.value);
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

  // Instructions
  const Instructions = () => {
    let instructionsClass = "instructions";
    if (!formData.Instructions) {
      instructionsClass += " hide";
    }
    return (
      <div className={instructionsClass}>
        <button className="close-instructions" onClick={closeInstructions}>
          <i className="fa fa-close fa-lg"></i>
        </button>
        <h3 className="center">Instructions</h3>
        <ol>
          <li>
            <b>Observe the Theme</b>: contemplate the keyphrase on the back of
            the card
          </li>
          <li>
            <b>Flip a Card</b>: Let the name and imagery guide an underlying
            message for your story.
          </li>
          <li>
            <b>Weaving Your World</b>: Continue incorporating elements. Who are
            the characters, the environment, and the events you interact with
            from this card?
          </li>
          <li>
            <b>Go Deeper</b>: After flipping all the cards, click on{" "}
            <u>Get More Inspiration</u>
          </li>
        </ol>
      </div>
    );
  };

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
    // AI Prompt
    formData.CardPrompt += title + ", " + card.meaning + ", ";

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

  async function aiWrite() {
    let aiProps = {
      prompt: formData.CardPrompt + formData.UserPrompt,
      type: "storycards",
    };
    setFormData({
      ...formData,
      AiPrompt: formData.CardPrompt + formData.UserPrompt,
      AiResponse: { __html: "<div>" + await OpenAI(aiProps) + "</div>" },
    });
  }

  const ResultsButton = () => {
    return (
      <div className="resultsContainer">
        <p className="resultsButton">
          <button name="Results" value="1" onClick={valueUpdated}>
            <i className="fa fa-fw fa-eye"></i> Get More Inspiration
          </button>
        </p>
        <hr />
        <p>
          <textarea
            name="UserPrompt"
            id="UserPrompt"
            defaultValue={formData.UserPrompt}
            onBlur={valueUpdated}
          />
          <button name="Results" value="1" onClick={aiWrite}>
            <i className="fa fa-fw fa-pencil"></i> Write Story
          </button>
        </p>
      </div>
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

  // Loading
  const Loading = () => {
    return (
      <div className="loading">
        <h2>Loading</h2>
      </div>
    );
  };

  // Card Question
  const StoryBoard = () => {
    return (
      <div className="Darot">
        <h2>Story Cards</h2>
        <p className="tagline">Situation Exploration Role Playing Game</p>
        {formData.Instructions && <Instructions />}
        <div className="board">{Hand}</div>
        <ResultsButton />
        {formData.Results && <Results />}
        {formData.Prompt && (
          <div dangerouslySetInnerHTML={formData.AiResponse} />
        )}
      </div>
    );
  };

  // UI
  return <StoryBoard />;
};

export default StoryCards;
