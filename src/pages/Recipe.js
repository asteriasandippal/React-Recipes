import React from 'react';
import PropTypes from 'prop-types';

import RecipeDetails from '../components/RecipeDetails';

class Recipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipe: null,
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    fetch(`${API_URL}/v1/recipes/${id}`)
      .then(res => res.json())
      .then((recipes) => {
        this.setState({ recipe: recipes });
      });
  }

  render() {
    return (
      <div>
        <RecipeDetails
          currentRecipe={this.state.recipe}
        />
      </div>
    );
  }
}

Recipe.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.node,
    }).isRequired,
  }).isRequired,
};


export default Recipe;
