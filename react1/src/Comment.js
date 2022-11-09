import React from "react";
import Person from "./Person";
import { faker } from "@faker-js/faker";

class Comment extends React.Component{
    render(){
        return(
            <div id="Comments">
                <img src={faker.image.avatar()} style={{height:20 ,width:20}}/>
                <Person name={this.props.name} time={this.props.time} comment={this.props.comment}/>
            </div>
        )
    }
}

export default Comment;