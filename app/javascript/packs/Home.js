import React from "react";
import Index from "../components/Home/Index";
import WebpackerReact from 'webpacker-react';

 
class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
          <Index/>
      </React.Fragment>
    );
  }
}

export default Home;

WebpackerReact.setup({ Home });