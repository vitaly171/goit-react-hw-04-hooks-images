const KEY = '23678753-e5ed32ac33839f4375f02d880';
const BASE_URL = 'https://pixabay.com/api';

function fetchImage(query, page) {
  const url = `${BASE_URL}/?q=${query}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`;

  return fetch(url).then(response => {
    if (response.ok) {
      return response.json();
    }

    return Promise.reject(
      new Error(`Изображение с именем ${query} отсутствует`),
    );
  });
}

const api = {
  fetchImage,
};

export default api;
