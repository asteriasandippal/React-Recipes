import React from 'react';

function RecipeDetails({style, currentRecipe, className}) {
    if(!currentRecipe) {
        return (
            <div style={style} className={className}>
                <p className="h3 p2 bg-white italic center">Please select a recipw to see the details.</p>
            </div>
        )
    }
    return (
        <div style={style} className={className}>
            <div className="p2 bg-white">
                <h2 className="h2">{currentRecipe.name}</h2>
                <img className="fit" src={currentRecipe.image}/>
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
        </div>
    )
}

export default RecipeDetails;