import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {Button} from '@material-ui/core';


// class RoundButton extends Component {
//     co
// }

const  RoundButton = ({text, actionUrl}) => {
    return (
        <Button style = {styles.container} onClick={actionUrl}>
            {text}
        </Button>
        // <div style = {styles.container}>
        //     {/* <Link to={actionUrl}>{text}</Link> */}
        // </div>
    );
 }

const styles = {
    container:{
        borderRadius:'20px',
        backgroundColor:'white',
        border:'solid 1px',
        margin:'auto',
        width: 'auto',
        height: '40px',
        minWidth: '120px',
        // maxWidth: '150px',
        padding: '0 20px',
        fontSize: '13px',
        fontWeight:'700',
        textAlign: 'center',
        margin: '4px',
        border: '1px solid #fff'
    },
}
export default RoundButton;