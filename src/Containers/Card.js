const Card = (title = null, body = null, footer = null, left = true) => {
  let card = '';
  if (title !== null) {
    card = `
      <div class="card-header">
        ${title}
      </div>
    `;
  }
  card = `
  ${card}
  <div class="card-body">
    ${body}
  </div>`;
  if (footer !== null) {
    card = `
    ${card}
    <div class="card-footer">
      ${footer}
    </div>
    `;
  }

  $('#vsapp')
    .hide('slide', { direction: (left) ? 'left' : 'right' }, 400, () => {
      $('#vsapp').attr('class', 'col-xs-12 col-md-8 card')
        .html(card)
        .show('slide', { direction: (left) ? 'right' : 'left' }, 400);
    });
};

export default Card;
