// scripts.js
const mobileNav = document.querySelector(".hamburger");
const navbar = document.querySelector(".menubar");

const toggleNav = () => {
  navbar.classList.toggle("active");
  mobileNav.classList.toggle("hamburger-active");
};
mobileNav.addEventListener("click", () => toggleNav());
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        button.textContent = 'Added!';
        button.style.backgroundColor = '#28a745';
        setTimeout(() => {
            button.textContent = 'Add to Cart';
            button.style.backgroundColor = '#ff914d';
        }, 1000);
    });
});
