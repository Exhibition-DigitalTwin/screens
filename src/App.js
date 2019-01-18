import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import './App.css';
import 'typeface-roboto';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import SideMenu from './SideMenu';
import logo from './logo.svg';

const divStyle = {
  width: '70%',
  height: '100%',
  backgroundColor: '#1d1d1d'
};

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <React.Fragment>
          <CssBaseline />
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
          />
          <SideMenu></SideMenu>
              <BrowserRouter>
                <Switch>
                  <Route exact path="/" component={Home} />
                </Switch>
                </BrowserRouter>
        </React.Fragment>
      </div>
    );
  }
}

//Home component
const Home = props => (
  <div className="home" style={divStyle} >
     <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hi, I'm test text.
          </p>
  </div>
);

export default App;