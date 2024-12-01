const dead = document.getElementById("dead");
const lost = document.getElementById("lost");
let counterDead = +dead.textContent;
let counterLost = +lost.textContent;

counterLost = 0;
counterDead = 0;

for (i = 1; i < 10; i++) {
	const hole = document.getElementById(`hole${i}`);
	hole.onclick = () => {

		let holeHasMole = hole.className.includes('hole_has-mole');
		if (counterDead == 10) {
			alert("Вы выйграли!");
			dead.textContent = 0;
			lost.textContent = 0;
			return dead.textContent, lost.textContent;
		}
		if (counterLost == 5) {
			alert("Вы проиграли! Попробуйте еще раз:)");
			dead.textContent = 0;
			lost.textContent = 0;
			return dead.textContent, lost.textContent;

		}
		if (holeHasMole) {
			counterDead++;
			return dead.textContent = counterDead;
		}
		if (holeHasMole == false) {
			counterLost++;
			return lost.textContent = counterLost;
		}

	};


}