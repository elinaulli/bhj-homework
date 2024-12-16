let dropdownItems = Array.from(document.querySelectorAll(".dropdown__item")); //массив из возможных вариантов;
let dropdownList = document.querySelector(".dropdown__list");

function openMenu() {
	dropdownList.classList.add("dropdown__list_active");
}

function closeMenu() {
	dropdownList.classList.remove("dropdown__list_active");
}

const value = document.querySelector(".dropdown__value");
value.addEventListener("click", openMenu);

dropdownItems.forEach((item, index) => {
	item.onclick = function() {
		closeMenu();
		value.textContent = dropdownItems[index].textContent;
		return false; // Возвращение return false из обработчика события предотвращает действие браузера по умолчанию

	}
})