import axios from 'axios';

export const Api = async ({ page, query }) => {
  const {data} = await axios.get('https://pixabay.com/api/', {
    params: {
      key: '31536824-eadb862d97e7d8afba5fad346',
      page,
      q: query,
      per_page: 12,
      image_type: 'photo',
      orientation: 'horizontal',
    },
  });
  return data;
};
