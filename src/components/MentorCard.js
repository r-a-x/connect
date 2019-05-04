import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';



// The purpose of this card will be to show 
// the available mentors,
// !their profile pic,
// Their short intro and their life story.
// And call to action schedule the meeting
class MentorCard extends Component {

    // constructor(props){
    //     super(props);
    // }

    scheduleCall(){
        console.log("The user clicked on the call schedule");
    }

    render(){
        // this.props.name = "Rahul Bansal";
        return(
            <div>
            <Card style={{ margin: '8px 8px 8px 8px', padding: '8px 8px 8px 8px', width: '272px'}}>
                <CardContent>
                    <Typography variant="h5" component="h2">
                        {this.props.name}
                    </Typography>
                    <Typography component="p">
                        {this.props.bio}
                    </Typography>
                </CardContent>
                <CardActions>
                 <Button size="small" onClick={this.scheduleCall.bind(this)}>Schedule a call</Button>
                </CardActions>
            </Card>
            </div>
        );
    }

}

export default MentorCard;