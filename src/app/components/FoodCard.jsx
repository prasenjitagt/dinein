"use client"

import { useState } from "react";
import Image from "next/image"
const FoodCard = ({ image }) => {
    const [showText, setShowText] = useState(false);
    const handleShowText = () => {
        setShowText(prev => !prev);
    }

    return (
        <div className="bg-base-100 rounded-xl p-4 shadow-xl min-w-[330px]">
            <div className="flex gap-2 ">

                <Image className="min-w-[100px] max-h-[100px] aspect-square overflow-hidden rounded-xl" height={150} width={150} alt={`food-item`} src={image} />

                <section className="flex flex-col justify-between ">

                    <section>
                        <p className="font-bold text-sm">{`BIRYANI`}</p>
                        <p className="text-myGreenDark">₹399</p>
                    </section>

                    <section>

                        <p className="font-bold text-sm">ABOUT</p>



                        <div className="flex relative">

                            <p className={`pr-2 text-justify text-[10px] ${showText ? null : (`line-clamp-2 `)} leading-3`}>
                                {`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi sint commodi vitae recusandae est dignissimos corporis dolor quaerat quae optio. `}

                                <button onClick={handleShowText} className=" text-[10px] font-bold lg:hidden md:hidden">
                                    {showText ? `less` : null}
                                </button>


                            </p>
                            <p className="min-w-[15px]">{``}</p>

                            <button onClick={handleShowText} className=" absolute right-0 bottom-0 text-[10px] font-bold lg:hidden md:hidden">
                                {showText ? null : `more`}
                            </button>


                        </div>
                    </section>

                    <section>
                        <div className="flex items-center justify-between">

                            <div className="flex items-center justify-between px-3 font-bold text-center text-base bg-myGreenDark rounded-lg w-full text-white">
                                {`HALF`}
                                <section className="flex">

                                    <button className="pr-2">
                                        <Image
                                            width={28}
                                            height={28}
                                            alt="menu"
                                            src={`/icons/minus.svg`}
                                        />
                                    </button>
                                    <p className="text-2xl font-normal">

                                        {`0`}
                                    </p>
                                    <button className="pl-2">
                                        <Image
                                            width={28}
                                            height={28}
                                            alt="menu"
                                            src={`/icons/cross.svg`}
                                        />
                                    </button>
                                </section>
                            </div>
                            <button>
                                <div className="dropdown dropdown-end">
                                    <div tabIndex={0} role="button" className="m-1 flex  ">
                                        <Image className="bg-myGreenDark rounded-md py-1
                                        "
                                            src={`/icons/dropdownArrow.svg`}
                                            alt="dropdown"
                                            height={25}
                                            width={25}
                                        />
                                    </div>
                                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                        <li className="hover:bg-myGreenDark hover:text-white rounded-md"><a>HALF</a></li>

                                        <li className="hover:bg-myGreenDark hover:text-white rounded-md"><a>FULL</a></li>
                                    </ul>
                                </div>
                            </button>
                        </div>

                    </section>
                </section>
            </div>

        </div>

    )
}

export default FoodCard