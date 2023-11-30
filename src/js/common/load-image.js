function loadImage(sourceImg) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.src = sourceImg;
    image.onload = () => {
      resolve(image);
    };
    image.onerror = error => {
      reject(error);
    };
  });
}

export default loadImage;
