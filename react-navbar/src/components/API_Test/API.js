import React, {Component} from 'react';
import './API.css'

class API extends Component {

     constructor(props){
        super(props);
        this.state = {
            data: [],
            isLoaded: false,
        }
    } 

    componentDidMount(){

        fetch('https://api.github.com/users/hacktivist123/repos')
        .then(response => response.json())
        .then(data => console.log(data));
            
        
        
        

    }


    render(){

         var{ isLoaded, items} = this.state; 

       /*  if(!isLoaded){
            return <div>
                Loading...
            </div>;
        } */

        /* else { */
            return(
                <div>
                    <h1>
                        my Component has been mounted
                        </h1>
                        
                    

                    { <ul>
                        
                            <li>
                               {items}
                            </li>
                       

                    </ul> }

                </div>
        )
    }

}
export default API;

