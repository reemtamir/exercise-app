import axios from 'axios';
import { API_KEY } from '../api.js';
axios.defaults.headers.common['X-RapidAPI-Key'] = API_KEY;
export const fetchExercises = async (muscles, difficulty) => {
  try {
    const { data } = await axios.get(
      `https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?muscle=${muscles}&difficulty=${difficulty}`
    );

    return data;
  } catch (error) {
    console.log(error);
  }
};
export const searchVideo = async ({ target: { id } }) => {
  try {
    const { data } = await axios.get(
      ` https://youtube-search-results.p.rapidapi.com/youtube-search/?q=${id}`
    );

    return data;
  } catch (error) {
    console.log(error);
  }
};
