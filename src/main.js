import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { getImagesByQuery } from './js/pixabay-api';
import {
  clearGallery,
  createGallery,
  hideLoader,
  hideLoadMoreButton,
  showLoader,
  showLoadMoreButton,
} from './js/render-functions';

export const refs = {
  searchForm: document.querySelector('.form'),
  galleryList: document.querySelector('.gallery'),
  loader: document.querySelector('.loader'),
  loadMoreBtn: document.querySelector('.load-more-btn'),
};

let page = 1;
let userQuery = '';
let galleryCardHeigth = 0;

async function onSearchFormSubmit(event) {
  try {
    event.preventDefault();

    userQuery = event.target.elements.search_text.value.trim();

    if (!userQuery) {
      iziToast.error({
        message: 'The search field must be filled in!',
        position: 'topRight',
      });
      return;
    }

    await clearGallery();

    await hideLoadMoreButton();

    await showLoader();

    page = 1;

    const data = await getImagesByQuery(userQuery, page);

    if (data.totalHits === 0) {
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });

      return;
    }

    await createGallery(data.hits);

    if (data.totalHits > 15) {
      await showLoadMoreButton();
    } else {
      iziToast.info({
        message: `Thats all photos of ${userQuery}`,
        position: 'topRight',
      });
    }

    galleryCardHeigth =
      refs.galleryList.children[0].getBoundingClientRect().height;

    refs.searchForm.reset();
  } catch (err) {
    console.log(err);

    iziToast.error({
      message: `${err}`,
      position: 'topRight',
    });
  } finally {
    await hideLoader();
  }
}

async function onLoadMoreBtnClick(event) {
  try {
    page++;

    await hideLoadMoreButton();

    await showLoader();

    const data = await getImagesByQuery(userQuery, page);

    await createGallery(data.hits);

    scrollBy({
      top: galleryCardHeigth * 2,
      behavior: 'smooth',
    });

    const totalPages = Math.ceil(data.totalHits / 15);

    if (totalPages === page) {
      refs.loadMoreBtn.removeEventListener('click', onLoadMoreBtnClick);
      iziToast.info({
        message: `Thats all photos of ${userQuery}`,
        position: 'topRight',
      });
    } else {
      await showLoadMoreButton();
    }
  } catch (err) {
    iziToast.error({
      message: `${err}`,
      position: 'topRight',
    });
  } finally {
    await hideLoader();
  }
}

refs.searchForm.addEventListener('submit', onSearchFormSubmit);
refs.loadMoreBtn.addEventListener('click', onLoadMoreBtnClick);
