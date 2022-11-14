import React from "react";
import './Board.css';
class TicTacToe extends React.Component {
    handleClick = (e, row, cellNo) => {
        if (this.props.player1) {
            e.currentTarget.innerHTML = 'X'
            e.currentTarget.classList.add('cross');
            this.props.handleRecord('X', row, cellNo);
        } else {
            e.currentTarget.innerHTML = '0'
            e.currentTarget.classList.add('cross');
            this.props.handleRecord('0', row, cellNo);
        }
    }

    render() {
        return (
            <>
                <div className="board">
                    <div className="input" onClick={(e) => this.handleClick(e, 0, 0)}></div>
                    <div className="input" onClick={(e) => this.handleClick(e, 0, 1)}></div>
                    <div className="input" onClick={(e) => this.handleClick(e, 0, 2)}></div>
                    <div className="input" onClick={(e) => this.handleClick(e, 1, 0)}></div>
                    <div className="input" onClick={(e) => this.handleClick(e, 1, 1)}></div>
                    <div className="input" onClick={(e) => this.handleClick(e, 1, 2)}></div>
                    <div className="input" onClick={(e) => this.handleClick(e, 2, 0)}></div>
                    <div className="input" onClick={(e) => this.handleClick(e, 2, 1)}></div>
                    <div className="input" onClick={(e) => this.handleClick(e, 2, 2)}></div>
                </div>
            </>


        )
    }
}

export default TicTacToe;