import React, { Component } from 'react';
import MentorList from './MentorList';
import AppBar from './AppBar';

const links = [
    {url:'mentorlist', text:'Talk to Mentors'},
    {url:'http://localhost:3000/', text:'Sign up as a Mentor'}
  ];
export const MentorPage = () => {
    return (
        <div>
            <AppBar logo="Home`" links ={links} />
            <div style = {styles.header}>
                Schedule a call with your mentor.
            </div>
            <MentorList/>
        </div>
    )
}

const styles = {
    header:{
        height:'40px',
        fontSize:'20px',
        float:'center'
    }
}
export default MentorPage;
