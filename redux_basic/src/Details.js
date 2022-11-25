import React from "react";
import {connect} from 'react-redux';
class Details extends React.Component{
    render(){
        console.log(this.props)
        return (
            <div>
                <h1>Title:<span>{this.props.selectSong.title}</span></h1>
                <span>{`Duration: ${this.props.selectSong.duration}`}</span>
            </div>
        )
    }
}

const getState =(state)=>{
    return {selectSong:state.selectedSong}
}
export default connect(getState)(Details);