import React from 'react';

function RecipeDetails({style}) {
    return (
        <div style={style}>
            <h2>Strawberry-Mango Mesclun Recipe</h2>
            <img src="https://picsum.photos/600/300"/>
            <div>
                <span>Person</span>
                <span>scoopnana</span>
            </div>
            <h3>RecipeIngredient</h3>
            <ul>
                <li>1/2 cup sugar</li>
                <li>3/4 cup canola oil</li>
                <li>1 teaspoon salt</li>
                <li>1/4 cup balsamic vinegar</li>
                <li>8 cups mixed salad greens</li>
                <li>2 cups sweetened dried cranberries</li>
                <li>1/2 pound fresh strawberries, quartered</li>
                <li>1 mango - peeled, seeded, and cubed</li>
            </ul>
            <h3>Steps</h3>
            <ol>
                <li>Place the sugar, oil, salt, and vinegar in a jar with a lid. Seal jar, and shake vigorously to mix.</li>
                <li>In a large bowl, mix salad greens, sweetened dried cranberries, strawberries, mango, and onion. To serve, toss with dressing and sprinkle with almonds.</li>
            </ol>
        </div>
    )
}

export default RecipeDetails;