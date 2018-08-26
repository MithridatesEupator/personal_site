import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarCustom from "./components/NavbarCustom";
import BarCustom from "./components/BarCustom.js";
import ProfileCustom from "./components/ProfileCustom.js";

let bioPass = "This is the site of Mithridates Eupator. It was built with React.js and node.js."

class App extends Component {
  render() {
    return (
      <div className="App">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" crossOrigin="anonymous"  />
        <NavbarCustom />
        <br />
        <br />
        <div className="container-main">
          <BarCustom value="WELCOME"/>
          <div className="container-custom">
            <ProfileCustom bio={bioPass}/>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <a name="resume-container">
            </a>
            <p>
            This is a test
            </p>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
