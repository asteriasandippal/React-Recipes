import React from 'react';
import render from 'react-test-renderer';
import RecipeListItem from '../components/RecipeList';

const testRecipe = {
  id: 1,
  name: 'Test Recipe',
  category: 'Test Category',
};

describe('<RecipeListItem/>', () => {
  test('Should not break if no recipe passed', () => {
    const component = render.create(<RecipeListItem />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('Should correctly render recipe', () => {
    const component = render.create(<RecipeListItem recipe={testRecipe} />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
  test('Should render favorited state', () => {
    const component = render.create(<RecipeListItem recipe={testRecipe} favorited />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
