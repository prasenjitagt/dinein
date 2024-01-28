"use client"

import { createContext, useState } from "react";


export const globalContext = createContext();


const CartProvider = ({ children }) => {

    const [cartItemsAndCount, setCartItemsAndCount] = useState([
        {
            item: {
                _id: 'abc',
                itemCount: 0
            }
        }


    ]);

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
                // if (copyCartItemsAndCount[indexOfCurrentItem].itemCount === 0) {
                //     copyCartItemsAndCount.splice(indexOfCurrentItem, 1);
                // }
            }

            setCartItemsAndCount(copyCartItemsAndCount);
        }

    }


    return (

        <globalContext.Provider value={{ cartItemsAndCount, handleAddtoCart, handleRemoveFromCart }}>
            {children}
        </globalContext.Provider>

    )

}

export default CartProvider;