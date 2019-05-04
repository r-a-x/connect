import React, {Component} from 'react';
import MentorCard from './MentorCard';


class MentorList extends Component {

    constructor(props){
        super(props);
        this.state = {};
        this.state.mentors = Array.from({length:10});
    }

    getData(){

        setTimeout(
            () => {
                this.setState((state) => 
                    ({
                        mentors: state.mentors.concat(Array.from({length:0}))
                    })
                )
            }
            ,1000);
    }

    hasMore(){
        return false;
    }

    render(){
        return (
            <div>
                <MentorCard name ="Shivam Bansal" bio="fdsfldsf;dsf;dslf;f;lkdsf;ldskf;d skf;lkds;a;lk;ldslkjflkdsjfdsflkdsajfjrueoiruoifhdsfkjdsfkdsjfdsalkfjlkdsjflkdsajfHi I am a shopkeeper"/>
                <div style = {{ display: 'flex', flexDirection:'column' }}>
                 {  this.state.mentors.map(
                        (mentor,index) =>
                            <MentorCard key={index} bio={index} name={"fdf"+String(index)}/>
                    )
                }
                </div>
            </div>
        );
    }

}

export default MentorList;