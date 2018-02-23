import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Favarites from './pages/Favarites';
import Recipe from './pages/Recipe';
import NotFound from './pages/NotFound';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
      favorites: [],
      currentRecipes: null,
    };
    this.onRecipeClick = this.onRecipeClick.bind(this);
    this.toggleFavorite = this.toggleFavorite.bind(this);
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

  toggleFavorite(id) {
    console.log(id);
    this.setState(({ favorites, state }) => {
      const idx = favorites.indexOf(id);
      if (idx !== -1) {
        return {
          state,
          favorites: favorites.filter(f => f.id !== id),
        };
      }
      return {
        state,
        favorites: [...favorites, id],
      };
    });
  }
  render() {
    const { recipes, favorites, currentRecipes } = this.state;
    return (
      <div>
        <BrowserRouter>
          <main>
            <Header />
            <Switch>
              <Redirect from="/home" to="/" />
              <Route
                exact
                path="/"
                render={() =>
                  (<Home
                    recipes={recipes}
                    favorites={favorites}
                    currentRecipes={currentRecipes}
                    onRecipeClick={this.onRecipeClick}
                    toggleFavorite={this.toggleFavorite}
                  />)
                }
              />
              <Route
                path="/favarites"
                render={() => (<Favarites
                  recipes={recipes}
                  favorites={favorites}
                />)}
              />
              <Route
                path="/recipe/:id"
                component={Recipe}
              />
              <Route
                component={NotFound}
              />
            </Switch>
          </main>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
