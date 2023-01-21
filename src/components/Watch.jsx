import React, { useContext } from 'react';
import { context } from '../Context';
import { Link } from 'react-router-dom';

const Watch = () => {
  const { video, handleVideo, handleShelf } = useContext(context);
  if (!video) return;
  const { items } = video;

  const filteredItems = items.filter(
    (item) => item.type !== 'playlist' || item.type !== 'channel'
  );

  filteredItems.sort((a, b) => {
    if (a.type === 'video' && b.type === 'shelf') {
      return -1;
    }
    if (a.type === 'shelf' && b.type === 'video') {
      return 1;
    }
    return 0;
  });

  return (
    <>
      <Link to="/workout" className="link">
          Go back
        </Link>
      <div>
      
        {filteredItems.map((item, index) => {
          const { title, bestThumbnail } = item;

          return (
            <div
              onClick={
                item.url
                  ? () => handleVideo(item.url, title)
                  : () => handleShelf(item.items)
              }
              className="title-image-container"
              key={index}
            >
              <span>{title}</span>

              {bestThumbnail?.url ? (
                <Link to="/video-player" style={{ textDecoration: 'none' }}>
                  <img
                    style={{ width: '200px' }}
                    src={bestThumbnail.url}
                    alt={`${title}'s image`}
                  />
                </Link>
              ) : (
                <Link to="/short-video-list">
                  <img
                    style={{ width: '200px' }}
                    src=" https://cdn.xxl.thumbs.canstockphoto.com/no-image-available-written-in-chalk-on-a-blackboard-stock-images_csp8317855.jpg"
                    alt="No image photo"
                  />
                </Link>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Watch;
