import React from 'react';
import './App.css';
import TicTacToe from './TicTacToe';
import Input from './Input';
import './Board.css';
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
      winnerName: '',
      player1Name: '',
      player2Name: ''
    }
    this.inputRef = React.createRef();
  }

  handlePlayers = (player1, player2) => {
    console.log(player1, player2)
    this.setState({
      player1Name: player1,
      player2Name: player2
    })
  }

  handleRecord = (symbol, row, cell) => {
    let copy = [...this.state.record]
    copy[row][cell] = symbol
    this.setState({
      record: copy,
      player1: !this.state.player1
    })
  }

  handleRestart = () => {
    const array = [
      [null, null, null],
      [null, null, null],
      [null, null, null]
    ]
    // const array =[]
    this.setState({
      record: array,
      winnerName: '',
      player1Name: '',
      player2Name: '',
      player1: true,
      isGameOver: false,
    });
    this.inputRef.current.value = '';
  }

  changeGameStatus = (status) => {
    if (!this.state.isGameOver) {
      this.setState({
        isGameOver: status
      })
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
          winnerName: this.state.player2Name
        })
      } else {
        this.setState({
          winnerName: this.state.player1Name
        })
      }
    }
  }

  render() {
    return (
      <div className="App">
        <Input handlePlayers={this.handlePlayers} ref={this.inputRef} />
        {this.state.player1Name && this.state.player2Name ?
          <div>
            <TicTacToe handleRecord={this.handleRecord} player1={this.state.player1} handleRestart={this.handleRestart} />
            {this.state.isGameOver ? <h1 id='winnerTag' style={{ left: "33%" }}> {`Congratulation ${this.state.winnerName}`} </h1> : <h1 id='winnerTag'>GAME ON</h1>}
          </div>
          : <h1 id='winnerTag' style={{ left: "40%" }}>Enter Players Name</h1>}
        <button id='restartButton' onClick={this.handleRestart}>New Game</button>
      </div>
    );
  }
}

export default App;
