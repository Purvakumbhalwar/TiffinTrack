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

 // for a hero section 

 $(document).ready(function() {
    const heading = $('.creative-heading');
    const textData = JSON.parse(heading.attr('data-text'));
    const textElement = $('.creative-text');
    let currentIndex = 0;

    function showWord(index) {
        const currentWord = textData[index];
        const nextIndex = (index + 1) % textData.length;

                // Split text into characters
        const chars = currentWord.split('');
        textElement.empty();
        chars.forEach((char, i) => {
            const span = $('<span></span>')
            .addClass('splitting-char')
            .css('transition-delay', `${i * 0.05}s`)
            .text(char);
            textElement.append(span);
        });

                // Animate in
        textElement.find('.splitting-char').each(function(i, char) {
            setTimeout(() => {
                $(char).css({
                    opacity: 1,
                    transform: 'rotateX(0)'
                });
                    }, i * 50); // Adjust the delay as needed
        });

                // Animate out after a delay
        setTimeout(() => {
            textElement.find('.splitting-char').each(function(i, char) {
                setTimeout(() => {
                    $(char).css({
                        opacity: 0,
                        transform: 'rotateX(70deg)'
                    });
                        }, i * 50); // Adjust the delay as needed
            });
                }, 2000); // Adjust the delay as needed

                // Show the next word
        setTimeout(() => {
            showWord(nextIndex);
                }, 3000); // Adjust the delay to match the hide animation duration + a buffer
    }

            // Start the animation
    showWord(currentIndex);
});


