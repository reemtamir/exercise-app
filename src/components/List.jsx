import React, { useContext } from 'react';

import { context } from '../Context';
import { Link } from 'react-router-dom';

const List = () => {
  const { results, isClicked, setResult } = useContext(context);

  const [first] = results;
  if (!first) return;

  const { difficulty, muscle } = first;

  const handleClick = ({ target: { id } }) => {
    setResult(
      results.filter((result) => {
        return result.name === id;
      })
    );
  };

  return (
    <div className="list-container">
      <div className="header">
        {first?.muscle && <h2 className="muscle">{muscle.toUpperCase()}</h2>}
        {first?.difficulty && (
          <h2 className="difficulty">{difficulty.toUpperCase()}</h2>
        )}
      </div>

      {results.map((result, index) => {
        const { name } = result;
        return (
          <div key={index}>
            {!isClicked && (
              <div className="name">
                <Link
                  className="span"
                  to="/workout"
                  id={name}
                  onClick={handleClick}
                >
                  {name}
                </Link>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default List;
