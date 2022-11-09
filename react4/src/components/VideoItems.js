import React from "react";


class VideoItems extends React.Component {

    videoSelect=(video)=>{
        this.props.videoSelect(video)
    }
    render() {
        // console.log(this.props.videos)
        const { snippet: { title, thumbnails: { high } } } = this.props.video
        console.log(title)

        return (
            <div id="videoItems" onClick={()=>{this.videoSelect(this.props.video)}}>
                <div>
                    <img src={high.url} style={{height:150 ,width:150,marginRight:20}}/>
                </div>
                <div id="title">
                    <div>{title}</div>
                </div>
            </div>
        )
    }
}

export default VideoItems;