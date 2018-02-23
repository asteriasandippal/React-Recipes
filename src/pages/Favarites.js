import React from 'react';
import PropTypes from 'prop-types';

import RecipeList from '../components/RecipeList';

function Favarites({ recipes, favorites, onFavorited }) {
  return (
    <div className="px4">
      <h2 className="h2">Favarites</h2>
      <RecipeList
        recipes={recipes.filter(r => favorites.includes(r.id))}
        favorites={favorites}
        onFavorited={onFavorited}
      />
    </div>
  );
}

Favarites.defaultProps = {
  recipes: [],
  favorites: [],
  onFavorited: () => {},
};

Favarites.propTypes = {
  recipes: PropTypes.array,
  favorites: PropTypes.array,
  onFavorited: PropTypes.func,
};

export default Favarites;
