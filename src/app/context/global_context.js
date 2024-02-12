"use client"

import { createContext, useState, useEffect } from "react";


export const globalContext = createContext();


const CartProvider = ({ children }) => {


    //for determining table no.
    const [tableNo, setTableNo] = useState(0);

    const [cartItemsAndCount, setCartItemsAndCount] = useState([]);

    const handleAddtoCart = (cartItem) => {

        let copyCartItemsAndCount = [...cartItemsAndCount];

        const indexOfCurrentItem = copyCartItemsAndCount.findIndex(product => product.item['_id'] === cartItem['_id']);

        if (indexOfCurrentItem === -1) {
            // if item not present in the array
            copyCartItemsAndCount.push({ item: cartItem, itemCount: 1 });
        } else {
            // if item already present in the increase count by 1
            copyCartItemsAndCount[indexOfCurrentItem].itemCount += 1;
        }

        setCartItemsAndCount(copyCartItemsAndCount);


        localStorage.setItem('cartItems', JSON.stringify(copyCartItemsAndCount));
    }

    const handleRemoveFromCart = (cartItem) => {

        let copyCartItemsAndCount = [...cartItemsAndCount];

        const indexOfCurrentItem = copyCartItemsAndCount.findIndex(product => product.item['_id'] === cartItem['_id']);

        if (indexOfCurrentItem !== -1) {
            // If item is present in the array
            if (copyCartItemsAndCount[indexOfCurrentItem].itemCount > 0) {
                // Decrement the item count
                copyCartItemsAndCount[indexOfCurrentItem].itemCount -= 1;

                // If the count becomes 0, you may remove the item from the cart (optional)
                if (copyCartItemsAndCount[indexOfCurrentItem].itemCount === 0) {
                    copyCartItemsAndCount.splice(indexOfCurrentItem, 1);
                }
            }

            setCartItemsAndCount(copyCartItemsAndCount);

            localStorage.setItem('cartItems', JSON.stringify(copyCartItemsAndCount));

        }


    }


    useEffect(() => {
        setCartItemsAndCount(JSON.parse(localStorage.getItem('cartItems')) || []);


    }, [])






    /*-----------------------------Area for determinging current page-----------------------------------*/

    //for setting current page 
    const [currentPage, setCurrentPage] = useState("");



    return (

        <globalContext.Provider value={{ cartItemsAndCount, handleAddtoCart, handleRemoveFromCart, tableNo, setTableNo, currentPage, setCurrentPage }}>
            {children}
        </globalContext.Provider>

    )

}

export default CartProvider;