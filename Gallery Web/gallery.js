document.addEventListener('DOMContentLoaded', () => {
    const images = document.getElementsByClassName('.gallery1 > div');

    images.forEach(image => {
        image.addEventListener('click', () => {
            image.classList.toggle('active');
        });
    });
});