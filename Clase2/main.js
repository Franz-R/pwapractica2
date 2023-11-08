let currentIndex = 0;

  function showImage(index) {
    const carousel = document.getElementById('image-carousel');
    const offset = -index * 100;
    carousel.style.transform = `translateX(${offset}%)`;
  }

  function nextImage() {
    const totalImages = document.querySelectorAll('.carousel-image').length;
    currentIndex = (currentIndex + 1) % totalImages;
    showImage(currentIndex);
  }

  function prevImage() {
    const totalImages = document.querySelectorAll('.carousel-image').length;
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    showImage(currentIndex);
  }