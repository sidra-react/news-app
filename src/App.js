import "./App.css";
import News from "./News";
import Navbar from './Navbar';
import React, { Component } from 'react';
import Footer from "./Footer";
export default class App extends Component {
  c = 'nh';
  render() {
    return (
      <div>
        {}
        <head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="stylesheet" href="styles.css" />
        </head>
        
       
        <Navbar />
        <News />
        <Footer/>
        
      </div>
    );
  }
}
