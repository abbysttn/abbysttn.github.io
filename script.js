let index = 0;

function moveSlide(direction) {
    const slides = document.querySelectorAll(".slide");
    const totalSlides = slides.length;

    slides[index].classList.remove("active");
    index = (index + direction + totalSlides) % totalSlides;
    slides[index].classList.add("active");

    document.querySelector(".inner-carousel").style.transform = `translateX(-${index * 100}%)`;
}

function openWeek(event, weekName) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");

    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");

    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace("active", "");
    } 

    document.getElementsById(weekName).style.display = "block";
    event.currentTarget.className += "active";
}

function openNav() {
    document.getElementById("sidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("sidenav").style.width = "0";
}
