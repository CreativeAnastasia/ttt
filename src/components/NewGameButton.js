import React from 'react';

const NewGameButton = (props) => {
  return (
    <button className="btn btn-default" onClick={props.handleReset}>
      New Game
    </button>
  );
}

export default NewGameButton;
