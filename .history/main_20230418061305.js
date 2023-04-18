import "./style.css"
import javascriptLogo from "/javascript.svg"
import viteLogo from "/vite.svg"
import { setupCounter } from "./counter.js"

document.querySelector("#app").innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello people's welcome to my site!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
  <h5>This is going to be fun.</h5>
  </div>
`

setupCounter(document.querySelector("#counter"))