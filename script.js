window.addEventListener('load', function() {
    var anibtn = document.getElementById('anibtn');
    anibtn.style.transition = 'opacity 2s ease-in-out'; 

    setTimeout(function() {
        anibtn.style.opacity = '1'; 
    }, 500); 
});
window.addEventListener('load', function() {
    var anibtn = document.getElementById('anibh1');
    anibtn.style.transition = 'all 2s ease-in-out'; 


    setTimeout(function() {
        anibtn.style.opacity = '1'; 
    }, 500);
});


var Pickleinfobtn = document.getElementById('Pickleinfobtn');
Pickleinfobtn.addEventListener('click', function() {
    window.location.href = 'Pickles.html';
});
var snacksinfobtn = document.getElementById('snacksinfobtn');
snacksinfobtn.addEventListener('click', function() {
    window.location.href = 'Snacks.html';
});
var sweetsinfobtn= document.getElementById('sweetsinfobtn');
sweetsinfobtn.addEventListener('click', function() {
    window.location.href = 'Sweets.html';
});
var powederinfobtn = document.getElementById('powederinfobtn');
powederinfobtn.addEventListener('click', function() {
    window.location.href = 'Powders.html';
});
var Pickleinfobtn1 = document.getElementById('Pickleinfobtn1');
Pickleinfobtn1.addEventListener('click', function() {
    window.location.href = 'Pickles.html';
});
var snacksinfobtn1 = document.getElementById('snacksinfobtn1');
snacksinfobtn1.addEventListener('click', function() {
    window.location.href = 'Snacks.html';
});
var sweetsinfobtn1= document.getElementById('sweetsinfobtn1');
sweetsinfobtn1.addEventListener('click', function() {
    window.location.href = 'Sweets.html';
});
var powederinfobtn1 = document.getElementById('powederinfobtn1');
powederinfobtn1.addEventListener('click', function() {
    window.location.href = 'Powders.html';
});
var storelocbtn = document.getElementById('storelocbtn');
powederinfobtn1.addEventListener('click', function() {
    window.location.href = 'https://maps.app.goo.gl/M2exBK2MamPacAsHA';
});
function showlocation(){
    window.location.href = 'https://maps.app.goo.gl/M2exBK2MamPacAsHA';
}


