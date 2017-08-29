import "whatwg-fetch"
import 'Styles/common'
import React from 'react'
import {render} from 'react-dom'
import Root from './containers/routes'

const app = document.createElement('div');
document.body.appendChild(app);
render(<Root />, app);
let rem,window_w;
function resetREM(){
  window_w = window.innerWidth;
  rem = window_w / 750 * 100;
  document.getElementsByTagName('html')[0].style.fontSize = rem + 'px';
}
window.onload = window.onresize = resetREM();