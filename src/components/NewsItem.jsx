import React, { Component } from "react";

export class NewsItem extends Component {
  

  render() {
      let {title, description, imageUrl, newsUrl} = this.props;
    return (
      <div className="my-3">
        <div className="card" style={{height:'45vh'}}>
          <img style={{height:'28vh'}} src={!imageUrl?'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSicTkH7igEwSn6CEEq6PcmvMZKEMhIev4ZgA&usqp=CAU':imageUrl} className="card-img-top" alt="/" />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">
              {description}...
            </p>
            <a href={newsUrl} target="_blank" rel="noreferrer" className=" my-2 btn btn-sm btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
