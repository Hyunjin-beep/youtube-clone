import React, { Component } from 'react'
import VideoItem from './videoItem'

class VideoList extends Component {
  render() {
    return (
      <ul className="videoItems">
        {this.props.videoData.map(videoDataItem => (
          <VideoItem
            key={videoDataItem.etag}
            videoData={videoDataItem.snippet}
            onShow={this.props.onShow}
          ></VideoItem>
        ))}
      </ul>
    )
  }
}

export default VideoList
