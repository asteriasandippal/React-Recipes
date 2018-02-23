import React from 'react';
import PropTypes from 'prop-types';

function RecipeListItem({
  recipe, onFavorited, favorites, onEventClick,
}) {
  return (
    <li
      className="py2 border-bottom border-bottom-dashed pointer"
      onClick={() => onEventClick(recipe.id)}
      onKeyDown={() => onEventClick(recipe.id)}
      role="presentation"
    >
      <span
        className="mr1"
        onClick={(e) => {
        e.stopPropagation();
        onFavorited(recipe.id);
      }}
        onKeyDown={() => onFavorited(recipe.id)}
        role="presentation"
        aria-label="favorite"
      >
        {favorites.includes(recipe.id) ? '✔' : '❑'}
      </span>
      <span>{recipe.name}</span>
      <span>{recipe.category}</span>
    </li>
  );
}

RecipeListItem.defaultProps = {
  recipe: {},
  onEventClick: () => {},
  onFavorited: () => {},
  favorites: [],
};

RecipeListItem.propTypes = {
  recipe: PropTypes.object,
  onEventClick: PropTypes.func,
  onFavorited: PropTypes.func,
  favorites: PropTypes.array,
};

export default RecipeListItem;

