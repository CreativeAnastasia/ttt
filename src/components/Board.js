import React from 'react';
import Square from './Square.js';
import calculateWinner from '../utils/calculateWinner.js'
import NewGameButton from './NewGameButton.js'

class Board extends React.Component {
  constructor() {
    super();
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
    };
  }

  handleClick = (idx) => {
    let squaresCopy = [...this.state.squares];
    squaresCopy[idx] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      squares: squaresCopy,
      xIsNext: !this.state.xIsNext
    });
  }

  handleReset = () => {
    this.setState({
      squares: Array(9).fill(null),
      xIsNext: true,
    });
  }



  render() {
    let winner = calculateWinner(this.state.squares);

    return (
      <div className="container">
        <h1>{winner ? `Congrats Player ${winner}` :
           `Player ${this.state.xIsNext ? 'X' : 'O'} turn`}</h1>
        <div className="row">
          <div className="col-md-4">
              <Square value={this.state.squares[0]} handleClick={() => this.handleClick(0)}/>
              <Square value={this.state.squares[1]} handleClick={() => this.handleClick(1)}/>
              <Square value={this.state.squares[2]} handleClick={() => this.handleClick(2)}/>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
              <Square value={this.state.squares[3]} handleClick={() => this.handleClick(3)}/>
              <Square value={this.state.squares[4]} handleClick={() => this.handleClick(4)}/>
              <Square value={this.state.squares[5]} handleClick={() => this.handleClick(5)}/>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
              <Square value={this.state.squares[6]} handleClick={() => this.handleClick(6)}/>
              <Square value={this.state.squares[7]} handleClick={() => this.handleClick(7)}/>
              <Square value={this.state.squares[8]} handleClick={() => this.handleClick(8)}/>
          </div>
        </div>
        <NewGameButton handleReset={this.handleReset}/>
      </div>
    )
  }
}

export default Board;

