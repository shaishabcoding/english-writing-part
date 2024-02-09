import { _,_url } from '/utility.js';
import paragraph from '/paragraph/data.js';

const datas = [paragraph];

for (let { title, data} of datas) {
  _(`<h1>${title}</h1>`);
  data.map((el, i) => {
    _(`<a href="/${_url(title)}/#${_url(el)}">${i + 1}. ${el}</p>`)
  })
}