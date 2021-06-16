let progress = document.getElementById('progressbar');
let totalHeight = document.body.scrollHeight - window.innerHeight;
        
window.onscroll = function(){
    let progressHeight = (window.pageYOffset / totalHeight) * 100;
    progress.style.height = progressHeight + '%';
}

// SR

ScrollReveal().reveal('.entryTitle', {
    duration: 1000,
    distance: '100%',
    origin: 'top',
    scale: 0.5,
});

ScrollReveal().reveal('.invite', {
    duration: 1000,
    distance: '100%',
    origin: 'right',
    scale: 0.7,
});

ScrollReveal().reveal('.img1', {
    duration: 1000,
    distance: '10%',
    origin: 'left',
    scale: 0.7,
    delay: 250,
});

ScrollReveal().reveal('.content1', {
    duration: 1000,
    distance: '75%',
    origin: 'top',
    scale: 0.7,
    delay: 250,
});

ScrollReveal().reveal('.content2', {
    duration: 1000,
    distance: '-25%',
    origin: 'left',
    scale: 0.7,
    delay: 900,
});

ScrollReveal().reveal('.img2', {
    duration: 1000,
    distance: '50%',
    origin: 'right',
    scale: 0.7,
    delay: 900,
});

ScrollReveal().reveal('.content3', {
    duration: 1000,
    distance: '50%',
    origin: 'bottom',
    scale: 0.7,
});

ScrollReveal().reveal('.img3', {
    duration: 1500,
    distance: '50%',
    origin: 'left',
    scale: 0.7,
});

ScrollReveal().reveal('.jump', {
    duration: 1500,
    distance: "15%",
    origin: 'left',
    scale: 0.7,
    delay: 200,
});