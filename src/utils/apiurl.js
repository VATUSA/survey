const genApiUrl = () => {
  const hostname = window.location.hostname;
  let api = 'https://api.vatusa.net';

  if (/vatusa\.net$/.test(hostname)) {
    api = 'https://api.vatusa.net';
  }
  if (/localhost$/.test(hostname)) {
    api = 'http://api.vatusa.devel';
  }
  if (/\.devel$/.test(hostname)) {
    api = 'http://api.dev.vatusa.net';
  }

  return api;
};

export default genApiUrl;
