import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import Sidebar from './Side-bar/Side-bar';

class App extends Component {

  checkfunct = () => {
    console.log(window.outerWidth);
    //return 0;
  }

  render() {
    return (
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">Welcome to React</h1>
      //   </header>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      // </div>
      <div>
        
        <Sidebar />
        <Header />
        <button type="button" onClick="checkfunct">click</button>


        
      </div>
    );
  }
}

export default App;
