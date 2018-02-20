import React from 'react';

function RecipeList({style}) {
    return (
        <div style={style}>
            <h3>Recipes</h3>
            <ul>
                <li>
                    <span>Creepy halloween Skuill Cupcajkes</span>
                    <span>Decembers</span>
                </li>
                <li>
                    <span>Bluesverry Sour Cream Coffee Cakes</span>
                    <span>Dessert</span>
                </li>
                <li>
                    <span>Amazing Pork Tenderloin in the Slow Cooker</span>
                    <span>Meat</span>
                </li>
            </ul>
        </div>        
    )
}

export default RecipeList;