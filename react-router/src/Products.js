import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import { ProductDetails } from './ProductDetails';

export const Products = () => {


    return (
        <div>
            {/* //what we will do is: */}
            <h4>Products</h4>
            <Outlet></Outlet>
    
            
        </div>
    )
}
