import button from '../button';

const footer = (type = null) => {
  if (type === 'last') {
    return `
      ${button('btn-success btnPrev', '&lt; Back')}
      ${button('btn-success float-right btnSubmit', 'Submit')}
    `;
  } else if (type === 'first') {
    return `${button('btn-success float-right btnNext', 'Next &gt;')}`;
  } else if (type === 'return') {
    return `${button('btn-primary float-right btnReturn', 'Return to VATUSA')}`;
  }
  return `
    ${button('btn-success btnPrev', '&lt; Back')}
    ${button('btn-success float-right btnNext', 'Next &gt;')}
  `;
};

export default footer;
