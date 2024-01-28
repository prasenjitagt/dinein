"use client"

import { useState, useContext } from "react";
import { globalContext } from "../context/global_context";
import Image from "next/image"
const FoodCard = ({ FooditemDetails }) => {







    // Show and Hide text in about section
    const [showText, setShowText] = useState(false);
    const handleShowText = () => {
        setShowText(prev => !prev);
    }


    //destructuring the food details that got from parent
    const { _id, productName, imageUrl, typeOfProduct, categoryOfProduct, isAvailable, description } = FooditemDetails;

    //getting Global Cart Values
    const contextData = useContext(globalContext);

    //destructuring Global Cart Values
    const { cartItemsAndCount, handleAddtoCart, handleRemoveFromCart } = contextData;


    //function for using in find method
    const getProductCount = (product) => {

        return product.item && product.item['_id'] === _id;
    }

    //getting the current product count from globalcontext
    const currentProductCount = (cartItemsAndCount.find(getProductCount) || {}).itemCount || 0;


    return (
        <div className=" bg-base-100 rounded-xl p-2 drop-shadow-lg min-w-[330px]">
            <div className=" flex   relative">

                {/* Image */}
                <Image className=" min-w-[115px] max-h-[115px] aspect-square overflow-hidden rounded-xl" height={150} width={150} alt={`food-item`} src={imageUrl} />



                {/* Rating Stars */}
                <div className="rating rating-sm gap-1 absolute bottom-0 left-[10px]">
                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-400" />
                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-400" checked onChange={() => { }} />
                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-400" />
                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-400" />
                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-400" />
                </div>






                <section className=" pl-3 flex  justify-between w-full ">


                    {/* Name and About */}
                    <div className="flex flex-col justify-between " >


                        {/* Name */}
                        <p className="font-bold text-sm">{productName}</p>


                        {/* Price */}
                        <p className="text-myGreenDark">₹399</p>




                        {/* About Section */}
                        <section className="pb-3">

                            <p className="font-bold text-sm">ABOUT</p>



                            <div className="flex relative">

                                <p className={`pr-2 text-justify text-[10px] ${showText ? null : (`line-clamp-2 `)} leading-3`}>
                                    {description}

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


                    </div>



                    <div className="flex flex-col justify-center">
                        {/* Item Count , Plus , Minus Button */}
                        <div className="flex flex-col justify-between items-center ">

                            {/* <div className="flex flex-col justify-between items-center absolute -right-1 top-0 "> */}


                            {/* Minus Button */}
                            <button>
                                <Image
                                    className="bg-myRed rounded-[100%] h-[20px] w-[20px] p-1 opacity-90 border-[1px] border-myRed"
                                    width={10}
                                    height={10}
                                    alt="menu"
                                    src={`/icons/minus.svg`}
                                />
                            </button>


                            {/* Item Count */}
                            <p className="text-xl px-3 font-semibold">
                                {`${currentProductCount}`}
                            </p>



                            {/* Plus Button */}
                            <button onClick={() => handleAddtoCart(FooditemDetails)}>
                                <Image
                                    className="bg-myRed rounded-[100%] h-[20px] w-[20px] p-1 opacity-90 border-[1px] border-myRed"
                                    width={10}
                                    height={10}
                                    alt="menu"
                                    src={`/icons/add.svg`}
                                />
                            </button>
                        </div>


                    </div>




                </section>
            </div>

        </div>

    )
}

export default FoodCard