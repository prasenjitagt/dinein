'use client'

import { globalContext } from "../context/global_context"
import Link from "next/link"
import { useState, useContext, useEffect } from "react"
import FoodCard from "../components/FoodCard"
import Image from "next/image"
import { useRouter } from "next/navigation"

import localFont from "next/font/local"

const proxima = localFont({
    src: "../../../fonts/proxima.otf",
})

import { Bebas_Neue } from "next/font/google";
const Bebas = Bebas_Neue({
    weight: '400',
    subsets: ['latin'],

});

const Order = () => {

    const router = useRouter();


    //getting Global Cart values
    const contextData = useContext(globalContext);


    //destructuring Global Cart Values
    const { cartItemsAndCount, handleAddtoCart, handleRemoveFromCart } = contextData;

    console.log(cartItemsAndCount);

    //converting the price in paise and storing the total
    const totalPriceInPaise = cartItemsAndCount.reduce((totalAcc, cartItem) => {

        const priceInPaise = Number(cartItem.item.price) * cartItem.itemCount;



        return totalAcc + priceInPaise

    }, 0);

    // State to hold the total price in rupees
    const [totalPriceInRupees, setTotalPriceInRupees] = useState(0);

    //for changing the value of ITEM TOTAL
    useEffect(() => {

        const totalPrice = (totalPriceInPaise / 100).toFixed(2);
        setTotalPriceInRupees(totalPrice);

    }, [totalPriceInPaise]);





    //for controlling the dine in section
    const [isDining, setIsDining] = useState(true);
    return (
        <div className={`h-[100vh]  flex flex-col items-center px-2`}>

            <section className="w-full flex  justify-center my-3 relative ">
                <button className="absolute left-6" onClick={() => router.back()}>

                    <Image
                        width={23}
                        height={23}
                        alt="back"
                        src={`/icons/lessThan.svg`}
                    />
                </button>
                <p className='text-xl font-bold '>My Orders</p>

            </section>


            {/* Orders view */}
            <section className="h-[40vh]  overflow-x-scroll rounded-b-lg p-4  grid sm:grid-cols-1 lg:grid-cols-2 gap-2">
                {

                    cartItemsAndCount && cartItemsAndCount.length > 0 ? (
                        cartItemsAndCount.map((eachItem, index) => {

                            return <FoodCard key={index} FooditemDetails={eachItem.item} />;


                        })
                    ) : (
                        <div className="centerAll text-xl font-bold">
                            No Items Yet
                        </div>
                    )

                }
            </section>


            {/* Dine in  and Take away*/}
            <section className="flex w-[70vw] h-11  mt-5 shadow-lg rounded-2xl">
                {/* Dine in */}
                <button onClick={() => setIsDining(true)} className={`${isDining ? `bg-myRed text-white` : ``} w-full rounded-l-xl  border-[1px] border-myRed`}>
                    Dine in
                </button>

                {/* Take away */}
                <button onClick={() => setIsDining(false)} className={`${isDining ? `` : `bg-myRed text-white`} w-full rounded-r-xl  border-[1px] border-myRed`} >
                    Take away
                </button>

            </section>


            {/* Bill Section */}
            <section className={`${Bebas.className} mt-5 p-4  w-[85vw] rounded-2xl bg-red-100 drop-shadow-lg`}>
                <div className="flex justify-between text-black ">
                    <p>
                        Item Total:
                    </p>
                    <p>
                        {`₹${totalPriceInRupees}`}
                    </p>
                </div>

                <div className="flex justify-between text-black">
                    <p>
                        Discount:
                    </p>
                    <p>
                        {`₹${`50`}`}
                    </p>
                </div>
                <div className="flex justify-between text-black">
                    <p>
                        {`SGST (3%) :`}
                    </p>
                    <p>
                        {`₹${`9`}`}
                    </p>
                </div>
                <div className="flex justify-between text-black">
                    <p>
                        {`CGST (3%) :`}
                    </p>
                    <p>
                        {`₹${`9`}`}
                    </p>
                </div>
                <div className="w-full bg-black h-[1px]">

                </div>
                <div className="flex justify-between text-black font-bold">
                    <p>
                        GRAND TOTAL :
                    </p>
                    <p>
                        {`₹${`268`}`}
                    </p></div>
            </section>

            <Link href='/thankyou' className="flex justify-between items-center mt-5 py-1 px-8 w-[85vw] rounded-2xl bg-myRed  text-white text-xl font-bold shadow-[0_5px_7px_2px_rgba(0,0,0,0.2)]">
                <p>
                    CONFIRM ORDER
                </p>
                <Image
                    width={45}
                    height={45}
                    alt="back"
                    src={`/icons/pan.svg`}
                />
            </Link>


        </div>
    )
}

export default Order