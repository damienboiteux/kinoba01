
const slider = document.querySelector('#slider');
const sliderContainer = document.querySelector('#slider-container');
const nbSlides = document.querySelectorAll('.card').length;
const sliderWidth = parseInt(window.getComputedStyle(slider).width, 10);
const containerWidth = nbSlides * sliderWidth;

sliderContainer.style.width = `${containerWidth}px`;

let position = 0;

function animateSlide() {
    position = position - 20;
    sliderContainer.style.left = position + 'px';
    if (position > -sliderWidth) {
        requestAnimationFrame(animateSlide);
    }
}

function animatelider() {
    sliderContainer.style.transition = 'transform 1s';
    const firstCard = sliderContainer.firstElementChild;
    console.log("Next Slide");
    sliderContainer.style.left = `-${sliderWidth}px`;
    sliderContainer.appendChild(firstCard);
    position = 0;
    animateSlide();  
    sliderContainer.style.left = 0;
}

setInterval(animatelider, 3000);
