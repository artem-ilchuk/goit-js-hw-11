import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export function createMarkup(data) {
  const gallery = document.querySelector('.gallery');
  if (data.totalHits > 0) {
    gallery.innerHTML = data.hits
      .map(
        image => `<li class="gallery-item">
          <a class="gallery-link" href="${image.largeImageURL}">
            <img
              class="gallery-image"
              src="${image.webformatURL}"
              data-source="${image.largeImageURL}"
              alt="${image.tags}"
            />
          </a>          
          <ul class='gallery-list-details'>
            <li class='gallery-item-details'><p class='gallery-item-text'>Likes</p><p class="item-value">${image.likes}</p></li>
            <li class='gallery-item-details'><p class='gallery-item-text'>Views</p><p class="item-value">${image.views}</p></li>
            <li class='gallery-item-details'><p class='gallery-item-text'>Comments</p><p class="item-value">${image.comments}</p></li>
            <li class='gallery-item-details'><p class='gallery-item-text'>Downloads</p><p class="item-value">${image.downloads}</p></li>
          </ul>          
        </li>`
      )
      .join('');

    let myGallery = new SimpleLightbox('.gallery a', {
      overlayOpacity: 0.9,
      captionsData: 'alt',
      captionDelay: 250,
    });
    myGallery.refresh();
  } else {
    iziToastMes();
    gallery.innerHTML = '';
  }
}

/*---------IziMessages-------*/

export function greetingMessage() {
  iziToast.show({
    title: 'Hello',
    titleColor: '#000',
    message: 'Welcome to our Website!',
    messageColor: '#000',
    position: 'topRight',
    color: '#09f',
    icon: 'fas fa-bell',
    timeout: 4000,
  });
}

export function iziToastMes() {
  iziToast.error({
    title: 'Error',
    titleColor: '#fff',
    message:
      'Sorry, there are no images matching your search query. Please try again!',
    messageColor: '#fff',
    color: '#ef4040',
    position: 'topRight',
    icon: 'fas fa-exclamation-triangle',
    transitionIn: 'flipInX',
    transitionOut: 'flipOutX',
    timeout: 3000,
  });
}

export function emptyLine() {
  iziToast.error({
    title: 'Error',
    titleColor: '#fff',
    message: 'Please fill in the search images field',
    messageColor: '#fff',
    color: '#ef4040',
    position: 'topRight',
    icon: 'fas fa-exclamation-triangle',
    transitionIn: 'flipInX',
    transitionOut: 'flipOutX',
    timeout: 3000,
  });
}

export function warningMessage() {
  iziToast.warning({
    title: 'Caution',
    titleColor: '#000',
    message: 'Something went wrong, please try again',
    messageColor: '#000',
    position: 'topRight',
    color: 'orange',
    icon: 'fas fa-exclamation-circle',
    timeout: 4000,
  });
}