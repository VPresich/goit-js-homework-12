import axiosData from './axios-data.js';
import { API_KEY, API_URL } from '../common/constants.js';

async function getImages(strForSearch, pageNumber = 1) {
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

  try {
    const data = await axiosData(url);

    if (!data.hits.length) {
      return Promise.reject(
        'Sorry, there are no images matching your search query. Please, try again!'
      );
    }
    return Promise.resolve(data);
  } catch (error) {
    console.error('Error:', error);
  }
}

export default getImages;
