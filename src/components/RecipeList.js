import React from 'react';

function RecipeList({style, recipes, onClick}) {
    return (
        <div style={style}>
            <h3 className="h2">Recipes</h3>
            <ul className="list-reset">
                {recipes.map(recipe => (
                    <li key={recipe.id}
                        className="py2 border-bottom border-bottom-dashed pointer"
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