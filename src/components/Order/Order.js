import React from 'react';
import classes from './Order.module.css';
const order = (props) => {
    const ingredients = [];
    for (let ingredientName in props.ingredients) {
        ingredients.push(
            {
                name: ingredientName,
                amount: props.ingredients[ingredientName]
            }
        );
    }
    const ingredientOutput = ingredients.map(ig => {

        return <span key={ig.name}
            style={{
                textTransform: "capitalize",
                display: 'inline-block',
                border: '1px solid #ccc',
                margin: '0 8px',
                padding: '5px'
            }}
        >{ig.name} ({ig.amount}) </span>
    })

    // const data = { ...props.orderData };
    // const dataOutput = [];
    // console.log(data);
    // for (let key in data) {
    //     dataOutput.push(
    //         {
    //             name: key,
    //             value: props.orderData[key]
    //         }
    //     );
    // }
    // console.log(dataOutput);
    // const dataOutput1 = dataOutput.map(ig => {

    //     return <span key={ig.name}
    //         style={{
    //             textTransform: "capitalize",
    //             display: 'block',
    //             margin: '3px 8px',
    //             padding: '5px'
    //         }}
    //     >{ig.name}:  {ig.value} </span>
    // })

    return (
        <div className={classes.Order}>
            <p>Ingrdients: {ingredientOutput}</p>
            {/* <p>Contact Information: {dataOutput1}</p> */}
            <p>Price: <strong>USD{props.price}</strong></p>
        </div>)
};

export default order;