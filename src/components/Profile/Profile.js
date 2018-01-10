import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from "axios";

export default class Profile extends Component {
    constructor(){
        super()

        this.state = {
            // recipeID: props.match.params.id,
            // searchFilter: "matches",
            // recipes:[]
        };
    }

    handleFavorites(){
        axios
            .get(
                `http://api.yummly.com/v1/api/recipe/${
                    this.state.recipeID
                  }?_app_id=b31967e8&_app_key=aa5e272aeecc1ebff7f5a6003d03c0fb`
            ) 
            .then(res => {
                console.log(res.data);
                this.setState({profile: res.data})
            })
    }

        render(){
            return(
                <div>
                    
                    <h3>Profile</h3>
                    
                </div>
            )
        }
}