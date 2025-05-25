document.addEventListener('DOMContentLoaded', function() {
    const scroll = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true,
        direction: 'horizontal', // Ensure horizontal scrolling
        multiplier: 0.8, // Adjust scroll speed
        smartphone: {
            smooth: true,
            direction: 'horizontal',
            breakpoint: 768
        },
        tablet: {
            smooth: true,
            direction: 'horizontal'
        }
    });

    // Programmatically set the width of the track
    const programs = document.querySelectorAll('.program');
    const track = document.querySelector('.programs-track');
    track.style.width = `${programs.length * 100}vw`;

    // Update on resize and image load
    window.addEventListener('resize', () => scroll.update());
    
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', () => scroll.update());
    });
});