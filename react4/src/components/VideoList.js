import React from "react";
import VideoItems from "./VideoItems";

class VideoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <div>
                {/* {console.log(this.props.data)} */}
                <h4>{`Latest videos of ${this.props.title} is here...`}</h4>
                {this.props.data.map((video) => {
                    return <VideoItems video={video} videoSelect={this.props.videoSelect}/>
                })}
            </div>
        )
    }
}

export default VideoList;