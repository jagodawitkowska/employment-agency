// nav

const xButton = document.querySelector(".xmark");
const burger = document.querySelector(".burger");
const nav = document.querySelector("ul");
const navLi = document.querySelectorAll(".nav-li-item");

let openMenu = () => {
	xButton.classList.toggle("hide-icon");
	burger.classList.toggle("hide-icon");

	nav.classList.toggle("show-nav");
};

xButton.addEventListener("click", openMenu);
burger.addEventListener("click", openMenu);
navLi.forEach((li) => {
	li.addEventListener("click", openMenu);
});

// search job

const input = document.querySelector("#job-input");
const offers = document.querySelectorAll(".offer-li");

const searchOffer = (e) => {
	const inputValue = e.target.value.toLowerCase();

	offers.forEach(offer => {


		if (offer.textContent.toLowerCase().indexOf(inputValue) !== -1) {
			offer.style.display = "block";
		} else {
			offer.style.display = "none";
		}
	});
};

input.addEventListener("keyup", searchOffer);
