import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarCustom from "./components/NavbarCustom";
import BarCustom from "./components/BarCustom.js";
import ProfileCustom from "./components/ProfileCustom.js";
import ModalCustom from "./components/ModalCustom.js";

let bioPass = "This is the site of Mithridates Eupator. It was built with React.js and node.js."

class App extends Component {
  render() {
    return (
      <div className="App">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" crossOrigin="anonymous"  />
        <NavbarCustom />
        <div className="container-main">
          <BarCustom/>
          <div className="container-custom">
            <ProfileCustom bio={bioPass}/>
            <br />
            <br />
            <br />
            <ModalCustom buttonName="Resume"/>
            <a name="resume-container">
            </a>
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
