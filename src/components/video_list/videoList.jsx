import React, { Component } from 'react'
import VideoItem from '../video_item/videoItem'
import styles from './video_list.module.css'

class VideoList extends Component {
  handleItem = detail => {
    this.props.onClickedItem(detail)
  }

  render() {
    return (
      <ul className={styles.videos}>
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
