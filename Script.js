// Display current time in milliseconds
const timeElement = document.getElementById("currentTime");

function updateTime() {
  timeElement.textContent = `Current Time (ms): ${Date.now()}`;
}

updateTime();
// Optional: update every second
setInterval(updateTime, 1000);
