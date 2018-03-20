import alert from '../Components/alert';

const defaultFail = (r) => {
  if (r.status === 400) {
    alert('danger', 'Malformed request');
  }
  if (r.status === 401) {
    alert('danger', 'Unauthenticated');
  }
  if (r.status === 403) {
    alert('danger', 'Forbidden');
  }
  if (r.status === 404) {
    alert('danger', 'Not found');
  }
  if (r.status === 409) {
    alert('danger', 'Conflict');
  }
  if (r.status === 500) {
    alert('danger', 'Internal server error');
  }
};

const api = (method, path, data, callback, failcallback = defaultFail) => {
  $.ajax({
    url: `${window.apiUrl}${path}`,
    method,
    data,
  })
  .done(r => callback(r))
  .fail(r => failcallback(r));
};

export default api;
