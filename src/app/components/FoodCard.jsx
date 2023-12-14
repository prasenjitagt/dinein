"use client"

import { useState } from "react";
import Image from "next/image"
const FoodCard = ({ image }) => {
    const [more,setMore] = useState(false);
    const handleMore = () =>{
        setMore(more => !more);
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
                        <div className="">

                        <p className={`text-justify text-[10px] ${more? (``):(`line-clamp-2 `)} leading-3`}>
                            {`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi sint commodi vitae recusandae est dignissimos corporis dolor quaerat quae optio.`}
                        </p>
                            <button onClick={handleMore} className="text-[10px] font-bold">
                            {`${more? (`less`):(`more`)}`}
                        </button>


                        

                        </div>
                    </section>

                    <section>
                        <div className="flex items-center justify-between">

                            <div className="flex items-center justify-between px-3 font-bold text-center text-base bg-myGreenDark rounded-lg w-full text-base-100">
                                {`HALF`}
                                <section>

                                    <button className="text-xl px-2">
                                        {`-`}
                                    </button>
                                    {`0`}
                                    <button className="text-xl px-2">
                                        {`+`}
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
                                        <li className="hover:bg-myGreenDark hover:text-base-100 rounded-md"><a>HALF</a></li>

                                        <li className="hover:bg-myGreenDark hover:text-base-100 rounded-md"><a>FULL</a></li>
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