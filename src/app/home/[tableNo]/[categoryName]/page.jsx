"use client"


import { globalContext } from '../../../context/global_context'
import { useState, useEffect, useContext } from "react";
import FoodCard from "../../../components/FoodCard.jsx";
import Image from "next/image"
import { useRouter } from "next/navigation"



// Fonts
import localFont from "next/font/local"
const proxima = localFont({
    src: "../../../../../fonts/proxima.otf",
})




export default function Categories({ params }) {
    const router = useRouter();

    //getting Global Cart values
    const contextData = useContext(globalContext);

    //destructuring Global Cart Values
    const { cartItemsAndCount, handleAddtoCart, handleRemoveFromCart, tableNo, setTableNo } = contextData;

    //for fetching food products
    const [foodItems, setFoodItems] = useState(['loading']);

    useEffect(() => {
        const fetchFoodData = async () => {
            try {
                const fetchFoodUrl = "http://localhost:4848/api/product-list";
                const serverResponse = await fetch(fetchFoodUrl); // Use fetchFoodUrl here
                const data = await serverResponse.json();
                setFoodItems(data);
            } catch (error) {
                console.error("Error fetching food data:", error);
            }
        };

        fetchFoodData();
        setTableNo(params.tableNo);
    }, []); // Empty dependency array means this effect runs once on mount


    //For couting how many items are there in cart
    const totalItems = cartItemsAndCount.reduce((totalAcc, eachCartItem) => {

        return totalAcc + eachCartItem.itemCount

    }, 0)




    const [isVegToggleOn, setIsVegToggleOn] = useState(false);
    const [isNonVegToggleOn, setIsNonVegToggleOn] = useState(false);

    const handleVegToggle = () => {
        if (isVegToggleOn === false && isNonVegToggleOn === true) {
            setIsVegToggleOn(true);
            setIsNonVegToggleOn(false);
        }
        else if (isVegToggleOn === false && isNonVegToggleOn === false) {
            setIsVegToggleOn(true);
        }
        if (isVegToggleOn === true) {
            setIsVegToggleOn(false);

        }

    }


    const handleNonVegToggle = () => {

        if (isVegToggleOn === true && isNonVegToggleOn === false) {
            setIsVegToggleOn(false);
            setIsNonVegToggleOn(true);
        }
        else if (isVegToggleOn === false && isNonVegToggleOn === false) {
            setIsNonVegToggleOn(true);
        }
        else if (isNonVegToggleOn === true) {
            setIsNonVegToggleOn(false);
        }


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
                    {`${params.categoryName}`}
                </p>
                <p>
                    {`MENU`}
                </p>


            </div>


            {/* Veg and Non-Veg Controll Area and View Cart*/}
            <div className="px-4 flex justify-between">

                {/* Veg and Non-Veg Controll Area */}
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



                {/* View Cart  Section */}

                <section className="text-center mb-2">
                    <p className="text-sm font-bold mb-1">
                        CART
                    </p>
                    {/* View Cart Button*/}

                    <div className="relative">

                        <Image
                            src='/icons/menuBottomNav.svg'
                            alt="Home"
                            width={30}
                            height={30}
                        />

                        <p className='absolute w-5 text-center top-0 right-0 bg-white opacity-90 font-bold rounded-badge text-sm'>
                            {`${totalItems}`}
                        </p>


                    </div>



                </section>


            </div>



            <div className="p-4  grid sm:grid-cols-1 lg:grid-cols-2 gap-2">

                {foodItems[0] === 'loading' ? (
                    <div className="flex h-[100vh] w-[100vw]   justify-center items-center">
                        <span className="loading loading-spinner text-success loading-lg"></span>
                    </div>

                ) : (
                    foodItems.map((item, index) => {

                        if (item.categoryOfProduct === params.categoryName) {
                            // Check if the item matches the selected vegetarian/non-vegetarian filter
                            if ((isVegToggleOn && item.typeOfProduct === 'Veg') || (isNonVegToggleOn && item.typeOfProduct === 'Non-Veg')) {
                                return <FoodCard key={index} FooditemDetails={item} />;
                            } else if (!isVegToggleOn && !isNonVegToggleOn) {
                                // If no filter is applied, show all items
                                return <FoodCard key={index} FooditemDetails={item} />;
                            }
                        }
                        return null; // Return null for items that don't match the filters



                    })

                )}






            </div>
        </>



    )
}
