const alert = (type, message) => {
  $('#vsapp').attr('class', `col-sm-8 alert alert-${type}`)
    .attr('role', type).html(message);
};

export default alert;
