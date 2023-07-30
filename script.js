const btn = document.querySelector("button");
const main = document.querySelector(".main");

Telegram.WebApp.ready();

Telegram.WebApp.MainButton.setText('Send Data').show().onClick(function () {
  const data = "Hello"
    Telegram.WebApp.sendData(data);
    Telegram.WebApp.close();
    });


/*btn.addEventListener("click", () => {
  tele.ready();
  const data = tele.initDataUnsafe;
  const tag = document.createElement("p");
  
  // Retrieve user ID and username
  const userId = data.user.id;
  const username = data.user.username;
  
  // Display user ID and username
  tag.innerHTML = `User ID: ${userId}<br>Username: ${username}`;
  main.appendChild(tag);
  
});*/
