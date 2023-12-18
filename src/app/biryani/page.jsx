"use client"



import { useState } from "react";
import FoodCard from "../components/FoodCard";
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"

import localFont from "next/font/local"


const proxima = localFont({
    src: "../../../fonts/proxima.otf",
})




export default function Biryani() {

    const router = useRouter();

    const images = [
        "/foodItemPics/momos.jpg",
        "/foodItemPics/thali.jpg",
        "/foodItemPics/Shahi Paneer.jpg",
        "/foodItemPics/Gobi Manchurian.jpg",
        "/foodItemPics/burger.jpg"
    ]

    const [isVegToggleOn, setIsVegToggleOn] = useState(false);
    const [isNonVegToggleOn, setIsNonVegToggleOn] = useState(false);

    const handleVegToggle = () => {
        setIsVegToggleOn(prev => !prev);
    }


    const handleNonVegToggle = () => {
        setIsNonVegToggleOn(prev => !prev);
    }


    return (
        <>


            {/* Gradient Area */}
            <div className={`${proxima.className} relative text-center rounded-lg text-white py-4 mx-4 mb-4 bg-gradient-to-b from-red-600 to-myRed`}>
                <button
                    onClick={() => router.back()}

                    className="absolute left-2 top-2">
                    <Image
                        src={`/icons/lessThanWhite.svg`}
                        alt="dropdown"
                        height={25}
                        width={25}
                    />
                </button>
                <p className="font-bold text-xl">
                    {`BIRYANI`}
                </p>
                <p>
                    {`MENU`}
                </p>


            </div>



            <div className="px-4 flex justify-between">


                <section className="grid grid-cols-2">

                    <section className="">
                        <p className="text-sm font-bold mb-1">
                            VEG
                        </p>

                        <input type="checkbox" onChange={handleVegToggle} className={`toggle toggle-sm ${isVegToggleOn ? `bg-myGreenLight hover:bg-myGreenLight border-myGreenLight` : `bg-black border-black hover:bg-black`}`} checked={isVegToggleOn} />
                    </section>



                    <section className="text-center">
                        <p className="text-sm font-bold mb-1">
                            NON VEG
                        </p>

                        <input type="checkbox" onChange={handleNonVegToggle} className={`toggle toggle-sm ${isNonVegToggleOn ? `hover:bg-error bg-error border-error` : `bg-black border-black hover:bg-black`}`} checked={isNonVegToggleOn} />
                    </section>

                </section>




                <section className="text-center mb-2">
                    <p className="text-sm font-bold mb-1">
                        VIEW CART
                    </p>
                    {/* View Cart Button Section */}

                    <div className="flex items-center justify-between">

                        <div className="flex items-center justify-between px-3 font-bold text-center text-sm bg-myRed rounded-lg w-full text-white">
                            {`1 Item Added`}


                            <button>
                                <div className="dropdown dropdown-end">
                                    <div tabIndex={0} role="button" className="mt-1 ">
                                        <Image className="bg-myRed rounded-md "
                                            src={`/icons/dropdownArrow.svg`}
                                            alt="dropdown"
                                            height={25}
                                            width={25}
                                        />
                                    </div>
                                    <ul tabIndex={0} className="dropdown-content z-[1] menu text-black shadow bg-white rounded-box w-52">
                                        <li className=" hover:bg-myRed hover:text-white rounded-md"><a>HALF</a></li>

                                        <li className="hover:bg-myRed hover:text-white rounded-md"><a>FULL</a></li>
                                    </ul>
                                </div>
                            </button>

                        </div>

                    </div>



                </section>


            </div>



            <div className="p-4  grid sm:grid-cols-1 lg:grid-cols-2 gap-2">

                <FoodCard image={images[0]} />
                <FoodCard image={images[1]} />
                <FoodCard image={images[2]} />
                <FoodCard image={images[3]} />
                <FoodCard image={images[4]} />
            </div>
        </>
    )
}
