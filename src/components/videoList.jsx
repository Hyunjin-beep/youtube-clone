import React, { Component } from 'react'
import VideoItem from './videoItem'

class VideoList extends Component {
  handleItem = detail => {
    this.props.onClickedItem(detail)
  }

  render() {
    return (
      <ul className={this.props.onListClassName}>
        {this.props.videoData.map(videoDataItem => (
          <VideoItem
            onItemClassName={this.props.onItemClassName}
            key={videoDataItem.etag}
            videoData={videoDataItem}
            onShow={this.props.onShow}
            onClickedItem={this.handleItem}
          ></VideoItem>
        ))}
      </ul>
    )
  }
}

export default VideoList
