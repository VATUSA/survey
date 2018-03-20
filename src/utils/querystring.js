/* global location */

const qs = (key) => {
  const k = key.replace(/[*+?^$.\[\]{}()|\\\/]/g, '\\$&'); // escape RegEx meta chars
  const match = location.search.match(new RegExp(`[?&]${k}=([^&]+)(&|$)`));
  return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
};

export default qs;
