import React, { Component } from 'react'
import VideoItem from './videoItem'

class VideoList extends Component {
  render() {
    return (
      <ul className={this.props.onListClassName}>
        {this.props.videoData.map(videoDataItem => (
          <VideoItem
            onItemClassName={this.props.onItemClassName}
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
