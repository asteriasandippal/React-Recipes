import React from 'react';
// import Logo from './static/images/logo.jpg';


import RecipeList from '../components/RecipeList';
import RecipeDetails from '../components/RecipeDetails';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
      currentRecipes: null,
    };
    this.onRecipeClick = this.onRecipeClick.bind(this);
  }
  componentDidMount() {
    fetch(`${API_URL}/v1/recipes`)
      .then(res => res.json())
      .then((recipes) => {
        this.setState({ recipes });
      });
  }
  onRecipeClick(id) {
    fetch(`${API_URL}/v1/recipes/${id}`)
      .then(res => res.json())
      .then((recipes) => {
        this.setState({ currentRecipes: recipes });
      });
  }
  render() {
    const { recipes, currentRecipes } = this.state;
    return (
      <div>
        <main className="px4 flex">
          <RecipeList
            recipes={recipes}
            style={{ flex: 3 }}
            onClick={this.onRecipeClick}
          />
          <RecipeDetails
            currentRecipe={currentRecipes}
            className="pl4"
            style={{ flex: 8 }}
          />
        </main>
      </div>
    );
  }
}

export default Home;
