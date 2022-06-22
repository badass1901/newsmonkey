import React, { Component } from "react";
import './styles/NewsItem.css'

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
    return (
      <div className="my-3">
        
        <div className="card">
        <span className="badge rounded-pill bg-danger notification" style={{zIndex:'1'}}>{source}</span>
          <img
            src={
              !imageUrl
                ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSicTkH7igEwSn6CEEq6PcmvMZKEMhIev4ZgA&usqp=CAU"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}...
            
              </h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className="text-muted">
                <b>By: {!author ? "Unknown" : author}</b> on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              href={newsUrl}
              target="_blank"
              rel="noreferrer"
              className=" my-2 btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
