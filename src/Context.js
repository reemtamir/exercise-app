import { createContext, useState } from 'react';
import { fetchExercises } from './axios/axiosService';
import { searchVideo } from './axios/axiosService';
export const context = createContext({
  searchInfo: null,
  setSearchInfo: () => {},
  results: '',
  setResults: () => {},
  result: '',
  setResult: () => {},
  video: '',
  getVideo: () => {},
  getExercises: () => {},
  handleVideo: () => {},
  videoToPlay: '',
  setVideoToPlay: () => {},
  shortVideos: '',
  setShortVideos: () => {},
  handleShelf: () => {},
});

const ContextProvider = ({ children }) => {
  const [searchInfo, setSearchInfo] = useState({
    muscles: '',
    difficulty: '',
  });

  const [results, setResults] = useState('');
  const [result, setResult] = useState('');
  const [video, setVideo] = useState('');
  const [shortVideos, setShortVideos] = useState('');
  const [videoToPlay, setVideoToPlay] = useState(null);

  const getExercises = async (muscles, difficulty) => {
    const response = await fetchExercises(muscles, difficulty);
    setResults(response);
  };
  const getVideo = async (id) => {
    const response = await searchVideo(id);
    setVideo(response);
  };
  const formatUrl = (url) => {
    if (url.includes('watch?v=')) {
      const splitUrl = url.split('watch?v=');
      const newUrl = splitUrl[0] + 'embed/' + splitUrl[1];
      return newUrl;
    } else if (url.includes('shorts')) {
      const splitUrl = url.split('shorts');
      const newUrl = splitUrl[0] + 'embed' + splitUrl[1];
      return newUrl;
    } else return url;
  };
  const handleVideo = (url, title) => {
    setVideoToPlay({ url: formatUrl(url), title: title });
  };

  const handleShelf = (listOfShortVideos) => {
    setShortVideos(listOfShortVideos);
  };

  return (
    <context.Provider
      value={{
        searchInfo,
        setSearchInfo,
        results,
        setResults,
        result,
        setResult,
        video,
        getExercises,
        getVideo,
        handleVideo,
        videoToPlay,
        handleShelf,
        shortVideos,
      }}
    >
      {children}
    </context.Provider>
  );
};
export default ContextProvider;
