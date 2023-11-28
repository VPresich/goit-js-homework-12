import { API_KEY, API_URL } from '../common/constants.js';
import fetchData from './fetch-data.js';

//With callbacks

async function insertCardsToGallery(strForSearch, onSuccess, onError) {
  const apiParams = {
    key: API_KEY,
    q: encodeURIComponent(strForSearch),
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: 1,
    per_page: 20,
  };

  const url = `${API_URL}?${new URLSearchParams(apiParams).toString()}`;

  fetchData(url)
    .then(data => {
      if (!data.hits.length) {
        onError &&
          onError(
            'Sorry, there are no images matching your search query. Please, try again!'
          );
      } else {
        onSuccess && onSuccess(data.hits);
      }
    })
    .catch(error => {
      throw error;
    });
}

export default insertCardsToGallery;
