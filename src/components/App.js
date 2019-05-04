import React from 'react';
import AppBar from './AppBar';
import LandingPage from './LandingPage';
import MentorList from './MentorList';

function App() {
  return (
    <div style={styles.container}>
      <AppBar logo="This is logo" links ={links}/>
      <LandingPage/>
      <MentorList/>
    </div>
  );
}
const styles = {
  container:{
    margin: '0px',
    padding: '0px'
  }
}

const links = [
  {url:'https://www.google.com', text:'google'},
  {url:'https://www.facebook.com', text:'facebook'}
];
export default App;
