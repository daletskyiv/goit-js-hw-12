import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { refs } from '../main';

const lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionSelector: 'img',
  captionType: 'attr',
  captionsData: 'alt',
  captionDelay: 250,
});

export function createGallery(images) {
  const imageCard = images
    .map(
      ({
        webformatURL: smallImg,
        largeImageURL: bigImg,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return `<li class="gallery-item">
            <a class="gallery-link" href="${bigImg}"><img class="gallery-img" src="${smallImg}" alt="${tags}"></a>
            <div class="gallery-info">
            <div class="gallery-info-part">
            <h3 class="gallery-title">Likes</h3>
            <p class="gallery-text">${likes}</p>
            </div>
            <div class="gallery-info-part">
            <h3 class="gallery-title">Views</h3>
            <p class="gallery-text">${views}</p>
            </div>
            <div class="gallery-info-part">
            <h3 class="gallery-title">Comments</h3>
            <p class="gallery-text">${comments}</p>
            </div>
            <div class="gallery-info-part"> 
            <h3 class="gallery-title">Downloads</h3>
            <p class="gallery-text">${downloads}</p>
            </div>
            </div>
          </li>`;
      }
    )
    .join('');
  refs.galleryList.insertAdjacentHTML('beforeend', imageCard);

  lightbox.refresh();
}

export function clearGallery() {
  refs.galleryList.innerHTML = '';
}

export function showLoader() {
  refs.loader.classList.add('is-active');
}

export function hideLoader() {
  refs.loader.classList.remove('is-active');
}

export function showLoadMoreButton() {
  refs.loadMoreBtn.classList.remove('is-hidden');
}

export function hideLoadMoreButton() {
  refs.loadMoreBtn.classList.add('is-hidden');
}
