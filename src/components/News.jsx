import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  // articles = [
  //   {
  //     source: {
  //       id: "wired",
  //       name: "Wired",
  //     },
  //     author: "Arielle Pardes",
  //     title: "Miami’s Bitcoin Conference Left a Trail of Harassment",
  //     description:
  //       "For some women, inappropriate conduct from other conference-goers continued to haunt them online.",
  //     url: "https://www.wired.com/story/bitcoin-2022-conference-harassment/",
  //     urlToImage:
  //       "https://media.wired.com/photos/627a89e3e37e715cb7d760d2/191:100/w_1280,c_limit/Bitcoin_Miami_Biz_GettyImages-1239817123.jpg",
  //     publishedAt: "2022-05-10T16:59:46Z",
  //     content:
  //       "Now, even though there are a number of women-focused crypto spaces, Odeniran says women are still underrepresented. Ive been in spaces where Im the only Black person, or the only woman, or the only B… [+3828 chars]",
  //   },

  //   {
  //     source: {
  //       id: "the-verge",
  //       name: "The Verge",
  //     },
  //     author: "Justine Calma",
  //     title: "Why fossil fuel companies see green in Bitcoin mining projects",
  //     description:
  //       "ExxonMobil and other fossil fuel companies have turned to Bitcoin mining to address a gas problem. But their plans come with risks.",
  //     url: "https://www.theverge.com/2022/5/4/23055761/exxonmobil-cryptomining-bitcoin-methane-gas",
  //     urlToImage:
  //       "https://cdn.vox-cdn.com/thumbor/BZdljrBbt8tBl6oCCnckcDKqe6g=/0x90:4608x2503/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23435975/1240300988.jpg",
  //     publishedAt: "2022-05-04T12:00:00Z",
  //     content:
  //       "A Bitcoin mining site powered by otherwise lost gas from an oil well near Linden, Texas, on April 4th, 2022. | Photo by FRANCOIS PICARD/AFP via Getty Images Of all the corporate climate hype fl… [+6544 chars]",
  //   },

  //   {
  //     source: {
  //       id: null,
  //       name: "Gizmodo.com",
  //     },
  //     author: "Matt Novak",
  //     title:
  //       "Warren Buffett Says He Wouldn't Take All the Bitcoin in the World for $25",
  //     description:
  //       "Warren Buffett has always been a bitcoin skeptic. But the billionaire investor had his most harsh words yet for the cryptocurrency over the weekend. Buffett made it clear that his opposition to crypto has nothing to do with whether people can make money tradi…",
  //     url: "https://gizmodo.com/warren-buffett-all-bitcoin-world-25-dollars-assets-valu-1848866967",
  //     urlToImage:
  //       "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/bbc389f90510758bf8f4131a7e2cbacd.png",
  //     publishedAt: "2022-05-02T11:30:00Z",
  //     content:
  //       "Warren Buffett has always been a bitcoin skeptic. But the billionaire investor had his most harsh words yet for the cryptocurrency over the weekend. Buffett made it clear that his opposition to crypt… [+2297 chars]",
  //   },

  //   {
  //     source: {
  //       id: null,
  //       name: "Slashdot.org",
  //     },
  //     author: "msmash",
  //     title: "Bitcoin Has No Future as a Payments Network, Says FTX Chief",
  //     description:
  //       "Bitcoin has no future as a payments network because of its inefficiency and high environmental costs, according to one of crypto's most influential chief executives. From a report: Sam Bankman-Fried, founder of the digital asset exchange FTX, said the proof o…",
  //     url: "https://tech.slashdot.org/story/22/05/16/147235/bitcoin-has-no-future-as-a-payments-network-says-ftx-chief",
  //     urlToImage: "https://a.fsdn.com/sd/topics/bitcoin_64.png",
  //     publishedAt: "2022-05-16T14:07:00Z",
  //     content:
  //       "Sam Bankman-Fried, founder of the digital asset exchange FTX, said the proof of work system of validating blockchain transactions, which underpins bitcoin, was not capable of scaling up to cope with … [+1063 chars]",
  //   },
  // ];
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/everything?q=kedarnath&apiKey=a49d1e91946e41619c360c5c96264791&page=1&pageSize=12";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
    });
  }
  handleNextClick = async () => {
    console.log("next");
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / 12)) {
      alert('No more pages found')
    } else {
      let url = `https://newsapi.org/v2/everything?q=kedarnath&apiKey=a49d1e91946e41619c360c5c96264791&page=${
        this.state.page + 1
      }&pageSize=12`;
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);

      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
      });
    }
  };

  handlePreviousClick = async () => {
    console.log("previous");
    let url = `https://newsapi.org/v2/everything?q=kedarnath&apiKey=a49d1e91946e41619c360c5c96264791&page=${
      this.state.page - 1
    }&pageSize=12`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);

    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
    });
  };

  render() {
    return (
      <div className="container  my-3">
        <h1>NewMonkey - Top Headlines</h1>
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 45) : ""}
                  description={
                    element.description ? element.description.slice(0, 88) : ""
                  }
                  newsUrl={element.url}
                  imageUrl={element.urlToImage}
                />
              </div>
            );
          })}
        </div>

        <div className="container d-flex justify-content-center">
          <nav aria-label="Page navigation example">
            <ul className="pagination">
              <li className="page-item">
                <button
                  disabled={this.state.page <= 1}
                  onClick={this.handlePreviousClick}
                  type="button"
                  className="btn btn-dark"
                >
                  &laquo; Previous
                </button>
              </li>
              <li className="page-item">
                <button type="button" className="btn">
                  1
                </button>
              </li>
              <li className="page-item">
                <button type="button" className="btn ">
                  2
                </button>
              </li>
              <li className="page-item">
                <button type="button" className="btn">
                  3
                </button>
              </li>
              <li className="page-item">
                <button
                  type="button"
                  onClick={this.handleNextClick}
                  className="btn btn-dark"
                >
                  Next &raquo;
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default News;
