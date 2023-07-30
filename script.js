const btn = document.querySelector("button");
const main = document.querySelector(".main");

Telegram.WebApp.ready();

/*Telegram.WebApp.MainButton.setText('Send Data').show().onClick(function () {
  const data = "Hello"
    Telegram.WebApp.sendData(data);
    Telegram.WebApp.close();
    });*/


btn.addEventListener("click", () => {
  
  const data = Telegram.WebApp.initDataUnsafe;
  const userId = data.user.id;
  const username = data.user.username;
  Telegram.WebApp.sendData(username);
  Telegram.WebApp.close();
  /*const tag = document.createElement("p");
  
  */
});
