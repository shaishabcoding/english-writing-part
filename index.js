import { _,_url } from '/utility.js';
import paragraph from '/paragraph/data.js';

const datas = [paragraph];

for (let { title, data} of datas) {
  _(`<h1 class="boujee-text">${title}</h1>\n`);
  data.map((el, i) => {
    _(`<a href="/${_url(title)}/#${_url(el)}">${i + 1}. ${el}</a><br>\n`)
  })
}