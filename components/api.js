import axios from 'axios';

const API_URL = 'https://db.ygoprodeck.com/api/v7/cardinfo.php';

export const getCards = async (page = 1, name = '') => {
  const response = await axios.get(API_URL, {
    params: {
      num: 20, // cantidad de resultados por página
      offset: page,
      fname: name,
    },
  });

  return response.data.data;
};
