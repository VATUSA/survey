import button from '../button';

const YesNoCard = (question, response) => `<p>${question}</p>
  ${button(`${response === 'Yes' ? 'btn-primary' : 'btn-outline-primary'} btn-lg btn-block btnResp`, 'Yes')}
  ${button(`${response === 'No' ? 'btn-primary' : 'btn-outline-primary'} btn-lg btn-block btnResp`, 'No')}
  ${button(`${response === 'No Response' ? 'btn-primary' : 'btn-outline-primary'} btn-lg btn-block btnResp`, 'No Response')}
  `;

export default YesNoCard;
