import React from 'react'
import { Link, Outlet } from 'react-router-dom';


export const ProductIndex = () => {
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
    return (
        <div>
              <ul>
                {Object.entries(shoes).map(([productID,details]) => 
                (
                    <li key = {productID}>
                            <h2>{details.name}</h2>
                        <Link to = {productID}>

                            <img src = {details.image} alt={details.name}></img>
                        
                        </Link>
                    </li>
                )
                )}
            </ul>
        </div>
    )
}
