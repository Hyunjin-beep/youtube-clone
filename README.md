# Title: Youtube Clone Project

# Languages: React

# API : Google Youtube API

# Others : Postman, Axios

> ## TABLE OF CONTENTS

### 1. About the project

### 2. Why do I start this project?

### 3. Details of project

### 4. Reference

---

## 1. About the project

This project is Youtube-Clone.  
Google Youtube API and Postman are used for this project.

List most popular videos when loading and When a user clicks a video, the page shows video, its detail from API and the most popular videos list located at right-side.

Lastly, when the user searchs with keyword, the list of videos with keyword is displayed.

---

## 2. Why do I start this project?

After starting to learn React, I would like to practice API for React project. So one of the most popular APIs, Google Youtube API is used.

---

## 3. Details of project

There are overall two pages : main page(most popular videos and Search page) and video detail page.

- Main Page

![youtube 1st](https://user-images.githubusercontent.com/64330888/156896221-f0c0d047-154c-4505-9f88-6c335a3086b3.png)

I got all required video data (videoID, title, creator, thumbnails) from results by Google Youtube API - mostPopular

```
const httpClient = axios.create({
  baseURL: `https://youtube.googleapis.com/youtube/v3`,
  params: { key: `AIzaSyB9JPCrbfjfImK0EmNXO5vckiiJBGbh8cA` },
})

async mostPopular() {
    // Axios
    const response = await this.youtube.get('videos', {
      params: {
        part: 'snippet',
        chart: 'mostPopular',
        maxResults: 25,
      },
    })

    return response.data.items

    // Fetch
    // const response = await fetch(`url`, this.getRequestOptions)
    // const result = await response.json()
    // return result.items
  }
```

- Detail Page

![youtube 2nd](https://user-images.githubusercontent.com/64330888/156899919-cb71a87d-21a1-4f28-849c-e8841562b595.png)

I used iframe with https://youtube.com/embed/videoID for src and the most popular video list above is used again on the right side by making status (clicked in app.jsx) false/true.

```
    <div className={this.state.clicked ? styles.video_container : null}>
        {this.state.clicked ? (
            <div className={styles.detail}>
              <VideoDetail
                clickedVideoData={this.state.clickedVideoDetail}
              ></VideoDetail>
            </div>
          ) : null}

          <div className={styles.list}>
            <VideoList
              onItemClassName={this.state.clicked ? 'list' : 'grid'}
              videoData={this.state.videoData}
              onShow={this.handleShow}
              onClickedItem={this.handleItem}
            ></VideoList>
          </div>
    </div>
```

- Search Page

![youtube 3rd](https://user-images.githubusercontent.com/64330888/156900006-bbadaf30-44db-450e-8dd3-8a860a0419d8.png)

When a user search with keyword, the list of video with the keyword is displayed. (from results by Google Youtube API - search)

```
    async search(query) {
    const response = await this.youtube.get('search', {
      params: {
        part: 'snippet',
        maxResults: 25,
        type: 'video',
        q: query,
      },
    })

    return response.data.items.map(item => ({ ...item, id: item.id.videoId }))
```

overall structure

(not clicked & when searching)

- app
  - VideoList
    - VideoItem
    - VideoItem

(clicked)

- app
  - VideoDetail
  - VideoList
    - VideoItem
    - VideoItem

## 4. Reference

Dream Coding Lecture

- https://academy.dream-coding.com/

Google Youtube API

- Search
  - https://developers.google.com/youtube/v3/docs/search/list
- Most Popular
  - https://developers.google.com/youtube/v3/docs/videos/list

Other Resrouces

- https://www.youtube.com/watch?v=TE66McLMMEw
- Google Developer Console for getting API key
