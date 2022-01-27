import React, { Component } from 'react'
import styles from './video_item.module.css'

class VideoItem extends Component {
  handleClick = () => {
    this.props.onShow(true)
  }

  handleItem = () => {
    this.props.onClickedItem(this.props.videoData)
  }

  handleClick = () => {
    // this.handleClick
    // this.handleItem
    this.props.onShow(true)
    this.props.onClickedItem(this.props.videoData)
  }

  render() {
    const displayType = this.props.onItemClassName === 'list' ? 'list' : 'grid'
    return (
      <li className={`container-${displayType}`} onClick={this.handleClick}>
        <div className={styles.video}>
          <img
            src={this.props.videoData.snippet.thumbnails.medium.url}
            alt=""
            className={styles.thumbnail}
          />
          <div className={styles.metadata}>
            <p className={styles.title}>{this.props.videoData.snippet.title}</p>
            <p className={styles.chaneel}>
              {this.props.videoData.snippet.channelTitle}
            </p>
          </div>
        </div>
      </li>
    )
  }
}

export default VideoItem
