const alert = (type, message) => {
  $('#vsapp').attr('class', `col-xs-12 col-md-8 card alert alert-${type}`)
    .attr('role', type).html(message);
};

export default alert;
