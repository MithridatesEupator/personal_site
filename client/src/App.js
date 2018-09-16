import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarCustom from "./components/NavbarCustom";
import BarCustom from "./components/BarCustom.js";
import ProfileCustom from "./components/ProfileCustom.js";
import WelcomeCustom from "./components/WelcomeCustom.js";

let bioPass = "Hello there, my name is Filip Saulean, or, as I go by on the internet, Mithridates Eupator. My personal site was built with React.js and node.js. One of my pluses is that I am a fast learner so that if you need me to learn a new library or language, I will do so in an expedient manner.";


class App extends Component {
  render() {
    return (
      <div className="App">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" crossOrigin="anonymous"  />
        <NavbarCustom />
        <div className="container-main">
            <WelcomeCustom />
            <a name="resume-container" className="anchor-custom">
            <ProfileCustom bio={bioPass}/>
            </a>
              <div className="post">
                <div className="post-head">
                Experiences
                </div>
                Javascript <br/>
                node.js <br/>
                react.js <br/>
                express.js <br/>
                Java <br/>
                C# <br/>
                MySql
              </div>
              <div className="post">
                <div className="post-head">
                  Contact Information
                </div>
                fsaulean@gmail.com <br/>
                fsaulean@uvm.edu <br/>
                808-315-5313
              </div>
          </div>
          <br />
      </div>

    );
  }
}

export default App;
