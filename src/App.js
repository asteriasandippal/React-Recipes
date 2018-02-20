import React from 'react';
// import Logo from './static/images/logo.jpg';

import Header from './components/Header';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            recipes: [],
            currentRecipes: null,
        }
        this.onRecipeClick = this.onRecipeClick.bind(this);
    }
    componentDidMount() {
        fetch(`${API_URL}/v1/recipes`)
        .then(res => res.json())
        .then(recipes => {
            this.setState({recipes})
        });
    }
    onRecipeClick(id) {
        fetch(`${API_URL}/v1/recipes/${id}`)
        .then(res => res.json())
        .then(recipes => {
            this.setState({currentRecipes: recipes});
            console.log(recipes);
        });
    }
    render() {
        const {recipes, currentRecipes} = this.state;
        return (
            <div>
                <Header/>
                <main style={{display: 'flex'}}>
                    <RecipeList 
                        recipes={recipes} 
                        style={{flex: 3}}
                        onClick={this.onRecipeClick}
                    />
                    <RecipeDetails
                        currentRecipe={currentRecipes} 
                        style={{flex: 8}}
                    />
                </main>
            </div> 
        );
    }
}

export default App;
