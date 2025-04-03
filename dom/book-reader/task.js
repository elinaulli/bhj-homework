const allFontSize = document.querySelectorAll('.font-size');
const book = document.querySelector('.book');
let sizeText;

for (let i = 0; i < allFontSize.length; i++) {
	allFontSize[i].addEventListener('click', selectBtn);
};

function selectBtn(event) {
	allFontSize.forEach(e => {
		e.classList.remove('font-size_active');
	})
	this.classList.add('font-size_active');
	sizeText = this.dataset.size;

	if (sizeText === 'small') {
		book.classList.add('book_fs-small');
	} else if (sizeText === 'big') {
		book.classList.add('book_fs-big');
	}

	event.preventDefault();
}