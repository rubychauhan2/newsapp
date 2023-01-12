import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, description, imageUrl, newsUrl, author, date} = this.props;
    return (
        <div className="my-3">
            <div className="card">
            
                <img src={!imageUrl?"https://swaddle-wkwcb6s.stackpathdns.com/wp-content/uploads/2022/11/281122_measles-vax-inequality_Editorial.png":imageUrl} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                                                                                                                           
                    <p className="card-text">{description}</p>
                    <p className="card-text"><small className="text-muted">By {!author?"Unknown": author} on {new Date(date).toGMTString()}</small></p>
                    <a href={newsUrl} className="btn btn-sm btn-dark">Read more</a>
                </div>
            </div>
        </div>
    )
}
}

export default NewsItem