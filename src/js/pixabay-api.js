import axios from 'axios';

export async function getImagesByQuery(query, page) {
  const paramsRequest = {
    key: '55643429-294578a097483c19c7f77277b',
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: page,
    per_page: '15',
  };
  const { data } = await axios.get('https://pixabay.com/api/', {
    params: paramsRequest,
  });

  return data;
}
