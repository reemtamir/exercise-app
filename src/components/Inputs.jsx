import React, { useContext } from 'react';

import { diff, musList } from '../list';
import { context } from '../Context';
import { Link } from 'react-router-dom';


const Inputs = () => {
  const { searchInfo, setSearchInfo, getExercises } = useContext(context);

  

  return (
    <>
      <div className="container">
        <div className="input-container">
          <select
            className="select"
            onChange={({ target: { value } }) =>
              setSearchInfo({ ...searchInfo, muscles: value })
            }
          >
            <option>Choose muscles</option>
            {musList.map((mus, index) => {
              return (
                <option key={index} value={mus}>
                  {mus}
                </option>
              );
            })}
          </select>

          <select
            className="select"
            onChange={({ target: { value } }) =>
              setSearchInfo({ ...searchInfo, difficulty: value })
            }
          >
            <option>Choose difficulty</option>
            {diff.map((diff, index) => {
              return (
                <option key={index} value={diff}>
                  {diff}
                </option>
              );
            })}
          </select>
        </div>

        <Link
          onClick={() => {
            getExercises(searchInfo.muscles, searchInfo.difficulty);
          }}
          className="link"
          to="/list"
        >
          {' '}
          Find exercise
        </Link>
      </div>
    </>
  );
};

export default Inputs;
