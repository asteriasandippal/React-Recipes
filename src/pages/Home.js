import React from 'react';
// import Logo from './static/images/logo.jpg';

import RecipeList from '../components/RecipeList';
import RecipeDetails from '../components/RecipeDetails';

class Home extends React.Component {
  render() {
    const {
      recipes,
      currentRecipes,
      favorites,
      onRecipeClick,
      toggleFavorite,
    } = this.props;
    return (
      <div>
        <main className="px4 flex">
          <div style={{ flex: 3 }}>
            <h3 className="h2">Recipes</h3>
            <RecipeList
              recipes={recipes}
              favorites={favorites}
              onClick={onRecipeClick}
              onFavorited={toggleFavorite}
            />
          </div>
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
