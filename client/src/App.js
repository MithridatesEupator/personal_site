import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarCustom from "./components/NavbarCustom";
import CarouselCustom from "./components/CarouselCustom";
import JumbotronCustom from "./components/JumbotronCustom";
import BreadcrumbCustom from "./components/BreadcrumbCustom.js"
import { Container } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <link crossOrigin rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" crossOrigin="anonymous"  />
        <NavbarCustom />
        <br />
        <div className="container-main">
          <div className="container-welcome">
            FRONTEND DEVELOPER
          </div>
          <div className="container-custom">
            <BreadcrumbCustom />
            This is the personal site of Mithridates Eupator
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
