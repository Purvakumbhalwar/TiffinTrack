const mobileNav = document.querySelector(".hamburger");
const navbar = document.querySelector(".menubar");

const toggleNav = () => {
  navbar.classList.toggle("active");
  mobileNav.classList.toggle("hamburger-active");
};
mobileNav.addEventListener("click", () => toggleNav());

document.querySelector('form').addEventListener('submit', function(event) {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var contact = document.getElementById('contact').value;
    var message = document.getElementById('message').value;

    if (!name || !email || !contact || !message) {
        alert('Please fill out all fields.');
        event.preventDefault();
    }
});

// scripts.js

// Select the Gujarat Cuisine card by its ID
const gujaratCuisineCard = document.getElementById('cuisine');

// Add a click event listener to the card
gujaratCuisineCard.addEventListener('click', () => {
    // Redirect to the Gujarat cuisine page
    window.location.href = 'card.html';
});

// JavaScript to hide the preloader once the page is fully loaded
window.addEventListener('load', function () {
    const preloader = document.getElementById('preloader');
    const content = document.getElementById('content');
    
    preloader.style.display = 'none';
    content.style.display = 'block'; // Show the main content
});



