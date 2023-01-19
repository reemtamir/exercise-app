import '../src/styles/main.scss';
import Inputs from './components/Inputs';
import List from './components/List';
import Footer from './components/Footer';
import { Link, Route, Routes } from 'react-router-dom';
import Workout from './components/Workout';
import Watch from './components/Watch';
import VideoPlayer from './components/VideoPlayer';
import ShortVideoList from './components/ShortVideoList';

function App() {
  return (
    <div className="main-container">
      <Routes>
        <Link style={{ textDecoration: 'none' }} to="/">
          <h1 className="title">Exercises app</h1>
        </Link>
        <Inputs />
        <Route
          path="/"
          element={
            <>
              <Inputs />
            </>
          }
        ></Route>
        <Route
          path="list"
          element={
            <>
              <Inputs />
              <List />
            </>
          }
        ></Route>
        <Route path="workout" element={<Workout />}></Route>
        <Route path="watch" element={<Watch />}></Route>
        <Route path="video-player" element={<VideoPlayer />}></Route>
        <Route path="short-video-list" element={<ShortVideoList />}></Route>
      </Routes>
      <div className="space"></div>
      <Footer />
    </div>
  );
}

export default App;
