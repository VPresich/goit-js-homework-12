const cardMarkup = card => {
  const { largeImageURL, previewURL, tags, likes, views, comments, downloads } =
    card;

  return `<li class='card'> 
            <a class='card-link' href='${largeImageURL}'>                    
              <div class='card-cover-inner'>                
                  <img class='card-cover'
                      src='${previewURL}'
                      alt='${tags}'                                                          
                  />                                                  
                <div class='card-cover-darkened'></div>
              </div>
            </a>                 
            <div class="card-info">
                <div class="field">
                    <span class="label">Likes</span>
                    <span class="value">${likes}</span>    
                </div>
                <div class="field">
                    <span class="label">Views</span>
                    <span class="value">${views}</span>   
                </div>
                <div class="field">
                    <span class="label">Comments</span>
                    <span class="value">${comments}</span>    
                </div>
                <div class="field">
                    <span class="label">Downloads</span>
                    <span class="value">${downloads}</span>    
                </div>
            </div>
        </li>`;
};

function createCardsMarkup(cards) {
  return cards.map(cardMarkup).join('');
}

async function createCadsGallery(cardsArray, galleryRef) {
  const cardsMarkup = createCardsMarkup(cardsArray);
  galleryRef.innerHTML = '';
  galleryRef.insertAdjacentHTML('beforeend', cardsMarkup);
}

export { createCardsMarkup };
export default createCadsGallery;
