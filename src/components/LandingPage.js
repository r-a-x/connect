import React from 'react';
import AppBar from './AppBar';
import LandingImage from '../img/mentor.jpg';
import RoundButton from './RoundButton';

const links = [
    {url:'mentorlist', text:'Talk to Mentors'},
    {url:'http://localhost:3000/', text:'Sign up as a Mentor'}
  ];

const LandingPage = (props) => {

    return(
        <div>
            <AppBar logo="Home" links ={links} />
            <div style = {{
                display: 'flex',
                // flexDirection: 'column'
            }}>
                <div style = {{width:'50%'}}>
                    <img style = {{maxWidth:'100%'}} src = {LandingImage}/>
                </div>
                <div style = {{width :'50%', padding:"10px"}}>
                    Ever felt like that there is no one around you How can understand your situation.
                    No one around you matches the same level of expectations and other things
                </div>
            </div>
            <div style = {styles.container}>
                <div style = {styles.content}>
                    <div style = {{display:'flex',marginBottom:'24px'}}>
                        <h1 style = {{margin:'0px'}}>Join India's Largest learning platform</h1> 
                    </div>
                    <div style={{display:'flex', marginBottom:'24px'}}>
                        <h5 style={{margin:'auto'}}>Enroll in courses and watch lessons from India's best educators</h5>  
                    </div>
                    <div>
                        <div style={{display:'flex',justifyContent:'center'}}>
                            <RoundButton text = "Talk To Mentor" actionUrl ={ () => (props.history.push('/mentorlist'))}/>
                            <RoundButton text = "Signup"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const styles = {
    container:{
        height:'350px',
        backgroundColor:'pink',
        display:'flex',
        justifyContent:'center',
        alignContent:'center',
    },
    content: {
        margin:'auto'
    }
}
export default LandingPage;