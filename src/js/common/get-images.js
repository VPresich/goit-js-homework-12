import fetchData from './fetch-data.js';
import { API_KEY, API_URL } from '../common/constants.js';

function getImages(strForSearch, pageNumber = 1) {
  const apiParams = {
    key: API_KEY,
    q: encodeURIComponent(strForSearch),
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: pageNumber,
    per_page: 20,
  };
  const url = `${API_URL}?${new URLSearchParams(apiParams).toString()}`;

  return new Promise((resolve, reject) => {
    fetchData(url)
      .then(data => {
        if (!data.hits.length) {
          reject(
            'Sorry, there are no images matching your search query. Please, try again!'
          );
        }
        resolve(data);
      })
      .catch(error => reject(error));
  });
}

export default getImages;
