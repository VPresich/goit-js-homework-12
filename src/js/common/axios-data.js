import axios from 'axios';

async function axiosData(url) {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to fetch data: ${error.message}`);
  }
}

export default axiosData;
