import React from 'react';
import AppBar from './AppBar';
import LandingPage from './LandingPage';
import MentorPage from './MentorPage';
import { BrowserRouter, Switch, Route } from 'react-router-dom';



function App() {
  return (
    <div style={styles.container}>
      <BrowserRouter>
      <Switch>
          <Route exact path = "/" component = {LandingPage}/>
          <Route path = "/mentorlist" component = {MentorPage}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
const styles = {
  container:{
    margin: '0px',
    padding: '0px'
  }
}
export default App;
