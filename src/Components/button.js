const button = (cl, name, id = null) => `
  <button class="btn ${cl}"${(id !== null) ? ` id="${id}"` : ''}>${name}</button>
`;

export default button;
