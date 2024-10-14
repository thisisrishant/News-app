import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, desc, imageUrl, newsUrl} = this.props;
    return (
      <div>
        {/* <div className="card" style="width: 18rem;"> */}
        <div className="card" style={{width:"18rem"}}>
          <img src={imageUrl?imageUrl:"https://dummyimage.com/600x400/000/fff&text=image+not+found"} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{desc}</p>
            <a href={newsUrl} target='_blank' rel="noreferrer" className='btn btn-primary btn-sm'>read more</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
