import React from 'react';
// import Logo from './static/images/logo.jpg';

import Header from './components/Header';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';

fetch(`${API_URL}/v1/recipes`)
    .then(res => res.json())
    .then(json => console.log(json));

class App extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <div style={{display: 'flex'}}>
                    <RecipeList style={{flex: 3}}/>
                    <RecipeDetails style={{flex: 8}}/>
                </div>
            </div> 
        );
    }
}

export default App;
