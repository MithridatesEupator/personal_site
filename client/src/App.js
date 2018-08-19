import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarCustom from "./components/NavbarCustom";
import CarouselCustom from "./components/CarouselCustom";
import JumbotronCustom from "./components/JumbotronCustom";
import { Container } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <link crossorigin rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" crossorigin="anonymous"  />
        <NavbarCustom />
        <br />
        <br />
        <br />
        <Container className="container-custom">
          <CarouselCustom />
          <h1 className="display-3">
            Welcome to my site
          </h1>
          <p className="lead">This is the personal site of MithridatesEupator</p>
        </Container>
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
    );
  }
}

export default App;
