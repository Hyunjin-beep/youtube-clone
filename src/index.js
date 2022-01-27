import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './app'
import axios from 'axios'
import Youtube from './service/youtube'
import '@fortawesome/fontawesome-free/js/all.js'

const httpClient = axios.create({
  baseURL: `https://youtube.googleapis.com/youtube/v3`,
  params: { key: `AIzaSyB9JPCrbfjfImK0EmNXO5vckiiJBGbh8cA` },
})
const youtube = new Youtube(httpClient)
ReactDOM.render(
  <React.StrictMode>
    <App youtube={youtube} />
  </React.StrictMode>,
  document.getElementById('root')
)
