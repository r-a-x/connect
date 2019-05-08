import React from 'react';
import { Link } from 'react-router-dom'

// links will have text and the link to the other page or component etc
const AppBar = ({logo, links}) => {
    return(
        <div style={styles.container}> 
            <div>
                logo
            </div>
            <div >
                {
                    links.map( (link, index) => (
                     <Link key={index} to={link.url}>{link.text}</Link>
                    ))
                }
            </div>
        </div>
    );
}

const styles = {
    container:{
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: 'pink',
        height: '40px',
        margin:'0px',
        padding:'0px'
    },

}
export default AppBar;