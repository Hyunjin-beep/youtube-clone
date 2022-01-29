import React, { Component } from 'react'
import styles from './video_detail.module.css'

class VideoDetail extends Component {
  render() {
    const clickedID = this.props.clickedVideoData.id

    return (
      <div className={styles.detail}>
        <iframe
          className={styles.video}
          type="text/html"
          frameBorder="0"
          allowFullScreen
          width="100%"
          height="400px"
          src={`https://youtube.com/embed/${clickedID}`}
        ></iframe>

        <h2 className={styles.title}>
          {this.props.clickedVideoData.snippet.title}
        </h2>
        <h2 className={styles.channel}>
          {this.props.clickedVideoData.snippet.channelTitle}
        </h2>
        <pre className={styles.description}>
          {this.props.clickedVideoData.snippet.description}
        </pre>
      </div>
    )
  }
}

export default VideoDetail
