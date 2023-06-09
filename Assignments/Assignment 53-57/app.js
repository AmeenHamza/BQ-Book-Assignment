
// 1. Consider you have 4 images in a file as shown below:

const imageGallery = document.querySelector('.image-gallery');
const modal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const closeButton = document.getElementsByClassName('close')[0];

imageGallery.addEventListener('click', function (event) {
  if (event.target.classList.contains('gallery-image')) {
    const clickedImageSrc = event.target.getAttribute('src');
    modalImage.setAttribute('src', clickedImageSrc);
    modal.style.display = 'block';
  }
});

closeButton.addEventListener('click', function () {
  modal.style.display = 'none';
});


const zoomInButton = document.getElementById('zoomInBtn');
const zoomOutButton = document.getElementById('zoomOutBtn');
const zoomParagraph = document.getElementById('zoomParagraph');

zoomInButton.addEventListener('click', function () {
  const currentFontSize = parseInt(window.getComputedStyle(zoomParagraph).fontSize);
  const newFontSize = currentFontSize + 10;
  zoomParagraph.style.fontSize = newFontSize + 'px';
});

zoomOutButton.addEventListener('click', function () {
  const currentFontSize = parseInt(window.getComputedStyle(zoomParagraph).fontSize);
  const newFontSize = currentFontSize - 10;
  zoomParagraph.style.fontSize = newFontSize + 'px';
});
