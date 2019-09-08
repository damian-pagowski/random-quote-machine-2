import React from "react";
import { connect } from "react-redux";
import handleGetQuote from "../actions/quotes";
class Quotebox extends React.Component {
  state = {
    quote: "",
    author: "",
  };

  handleClick = e => {
    this.props.dispatch(handleGetQuote());
    this.setState({ ...this.props.quote });
    e.preventDefault();
  };

  render() {
    return (
      <div id="quote-box">
        <h1>Quote Of The Day</h1>

        <p className="lead">
          <i className="fa fa-quote-left" />
          <span id="text">
            {this.props.quotes ? this.props.quotes.quote : this.state.quote}
          </span>
        </p>

        <div className="quote-author" id="author">
          - {this.props.quotes ? this.props.quotes.author : this.state.author}
        </div>
        <div className="social-media">
          <a id="" href="#" className="fa fa-facebook" />
          <a
            id="tweet-quote"
            href="twitter.com/intent/tweet"
            className="fa fa-twitter"
          />
        </div>
        <button
          id="new-quote"
          type="button"
          className="btn btn-outline-dark text-light"
          onClick={this.handleClick}
        >
          Get Another
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { quotes } = state;
  console.log("mapStateToProps " + JSON.stringify(quotes));

  return {
    quotes,
  };
}
export default connect(mapStateToProps)(Quotebox);
