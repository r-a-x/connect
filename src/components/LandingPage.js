import React from 'react';
import AppBar from './AppBar';
import LandingImage from '../img/mentor.jpg';

const links = [
    {url:'mentorlist', text:'Talk to Mentors'},
    {url:'http://localhost:3000/', text:'Sign up as a Mentor'}
  ];

const LandingPage = () => {

    return(
        <div>
            <AppBar logo="This is logo" links ={links} />
            <div style = {{
                display: 'flex',
                // flexDirection: 'column'
            }}>
                <div style = {{width:'50%'}}>
                    <img style = {{maxWidth:'100%'}} src = {LandingImage}/>
                </div>
                <div style = {{width :'50%', padding:"10px"}}>
                    Whenever you stuck in your life. Sometimes it's better to talk to people who 
                    have already bin through the same circumstances.
                    Wether it's a morale boast or general talk. Our volunteer network of mentors
                    will be to help you with the needed guidance, emotional and mental support.
                </div>
            </div>
        </div>
    );
}

export default LandingPage;