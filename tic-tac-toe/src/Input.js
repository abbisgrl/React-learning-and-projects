import React from "react";
const Input = React.forwardRef((props, ref) => {
    class Input extends React.Component {
        constructor() {
            super();
            this.state = {
                playerName1: '',
                playerName2: ''
            }
        }

        handleSubmit = (e) => {
            e.preventDefault();
            props.handlePlayers(this.state.playerName1, this.state.playerName2);
        }
        render() {
            return (
                <>
                    <form onSubmit={(e) => this.handleSubmit(e)} id="formContainer">
                        <label htmlFor="input1">Player 1</label>
                        <input type='text' id="input1" value={this.state.playerName1} onChange={(e) => this.setState({ playerName1: e.target.value })} ref={ref} />
                        <label htmlFor="input2">Player 2</label>
                        <input type='text' id="input2" value={this.state.playerName2} onChange={(e) => this.setState({ playerName2: e.target.value })} ref={ref} />
                        <button type="submit">Start the game</button>
                    </form>
                </>
            )
        }
    }
    return <Input/>;
})


export default Input;