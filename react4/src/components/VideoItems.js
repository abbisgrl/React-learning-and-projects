import React from "react";


class VideoItems extends React.Component {

    videoSelect = (video) => {
        this.props.videoSelect(video)
    }
    render() {
        const { snippet: { title, thumbnails: { high } } } = this.props.video
        console.log(title)

        return (
            <div id="videoItems" onClick={() => { this.videoSelect(this.props.video) }}>
                <div>
                    <img src={high.url} id='image' />
                </div>
                <div id="title">
                    <div>{title}</div>
                </div>
            </div>
        )
    }
}

export default VideoItems;