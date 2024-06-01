import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const gallery = document.querySelector('.gallery');

const imagesHtml = galleryItems
  .map(
    image => `
    <li class="gallery-item">
      <a class="gallery-link" href="${image.original}">
        <img
          class="gallery-image"
          src="${image.preview}"
          alt="${image.description}"
        />
      </a>
    </li>`
  )
  .join('');

gallery.insertAdjacentHTML('beforeend', imagesHtml);

const lightbox = new SimpleLightbox(`.gallery .gallery-link`);
