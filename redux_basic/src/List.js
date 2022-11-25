import React from "react";
import { connect } from 'react-redux'
import { selectSong } from './actions';

class List extends React.Component {
    render() {
        return (
            this.props.songs.map((item, index) => {
                return <div key={index}>
                    <div>{`Title:${item.title} Duration:${item.duration}`}</div>
                    <button onClick={() => this.props.selectSong(item)}>Select</button>
                </div>
            })
        )
    }
}

//important step 
const mapStateToProps = (state) => {
    // console.log(state)
    return { songs: state.songs }
}

export default connect(mapStateToProps, { selectSong })(List);