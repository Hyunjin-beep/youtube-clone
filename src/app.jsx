import React, { Component } from 'react'
import VideoList from './components/videoList'
import './app.css'
import Header from './components/header'

class app extends Component {
  state = {
    videoData: [],
  }

  componentDidMount() {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyB9JPCrbfjfImK0EmNXO5vckiiJBGbh8cA`,
      { method: 'get' }
    )
      .then(response => {
        return response.json()
      })
      .then(json =>
        this.setState({ videoData: json.items.map(item => item.snippet) })
      )
      .catch(error => console.log('error', error))
  }
  render() {
    return (
      <>
        <Header></Header>
        <VideoList videoData={this.state.videoData}></VideoList>
      </>
    )
  }
}

export default app
