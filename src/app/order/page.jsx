'use client'

const foodData = require('../../../public/testData/foodData.json');
import Link from "next/link"
import { useState } from "react"
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

    const images = [
        "/foodItemPics/momos.jpg",
        "/foodItemPics/thali.jpg",
        "/foodItemPics/Shahi Paneer.jpg",
        "/foodItemPics/Gobi Manchurian.jpg",
        "/foodItemPics/burger.jpg"
    ]


    const [isClicked, setIsClicked] = useState(false);
    return (
        <div className={`h-[100vh] ${proxima.className} flex flex-col items-center px-2`}>

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
                {foodData.map((item, index) => {

                    return (
                        <FoodCard key={index} FooditemDetails={item} />
                    )

                })}
            </section>


            {/* Dine In */}
            <section className="flex w-[70vw] h-11  mt-5 shadow-lg rounded-2xl">
                <button className={`${isClicked ? `bg-myRed text-white` : ``} w-full rounded-l-xl  border-[1px] border-myRed`}>
                    Dine In
                </button>
                <button className={`${isClicked ? `` : `bg-myRed text-white`} w-full rounded-r-xl  border-[1px] border-myRed`} >
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
                        {`₹${`300`}`}
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