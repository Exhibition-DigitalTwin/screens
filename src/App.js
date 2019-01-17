import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import './App.css';
import 'typeface-roboto';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import SideMenu from './SideMenu';

const divStyle = {
  width: '412px',
  height: '740px',
  backgroundColor: '#F2F2F2'
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
          <Grid
            container
            spacing={16}
            className="App"
            direction="row"
            justify="right"
            alignItems="flex-start">
            <Grid item xs={12}>
              <Grid key="switch" item>
              <BrowserRouter>
                <Switch>
                  <Route exact path="/" component={Home} />
                </Switch>
                </BrowserRouter>
                <SideMenu></SideMenu>
              </Grid>
            </Grid>
          </Grid>
        </React.Fragment>
      </div>
    );
  }
}

//Home component
const Home = props => (
  <div className="home" style={divStyle} >
    <SideMenu></SideMenu>
  </div>
);

export default App;