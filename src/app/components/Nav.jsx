'use client'

import Image from "next/image"
import Link from "next/link"
import { globalContext } from '../context/global_context'
import { useContext } from "react"



const Nav = () => {

    //getting Global Cart values
    const contextData = useContext(globalContext);

    //destructuring Global Cart Values
    const { cartItemsAndCount, handleAddtoCart, handleRemoveFromCart, tableNo, setTableNo } = contextData;


    return (
        <div className=" flex justify-between items-center pl-2 pr-4  w-full h-12  bg-white   rounded-lg shadow-[0_0px_10px_2px_rgba(0,0,0,0.2)]">
            <Link className="" href={`/home/${tableNo}`}>
                <Image
                    src='/icons/home.svg'
                    alt="Home"
                    width={43}
                    height={43}
                />
            </Link>
            <Link className="" href={`/order`}>
                <Image
                    src='/icons/spoonFork.svg'
                    alt="Home"
                    width={30}
                    height={30}
                />
            </Link>
            <Link className="" href={`/customerAccount`}>
                <Image
                    src='/icons/account.svg'
                    alt="Home"
                    width={30}
                    height={30}
                />
            </Link>
            <Link className="" href={`/cart`}>
                <Image
                    src='/icons/menuBottomNav.svg'
                    alt="Home"
                    width={30}
                    height={30}
                />
            </Link>

        </div>
    )
}

export default Nav