import React from 'react'
import { useParams } from 'react-router-dom'

export const ProductDetails = () => {
    const shoes = {
        "shoe1":
        {
            name: "Lether Shoes",
            image: "https://images.pexels.com/photos/2562992/pexels-photo-2562992.png?auto=compress&cs=tinysrgb&dpr=1&w=500"

        },
        "shoe2":
        {
            name: "Sneakers",
            image: "https://images.pexels.com/photos/2529157/pexels-photo-2529157.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        },
        "shoe3":
        {
            name: "DMS",
            image: "https://images.pexels.com/photos/2325297/pexels-photo-2325297.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        }
    }

    const {productId} = useParams();
    console.log(productId)

    const product = shoes[productId];
    console.log(`Product: ${product}`)
    console.log(`Name: ${product.name}`)
    console.log(`Image: ${product.image}`)


    return (
        <div>
            <h1>Product Details</h1>
            <h1>{product.name}</h1>
            <img src= {product.image}></img>
     
        </div>
    )
}
