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
  console.log(searchValue);
  if (searchValue !== '') {
    loader.classList.remove('hidden'); // Show loader
    gallery.innerHTML = ''; // Clear gallery before new search
    submitButton.disabled = true;
    try {
      await fetchSearch(searchValue); // Fetch images based on the search value
      form.reset();
    } catch (error) {
      console.error(error); // For debugging purposes
      iziToastMes('🚨 Something went wrong while fetching images!');
    } finally {
      loader.classList.add('hidden'); // Hide loader, no matter what
      submitButton.disabled = false;
    }
  } else {
    emptyLine();
  }
});
