import React, { useContext } from 'react';
import { GiWeightLiftingUp } from 'react-icons/gi';
import { context } from '../Context';
import { Link } from 'react-router-dom';

const Workout = () => {
  const { result, getVideo } = useContext(context);

  if (!result) return;
  const { instructions, equipment, name } = result[0];

  return (
    <div className="workout-container">
      <h2 className="workout-title">{name}</h2>
      {instructions && (
        <>
          <h3 className="equipment">
            {' '}
            <GiWeightLiftingUp /> {equipment.toUpperCase()}
          </h3>
          <h3 className="instructions">{instructions}</h3>
          <div className="header">
            <Link
              to="/watch"
              onClick={(e) => getVideo(e)}
              id={name}
              className="link"
            >
              Watch
            </Link>
            <Link to="/list" className="link">
              Go back
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Workout;
