async function fetchData(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(response.status);
  }
  return response.json();
}

export default fetchData;

// function fetchData(url) {
//   return new Promise((resolve, reject) => {
//     fetch(url)
//       .then(response => {
//         if (!response.ok) {
//           reject(response.status);
//         }
//         resolve(response.json());
//       })
//       .catch(error => reject(error));
//   });
// }
