document.addEventListener('DOMContentLoaded', function() {
    // Initialize Locomotive Scroll
    const scroll = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true,
        smartphone: {
            smooth: true
        },
        tablet: {
            smooth: true
        }
    });

    // Update scroll when window is resized
    window.addEventListener('resize', () => {
        scroll.update();
    });

    // Refresh scroll when images are loaded
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', () => {
            scroll.update();
        });
    });
});