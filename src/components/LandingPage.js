import React from 'react';
import AppBar from './AppBar';

const links = [
    {url:'https://www.google.com', text:'Talk to Mentors'},
    {url:'https://www.facebook.com', text:'Sign up as a Mentor'}
  ];

const LandingPage = () => {

    return(
        <div>
            <AppBar logo="This is logo" links ={links} />
            Whenever you stuck in your life. Sometimes it's better to talk to people who 
            have already bin through the same circumstances.
            Wether it's a morale boast or general talk. Our volunteer network of mentors
            will be to help you with the needed guidance, emotional and mental support.
        </div>
    );
}

export default LandingPage;