import React from 'react';

function RecipeDetails({style, currentRecipe}) {
    if(!currentRecipe) {
        return (
            <div style={style}>
                <p>Please select a recipw to see the details.</p>
            </div>
        )
    }
    return (
        <div style={style}>
            <h2>{currentRecipe.name}</h2>
            <img src={currentRecipe.image}/>
            <div>
                <span>{currentRecipe.category}</span>
                <span>{currentRecipe.calories}</span>
            </div>
            <h3>RecipeIngredient</h3>
            <ul>
                {currentRecipe.ingredients.map(ingredient => (
                    <li key={ingredient}>
                        {ingredient}
                    </li>
                ))}
            </ul>
            <h3>Steps</h3>
            <ol>
                {currentRecipe.steps.map(step => (
                    <li key={step}>
                        {step}
                    </li>
                ))}
            </ol>
        </div>
    )
}

export default RecipeDetails;