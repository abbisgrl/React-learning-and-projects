import React from "react";
class Card extends React.Component{
    render(){
        return(
            <div id="card">
                {this.props.children}
                <button id="approve">Approve</button>
                <button id="reject">Reject</button>
            </div>
        )
    }
}

export default Card;