let index = 0;

function moveSlide(direction) {
    const slides = document.querySelectorAll(".slide");
    const totalSlides = slides.length;

    slides[index].classList.remove("active");
    index = (index + direction + totalSlides) % totalSlides;
    slides[index].classList.add("active");

    document.querySelector(".inner-carousel").style.transform = `translateX(-${index * 100}%)`;
}