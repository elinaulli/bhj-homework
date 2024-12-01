const timer = document.getElementById("timer");
console.log(timer.textContent);
let timerFind = +timer.textContent;

let timerId = setInterval(() => {
	timerFind--;
	if (timerFind == 0) {
		alert("Вы победили в конкурсе!");
		clearInterval(timerId);
	}
	return timer.textContent = timerFind;
}, 1000);