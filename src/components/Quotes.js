import React from "react";
import "../css/Quotes.css";
import quotes from "../data/quotes.json";
import Shuffle from "../components/Shuffle";
Shuffle(quotes);

const QuoteContent = ({ quote }) => {
  return (
    <div className="quote-content">
      <i class="fa fa-quote-left fa-2x fa-pull-left"></i>
      <i class="fa fa-quote-right fa-2x fa-pull-right"></i>
      {quote}
    </div>
  );
};

const Quote = ({ quoteType, ...props }) => {
  const obj = quotes[0];
  // console.log(obj);
  return (
    <React.Fragment>
      <div className="quote">
        <div className="quote-inner">
          <QuoteContent quote={obj.quote} />
          <div className="quote-cite" title={obj.cite}>
            - {obj.cite}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Quote;
