
import React from "react";
class Clock extends React.Component {
    constructor() {
        super();
        this.state = {
            time: new Date().toLocaleTimeString(),
            images:[]
        }
    }
    componentDidMount() {
        // setInterval(() => {
        //     this.setState({
        //         time:new Date().toLocaleTimeString()
        //     })
        // }, 1000)
        fetch('https://picsum.photos/v2/list?page=2&limit=10')
            .then((res) => {
                res.json().then((resp) => {
                    this.setState({
                        images:resp
                    })
                    console.log(resp);
                })
            })
    }

    render() {
        return (
            <div className="time">
                {/* The time is: {this.state.time} */}
                {this.state.images.map((item)=>{
                   return  <img src={item.url}/>
                })}
            </div>
        );
    }
}

export default Clock;