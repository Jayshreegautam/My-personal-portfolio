
const words = [
"Jayshri Gautam"
];

let i = 0;
let j = 0;
let isDeleting = false;
let speed = 120;

function type() {

let currentWord = words[i];

document.getElementById("typing-text").textContent =
currentWord.substring(0, j);

if (!isDeleting) {
j++;
speed = 120;
} else {
j--;
speed = 60;
}


if (j === currentWord.length) {
isDeleting = true;
speed = 1000;
}

if (j === 0 && isDeleting) {
isDeleting = false;
i++;
if (i === words.length) i = 0;
}

setTimeout(type, speed);
}

type();

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
let current = "";

sections.forEach(section => {
const sectionTop = section.offsetTop - 100;
const sectionHeight = section.clientHeight;

if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
current = section.getAttribute("id");
}
});

navLinks.forEach(link => {
link.classList.remove("active");
if (link.getAttribute("href").includes(current)) {
link.classList.add("active");
}
});
});


const reveals = document.querySelectorAll("section");

function revealOnScroll() {
reveals.forEach(section => {
const windowHeight = window.innerHeight;
const revealTop = section.getBoundingClientRect().top;

if (revealTop < windowHeight - 100) {
section.style.opacity = "1";
section.style.transform = "translateY(0)";
}
});
}

window.addEventListener("scroll", revealOnScroll);



document.querySelectorAll('nav a').forEach(anchor => {
anchor.addEventListener("click", function(e) {
e.preventDefault();

document.querySelector(this.getAttribute("href"))
.scrollIntoView({
behavior: "smooth"
});
});
});



window.addEventListener("load", () => {
document.body.style.opacity = "1";
});