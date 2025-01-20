let dropdownItems = Array.from(document.querySelectorAll(".dropdown__item")); //массив из возможных вариантов;
let dropdownList = document.querySelector(".dropdown__list");



const value = document.querySelector(".dropdown__value");
value.addEventListener("click", () => {
	dropdownList.classList.toggle("dropdown__list_active");
});

dropdownItems.forEach((item, index) => {
	item.onclick = function() {
		dropdownList.classList.toggle("dropdown__list_active");
		value.textContent = dropdownItems[index].textContent;
		return false; // Возвращение return false из обработчика события предотвращает действие браузера по умолчанию

	}
})