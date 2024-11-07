import { fetchSearch } from './js/pixabay-api';
import { iziToastMes } from './js/render-functions';
import { greetingMessage, emptyLine } from './js/render-functions';

document.addEventListener('DOMContentLoaded', greetingMessage);

const form = document.querySelector('.form');
const gallery = document.querySelector('.gallery');
const submitButton = form.querySelector('button[type="submit"]');
export const loader = document.querySelector('.loader');

form.addEventListener('submit', async event => {
  event.preventDefault();

  const searchValue = event.target.elements.search.value.trim();

  if (searchValue !== '') {
    loader.classList.remove('hidden');
    gallery.innerHTML = '';
    submitButton.disabled = true;
    try {
      await fetchSearch(searchValue);
      form.reset();
    } catch (error) {
      console.error(error);
      iziToastMes('🚨 Something went wrong while fetching images!');
    } finally {
      loader.classList.add('hidden');
      submitButton.disabled = false;
    }
  } else {
    emptyLine();
  }
});
