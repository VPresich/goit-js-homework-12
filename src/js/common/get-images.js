import fetchData from './fetch-data.js';
import { API_KEY, API_URL } from '../common/constants.js';

// With promise

async function getImages(strForSearch) {
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

  return new Promise((resolve, reject) => {
    fetchData(url, API_KEY)
      .then(data => {
        if (!data.hits.length) {
          reject(
            'Sorry, there are no images matching your search query. Please, try again!'
          );
        }
        resolve(data.hits);
      })
      .catch(error => {
        reject(error);
      });
  });
}

export default getImages;
