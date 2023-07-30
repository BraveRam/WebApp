const btn = document.querySelector("button")
const main = document.querySelector(".main")

const tele = window.Telegram.WebApp;

btn.addEventListener("click", ()=>{
  tele.ready()
  const data = tele.initDataUnsafe;
  const tag = document.createElement("p")
  tag.innerHTML = data;
  main.appendChild(tag)
})
