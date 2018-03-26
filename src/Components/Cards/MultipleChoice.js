import button from '../button';

const MultipleChoice = (question, choices, response) => {
  let card = `<p>${question}</p>`;
  let i;
  for (i = 0; i < choices.length; i += 1) {
    card = `${card}${button(`${response === choices[i] ? 'btn-primary' : 'btn-outline-primary'} btn-lg btn-block btnResp`, choices[i])}`;
  }
  card = `${card}${button(`${response === 'No Response' ? 'btn-primary' : 'btn-outline-primary'} btn-lg btn-block btnResp`, 'No Response')}`;
  return card;
};

export default MultipleChoice;
