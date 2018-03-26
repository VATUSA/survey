import button from '../button';

const Scale = (question, response, left, right) => {
  let card = `<p>${question}</p>
  <div class="row">
    <div class="col-5 offset-1">&lt; ${left}</div>
    <div class="col-5 text-right">${right} &gt;</div>
  </div>
  <div class="row">
    <div class="col-1">&nbsp;</div>`;
  let i;
  for (i = 1; i <= 5; i += 1) {
    card = `${card}<div class="col-2">${button(`${response === i ? 'btn-primary' : 'btn-outline-primary'} btn-lg btn-block btnResp`, i)}</div>`;
  }
  card = `
      ${card}
      <div class="col-1">&nbsp;</div>
    </div>
    <div class="row">
      <div class="offset-1 col-10">${button(`${response === 'No Response' ? 'btn-primary' : 'btn-outline-primary'} btn-lg btn-block btnResp`, 'No Response')}</div>
    </div>
  `;
  return card;
};

export default Scale;
