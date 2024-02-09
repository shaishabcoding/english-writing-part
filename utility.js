const
  _ = (data) => {
    document.body.innerHTML += data;
  },
  go = (url) => {
    alert(url);
  },
  write = (datas) => {
    for (let {title,data,ui} of datas) {
      _(`<h1>${title}</h1>`);
      data.map((el,i)=>{
        _(`<a href="${ui}#${el.url}">${i + 1}. ${el.title}</p>`)
      })
    }
  }
  
export {write,_};