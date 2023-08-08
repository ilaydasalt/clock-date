const timeElement = document.getElementById("time");
const greetingElement = document.getElementById("greeting");
const dateElement = document.getElementById("date");

// Kullanıcının ismini al
const userName = prompt("Enter your name");

function updateClock() {
  const currentDate = new Date();
  const currentTime = currentDate.toLocaleTimeString("tr-TR");

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const formattedDate = currentDate.toLocaleDateString("en-US", options); // ("en-US", options);"tr-TR"

  // HTML içeriğini güncelle
  greetingElement.textContent = `Hello ${userName}!`;
  timeElement.textContent = ` ${currentTime}`;
  dateElement.textContent = `${formattedDate}`;
}

updateClock();

setInterval(updateClock, 1000);