function searchf(){
    var demo = document.getElementById('demo');
    var searchInput = document.getElementById('search');
    searchInput.style.border = '1px solid black';
    var searchInput = document.getElementById('search');
    searchInput.style.borderRadius = '25px';
    searchInput.style.padding = '5px';
    searchInput.style.marginTop = '0px';
    searchInput.style.width = '200px';
        if (searchInput.style.opacity === '0') {
            searchInput.style.transition = 'opacity 0.5s ease-in-out';
            searchInput.style.opacity = '1';
            searchInput.style.display='inline-block';
            setTimeout(function() {
                searchInput.style.transition = 'all 0.5s ease-in-out';
                searchInput.style.opacity = '0';
                searchInput.style.display = 'none';
            }, 10000);
        } else if (searchInput.style.opacity === '1') {
            searchInput.style.transition = 'opacity 1s ease-in-out';
            searchInput.style.opacity = '0';
            searchInput.style.display='none';
        }

    searchInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            alert('You searched for: ' + searchInput.value);
        }
    });
}
function searchfi(){
    var demo = document.getElementById('demo');
    var searchInput = document.getElementById('search');
    searchInput.style.border = '1px solid black';
    var searchInput = document.getElementById('search');
    searchInput.style.borderRadius = '25px';
    searchInput.style.padding = '5px';
    searchInput.style.marginTop = '0px';
    searchInput.style.width = '200px';
        if (searchInput.style.opacity === '0') {
            searchInput.style.transition = 'opacity 0.5s ease-in-out';
            searchInput.style.opacity = '1';
            searchInput.style.display='inline-block';
            setTimeout(function() {
                searchInput.style.transition = 'all 0.5s ease-in-out';
                searchInput.style.opacity = '0';
                searchInput.style.display = 'none';
            }, 10000);
        } else if (searchInput.style.opacity === '1') {
            searchInput.style.transition = 'opacity 1s ease-in-out';
            searchInput.style.opacity = '0';
            searchInput.style.display='none';
        }

    searchInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            alert('You searched for: ' + searchInput.value);
        }
    });
}
function searchf2(){
    var demo = document.getElementById('demo');
    var searchInput = document.getElementById('search');
    searchInput.style.border = '1px solid black';
    var searchInput = document.getElementById('search');
    searchInput.style.borderRadius = '25px';
    searchInput.style.padding = '5px';
    searchInput.style.marginTop = '0px';
    searchInput.style.width = '200px';
        if (searchInput.style.opacity === '0') {
            searchInput.style.transition = 'opacity 0.5s ease-in-out';
            searchInput.style.opacity = '1';
            searchInput.style.display='inline-block';
            setTimeout(function() {
                searchInput.style.transition = 'all 0.5s ease-in-out';
                searchInput.style.opacity = '0';
                searchInput.style.display = 'none';
            }, 10000);
        } else if (searchInput.style.opacity === '1') {
            searchInput.style.transition = 'opacity 1s ease-in-out';
            searchInput.style.opacity = '0';
            searchInput.style.display='none';
        }

    searchInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            alert('You searched for: ' + searchInput.value);
        }
    });
}
function searchf3(){
    var demo = document.getElementById('demo');
    var searchInput = document.getElementById('search');
    searchInput.style.border = '1px solid black';
    var searchInput = document.getElementById('search');
    searchInput.style.borderRadius = '25px';
    searchInput.style.padding = '5px';
    searchInput.style.marginTop = '0px';
    searchInput.style.width = '200px';
        if (searchInput.style.opacity === '0') {
            searchInput.style.transition = 'opacity 0.5s ease-in-out';
            searchInput.style.opacity = '1';
            searchInput.style.display='inline-block';
            setTimeout(function() {
                searchInput.style.transition = 'all 0.5s ease-in-out';
                searchInput.style.opacity = '0';
                searchInput.style.display = 'none';
            }, 10000);
        } else if (searchInput.style.opacity === '1') {
            searchInput.style.transition = 'opacity 1s ease-in-out';
            searchInput.style.opacity = '0';
            searchInput.style.display='none';
        }

    searchInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            alert('You searched for: ' + searchInput.value);
        }
    });
}
function searchf4(){
    var demo = document.getElementById('demo');
    var searchInput = document.getElementById('search');
    searchInput.style.border = '1px solid black';
    var searchInput = document.getElementById('search');
    searchInput.style.borderRadius = '25px';
    searchInput.style.padding = '5px';
    searchInput.style.marginTop = '0px';
    searchInput.style.width = '200px';
        if (searchInput.style.opacity === '0') {
            searchInput.style.transition = 'opacity 0.5s ease-in-out';
            searchInput.style.opacity = '1';
            searchInput.style.display='inline-block';
            setTimeout(function() {
                searchInput.style.transition = 'all 0.5s ease-in-out';
                searchInput.style.opacity = '0';
                searchInput.style.display = 'none';
            }, 10000);
        } else if (searchInput.style.opacity === '1') {
            searchInput.style.transition = 'opacity 1s ease-in-out';
            searchInput.style.opacity = '0';
            searchInput.style.display='none';
        }

    searchInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            alert('You searched for: ' + searchInput.value);
        }
    });
}
document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel');
    const slides = document.querySelectorAll('.carousel-slide');
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');
    
    let currentIndex = 0;
    const totalSlides = slides.length;
    const visibleSlides = 3;

    function updateCarousel() {
        carousel.style.transform = `translateX(-${currentIndex * (100 / visibleSlides)}%)`;
    }

    nextButton.addEventListener('click', () => {
        if (currentIndex < totalSlides - visibleSlides) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateCarousel();
    });

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = totalSlides - visibleSlides;
        }
        updateCarousel();
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const reviewsCarousel = document.querySelector('.reviews-carousel');
    const reviewSlides = document.querySelectorAll('.review-slide');
    const prevButton = document.querySelector('.review-button.prev');
    const nextButton = document.querySelector('.review-button.next');
    
    let currentIndex = 0;
    const totalReviews = reviewSlides.length;
    const visibleReviews = 3;

    function updateCarousel() {
        reviewsCarousel.style.transform = `translateX(-${currentIndex * (100 / visibleReviews)}%)`;
    }

    nextButton.addEventListener('click', () => {
        if (currentIndex < totalReviews - visibleReviews) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateCarousel();
    });

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = totalReviews - visibleReviews;
        }
        updateCarousel();
    });
});










