import React, { useContext } from 'react';
import { context } from '../Context';
const VideoPlayer = () => {
  const { videoToPlay } = useContext(context);
  const { url, title } = videoToPlay;

  return (
    <div className="iframe">
      <iframe
        width="500"
        height="500"
        allowFullScreen
        src={url}
        title={title}
      ></iframe>
    </div>
  );
};

export default VideoPlayer;
