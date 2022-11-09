import React from "react";

class Playback extends React.Component {
    render() {
        return (
            <div>
                {console.log(this.props.selectedVideo)}
                <div className="videoPlayer">
                    <iframe src={`https://www.youtube.com/embed/${this.props.selectedVideo.id.videoId}`} width="90%" height="300" />
                </div>
                <h4>{this.props.selectedVideo.snippet.title}</h4>
                <p>{this.props.selectedVideo.snippet.description}</p>
            </div>
        )
    }
}

export default Playback;