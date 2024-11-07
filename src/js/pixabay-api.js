import { createMarkup, warningMessage } from './render-functions.js';
import { loader } from '../main.js';

const API_KEY = '46906317-bfa2c9d7c6708063f650b6890';
const BASE_URL = 'https://pixabay.com/api/';

export function fetchSearch(searchValue) {
  const searchParams = new URLSearchParams({
    key: API_KEY,
    q: searchValue,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 21,
  });

  const fetchURL = `${BASE_URL}?${searchParams}`;

  return fetch(fetchURL)
    .then(response => {
      loader.classList.remove('hidden');

      if (!response.ok) {
        warningMessage();
        throw new Error(response.statusText);
      }
      return response.json();
    })

    .then(data => {
      createMarkup(data);
      loader.classList.add('hidden');
    })

    .catch(error => {
      warningMessage();
      loader.classList.add('hidden');
    });
}
