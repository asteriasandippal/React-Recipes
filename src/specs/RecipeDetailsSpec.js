import React from 'react';
import renderer from 'react-test-renderer';
// import BrowserRouter from 'react-router-dom';
import RecipeDetails from '../components/RecipeDetails';

describe('<RecipeDetails/>', () => {
  let testRecipe;
  beforeEach(() => {
    testRecipe = {
      id: 1,
      name: 'Test Recipe',
      category: 'Test Category',
      ingredients: ['Ing 1', 'Ing 2'],
      steps: ['Step 1', 'Step 2'],
    };
  });
  test('Should render zero state', () => {
    const component = renderer.create(<RecipeDetails currentRecipe={testRecipe} />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('Should correctly asign a className', () => {
    const component = renderer.create(<RecipeDetails currentRecipe={testRecipe} className="classname-test" />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('Should render recipe without ingredients', () => {
    delete testRecipe.ingredients;
    const component = renderer.create(<RecipeDetails currentRecipe={testRecipe} />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('Should render recipe without steps', () => {
    delete testRecipe.steps;
    const component = renderer.create(<RecipeDetails currentRecipe={testRecipe} />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
