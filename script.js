const slides = [
	{
		image: "slide1.jpg",
		alt: "Presse d’impression",
		tagLine: "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		image: "slide2.jpg",
		alt: "Impressions grand format",
		tagLine: "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		image: "slide3.jpg",
		alt: "Nuancier de couleurs d’impression",
		tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		image: "slide4.png",
		alt: "Autocollants imprimés",
		tagLine: "Autocollants <span>avec découpe laser sur mesure</span>"
	}
];

const banner = document.querySelector("#banner");
const bannerImage = banner.querySelector(".banner-img");
const bannerText = banner.querySelector("p");
const dotsContainer = banner.querySelector(".dots");
const previousButton = banner.querySelector(".arrow_left");
const nextButton = banner.querySelector(".arrow_right");
let currentSlide = 0;

function showSlide(index) {
	currentSlide = (index + slides.length) % slides.length;
	const slide = slides[currentSlide];

	bannerImage.src = `./assets/images/slideshow/${slide.image}`;
	bannerImage.alt = slide.alt;
	bannerText.innerHTML = slide.tagLine;

	[...dotsContainer.children].forEach((dot, dotIndex) => {
		const isSelected = dotIndex === currentSlide;
		dot.classList.toggle("dot_selected", isSelected);
		dot.setAttribute("aria-current", isSelected ? "true" : "false");
	});
}

slides.forEach((slide, index) => {
	const dot = document.createElement("button");
	dot.type = "button";
	dot.className = "dot";
	dot.setAttribute("aria-label", `Afficher la diapositive ${index + 1}`);
	dot.addEventListener("click", () => showSlide(index));
	dotsContainer.appendChild(dot);
});

previousButton.addEventListener("click", () => showSlide(currentSlide - 1));
nextButton.addEventListener("click", () => showSlide(currentSlide + 1));

banner.addEventListener("keydown", event => {
	if (event.key === "ArrowLeft") showSlide(currentSlide - 1);
	if (event.key === "ArrowRight") showSlide(currentSlide + 1);
});

showSlide(0);
