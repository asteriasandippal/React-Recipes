import React from 'react';

function RecipeList({style, recipes, onClick}) {
    return (
        <div style={style}>
            <h3>Recipes</h3>
            <ul>
                {recipes.map(recipe => (
                    <li key={recipe.id}
                        onClick={() => onClick(recipe.id)}>
                        <span>{recipe.name}</span>
                        <span>{recipe.category}</span>
                    </li>
                ))}
            </ul>
        </div>        
    )
}

export default RecipeList;