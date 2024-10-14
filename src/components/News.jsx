import React, { Component } from 'react'
import NewsItem from '../NewsItem'
// News api api key: f00bf515d38c4c93b5bebf4193230ab6
// url: https://newsapi.org/v2/top-headlines?country=us&apiKey=f00bf515d38c4c93b5bebf4193230ab6
export class News extends Component {

  constructor() {
    super();
    this.state = {
      articles: [],
      page: 1,
    }

  }
  async componentDidMount() {
    let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=f00bf515d38c4c93b5bebf4193230ab6"
    let data = await fetch(url)
    let parsedData = await data.json()
    this.setState({ articles: parsedData.articles })

  }

  handleNextClick = async()=>{
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=f00bf515d38c4c93b5bebf4193230ab6&page=${this.state.page+1}`
    let data = await fetch(url)
    let parsedData = await data.json()
    this.setState({ articles: parsedData.articles })
    this.setState = {
      page: 1
    }
  }
  render() {
    return (
      <div className="container my-3">
        <div className="row mx-3" >
        {this.state.articles.map((element) => {
            return <div className="col-md-4" key={element.urlToImage}>
              <NewsItem title={element?element.title:""} imageUrl={element ? element.urlToImage : ""} newsUrl={element ? element.url : ""}/>
            </div>
        })}
        </div>

        <button className="btn btn-primary btn-sm">Next</button>
      </div>
    )
  }
}

export default News
