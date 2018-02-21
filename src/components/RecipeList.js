import React from 'react';
import PropTypes from 'prop-types';

function RecipeList({ style, recipes, onClick }) {
  return (
    <div style={style}>
      <h3 className="h2">Recipes</h3>
      <ul className="list-reset">
        {recipes.map(recipe => (
          <li
            key={recipe.id}
            className="py2 border-bottom border-bottom-dashed pointer"
            onClick={() => onClick(recipe.id)}
            onKeyDown={() => onClick(recipe.id)}
            role="presentation"
          >
            <span>{recipe.name}</span>
            <span>{recipe.category}</span>
          </li>
                ))}
      </ul>
    </div>
  );
}

RecipeList.defaultProps = {
  style: {},
  recipes: {},
  onClick: () => {},
};

RecipeList.propTypes = {
  style: PropTypes.object,
  recipes: PropTypes.object,
  onClick: PropTypes.func,
};

export default RecipeList;
