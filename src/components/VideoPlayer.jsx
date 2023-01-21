import React, { useContext } from 'react';
import { context } from '../Context';
import { Link } from 'react-router-dom';
const VideoPlayer = () => {
  const { videoToPlay } = useContext(context);
  const { url, title } = videoToPlay;

  return (
    <>
      <Link to="/watch" className="link">
        Go back
      </Link>

      <div className="iframe">
        <iframe
          width="500"
          height="500"
          allowFullScreen
          src={url}
          title={title}
        ></iframe>
      </div>
    </>
  );
};

export default VideoPlayer;
