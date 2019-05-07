import React from 'react';
import AppBar from './AppBar';
import LandingPage from './LandingPage';
import MentorList from './MentorList';
import { BrowserRouter, Switch, Route } from 'react-router-dom';



function App() {
  return (
    <div style={styles.container}>
      <BrowserRouter>
      <Switch>
          <Route exact path = "/" component = {LandingPage}/>
          <Route path = "/mentorlist" component = {MentorList}/>
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
