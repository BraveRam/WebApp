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
  
  const botToken = "6464751970:AAFfVZYceyuZV3gExwPELbnCwvKZtx1wdJw";
const chatId = userId;
const messageText = "Hello, world!";

fetch(`https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${messageText}`)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log(error));

  //const username = data.user.username;
  //Telegram.WebApp.sendData("Hello");
  //Telegram.WebApp.close();
  //const tag = document.createElement("p");
  //tag.innerHTML = data.user.username;
  //main.appendChild(tag);
  
});
