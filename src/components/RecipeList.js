import React from 'react';
import PropTypes from 'prop-types';

import RecipeListItem from './RecipeListItem';

function RecipeList({
  recipes, onClick, onFavorited, favorites,
}) {
  return (
    <ul className="list-reset">
      {recipes.map(recipe => (
        <RecipeListItem
          key={recipe.id}
          recipe={recipe}
          onFavorited={onFavorited}
          favorites={favorites}
          onEventClick={onClick}
        />
        ))}
    </ul>
  );
}

RecipeList.defaultProps = {
  recipes: [],
  onClick: () => {},
  onFavorited: () => {},
  favorites: [],
};

RecipeList.propTypes = {
  recipes: PropTypes.array,
  onClick: PropTypes.func,
  onFavorited: PropTypes.func,
  favorites: PropTypes.array,
};

export default RecipeList;
