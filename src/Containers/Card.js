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
    .hide('slide', { direction: (left) ? 'left' : 'right' }, 700, () => {
      $('#vsapp').attr('class', 'col-sm-8 card')
        .html(card)
        .show('slide', { direction: (left) ? 'right' : 'left' }, 700);
    });
};

export default Card;
