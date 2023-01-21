import React, { useContext } from 'react';
import { context } from '../Context';
import { Link } from 'react-router-dom';

const ShortVideoList = () => {
  const { shortVideos, handleVideo } = useContext(context);

  return (
    <>
      <Link to="/watch" className="link">
        Go back
      </Link>
      {shortVideos.map((video, index) => {
        const { title, url, bestThumbnail } = video;
        return (
          <div
            onClick={() => handleVideo(url, title)}
            key={index}
            className="title-image-container"
          >
            <span>{title}</span>

            <Link to="/video-player" style={{ textDecoration: 'none' }}>
              <img
                style={{ width: '200px' }}
                src={bestThumbnail.url}
                alt={`${title}'s image`}
              />
            </Link>
          </div>
        );
      })}
      ;
    </>
  );
};

export default ShortVideoList;
