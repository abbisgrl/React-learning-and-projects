import React from "react";
// import VideoItems from "./VideoItems";

class VideoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <div>
                {console.log(this.props.data)}
                {/* {this.props.data.items.map((videos)=>{
                    return <img src={videos.snippet.thumbnails.high.url}/>
                })} */}
                {this.props.data.items.map((videos) => {
                    return (
                        <div className="videoContainer">
                            <iframe width="420" height="315"
                                src={`https://www.youtube.com/embed?v=${videos.id.videoId}`}>
                            </iframe>
                        </div>
                    )
                })}
                {/* <VideoItems/> */}
            </div>
        )
    }
}

export default VideoList;