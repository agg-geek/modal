'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

const btns = document.querySelectorAll('.show-modal');

const showModal = function () {
	modal.classList.remove('hidden');
	overlay.classList.remove('hidden');
};

const closeModal = function () {
	modal.classList.add('hidden');
	overlay.classList.add('hidden');
};

for (let btn of btns) {
	btn.addEventListener('click', showModal);
}

document.querySelector('.close-modal').addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (evt) {
	if (evt.key === 'Escape' && !modal.classList.contains('hidden')) closeModal();
});
