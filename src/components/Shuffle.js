const Shuffle = (deck) => {
  console.log("Deck Size", deck.length);
  for (var i = deck.length - 1; i > 0; i--) {
    const swapIndex = Math.floor(Math.random() * (i + 1));
    const currentCard = deck[i];
    const cardToSwap = deck[swapIndex];
    deck[i] = cardToSwap;
    deck[swapIndex] = currentCard;
  }
  return deck;
};
export default Shuffle;
