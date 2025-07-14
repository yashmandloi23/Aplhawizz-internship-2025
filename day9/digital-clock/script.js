function clockFun() {
  const now = new Date();
  let hrs = String(now.getHours()).padStart(2, "0");
  let min = String(now.getMinutes()).padStart(2, "0");
  let sec = String(now.getSeconds()).padStart(2, "0");

  document.getElementById("hrs").innerHTML = `${hrs}`;
  document.getElementById("min").innerHTML = `${min}`;
  document.getElementById("sec").innerHTML = `${sec}`;
}

let intervalId = setInterval(clockFun, 1000);

let stop = document.querySelector(".stop");
stop.addEventListener("click", () => {
  clearInterval(intervalId);
});
let start = document.querySelector(".start");
start.addEventListener("click", () => {
  intervalId = setInterval(clockFun, 1000);
});
