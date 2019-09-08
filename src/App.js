import React from "react";
import "./App.css";
import { connect } from "react-redux";
import handleGetQuote from "./actions/quotes";
import LoadingOverlay from "react-loading-overlay";
import Quotebox from "./components/Quotebox";
class App extends React.Component {

  componentDidMount() {
    this.props.dispatch(handleGetQuote());
  }

  render() {
    return (
      <div className="App">
        <div className="section">
          <LoadingOverlay
            active={this.props.loading}
            spinner
            text="Loading your content..."
          >
            { this.props.loading || <Quotebox/> }
          </LoadingOverlay>
        </div>
      </div>
    );
  }
}
export default connect()(App);
