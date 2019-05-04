import React from 'react';

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
                     <a key={index} href={link.url}>{link.text}</a>
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
        height: '20px',
        margin:'0px',
        padding:'0px'
    },

}
export default AppBar;