const
  _ = (data) => {
    document.body.innerHTML += data;
  },
  _url = (title) => {
    return title.toLowerCase().replace(/ /g, '_');
  }



export { _url, _ };