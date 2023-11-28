async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  } catch (error) {
    throw error;
  }
}

export default fetchData;
