const _ = (data) => {
  document.body.innerHTML += data;
}
const _url = (title) => title.toLowerCase().replace(/ /g, '_');
const getDate = () => new Date().toLocaleString('en-US', { day: 'numeric', month: 'long', year: 'numeric' });




export { _url, _, getDate };