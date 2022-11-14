import React from 'react';
import './App.css';
import TicTacToe from './TicTacToe';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      record: [
        [null, null, null],
        [null, null, null],
        [null, null, null]
      ],
      player1: true,
      isGameOver: false,
      winnerName: ''
    }

  }

  handleRecord = (symbol, row, cell) => {
    let copy = [...this.state.record]
    copy[row][cell] = symbol
    this.setState({
      record: copy,
      player1: !this.state.player1
    })
  }

  changeGameStatus = (status) => {
    if (!this.state.isGameOver) {
      this.setState({ isGameOver: status })
    }
  }

  componentDidUpdate(prevProps, prevState) {
    let record = this.state.record

    //For all rows check
    for (let i = 0; i < 3; i++) {
      for (let j = 1; j < 3; j++) {
        if (record[i][j] !== null) {
          if (record[i][j] !== record[i][j - 1]) {
            break;
          }
          if (j === 2) {
            this.changeGameStatus(true)
            break
          }
        }
      }
    }

    //for column sides
    for (let i = 0; i < 3; i++) {
      for (let j = 1; j < 3; j++) {
        if (record[j][i] !== null) {
          if (record[j][i] !== record[j - 1][i]) {
            break;
          }
          if (j === 2) {
            this.changeGameStatus(true)
            break
          }
        }
      }
    }

    //for diagonals 
    for (let i = 1, j = 1; i < 3, j < 3; i++, j++) {
      if (record[i][j] !== null) {
        if (record[i][j] !== record[i - 1][j - 1]) {
          break;
        }
        if (i === 2) {
          this.changeGameStatus(true)
          break;
        }
      }
    }

    // for antidiagonal
    for (let i = 1, j = 1; i >= 0, j < 3; i--, j++) {
      if (record[i][j] !== null) {
        if (record[i][j] !== record[i + 1][j - 1]) {
          break;
        }
        if (i === 0 && j === 2) {
          this.changeGameStatus(true)
          break;
        }
      }
    }

    if (prevState.isGameOver !== this.state.isGameOver) {
      console.log('line', this.state.isGameOver);
      if (this.state.player1) {
        this.setState({
          winnerName: 'Player 2 is winner'
        })
      } else {
        this.setState({
          winnerName: 'Player 1 is winner'
        })
      }
    }
  }

  render() {
    return (
      <div className="App">
        <TicTacToe handleRecord={this.handleRecord} player1={this.state.player1} winner={this.state.winner} />
        {console.log(this.state.isGameOver)}
        <h1>{this.state.isGameOver ? this.state.winnerName : 'Game is on'}</h1>
      </div>
    );
  }
}

export default App;
