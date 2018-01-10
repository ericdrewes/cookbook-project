import React, {Component} from 'react';
import axios from 'axios'

export default class Favorites extends Component {
    constructor(){
        super()


        this.state = {
            recipeID:props.match.params.id,
            searchFilter: 'matches',
            favoriteRecipes: []
        }
    }

    componentDidMount(){
        axios
            .get(
                `http://api.yummly.com/v1/api/recipe/${
                    this.state.recipeID
                  }?_app_id=b31967e8&_app_key=aa5e272aeecc1ebff7f5a6003d03c0fb`
                )
                .then(res => {
                  console.log(res.data);
                  this.setState({ recipe: res.data });
                });
            
    }
    render(){
        console.log(this.props)
        return(
                <button>
                    FAVORITE
                </button>
        )
    }
}