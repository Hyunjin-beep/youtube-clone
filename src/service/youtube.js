class Youtube {
  constructor(httpClient) {
    this.youtube = httpClient
  }

  async mostPopular() {
    const response = await this.youtube.get('videos', {
      params: {
        part: 'snippet',
        chart: 'mostPopular',
        maxResults: 25,
      },
    })

    return response.data.items

    // const response = await fetch(`url`, this.getRequestOptions)
    // const result = await response.json()
    // return result.items
  }

  async search(query) {
    const response = await this.youtube.get('search', {
      params: {
        part: 'snippet',
        maxResults: 25,
        type: 'video',
        q: query,
      },
    })

    // id를 기존의 id가 아닌 (id {type:video#video, videoId:'sfsdf}) videoId로 변경
    return response.data.items.map(item => ({ ...item, id: item.id.videoId }))
  }
}
export default Youtube
