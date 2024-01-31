'use client'

import { globalContext } from '../../context/global_context'
import Link from "next/link"
import Image from "next/image"
import CarouselCard from "../../components/CarouselCard";
import localFont from "next/font/local"
import { useState, useEffect, useContext } from "react";
import WarnDesktop from "../../components/WarnDesktop";
const proxima = localFont({
    src: "../../../../fonts/proxima.otf",
})







const Home = ({ params }) => {

    //for getting categories from server
    const [categories, setCategories] = useState(['loading']);

    //getting Global Cart values
    const contextData = useContext(globalContext);

    //destructuring Global Cart Values
    const { cartItemsAndCount, handleAddtoCart, handleRemoveFromCart, tableNo, setTableNo } = contextData;


    useEffect(() => {
        const fetchCategoryData = async () => {
            try {
                const fetchCategoriesUrl = "http://localhost:4848/api/get-categories";
                const serverResponse = await fetch(fetchCategoriesUrl); // Use fetchCategoriesUrl here
                const data = await serverResponse.json();
                setCategories(data);
                setTableNo(params.tableNo)
            } catch (error) {
                console.error("Error fetching category data:", error);
            }
        };

        fetchCategoryData();
    }, []); // Empty dependency array means this effect runs once on mount



    //for controlling the user not to use desktop mode
    const [screenSize, setScreenSize] = useState(0);

    //code for preventing desktop sites
    useEffect(() => {
        function handleResize() {
            setScreenSize(window.innerWidth)
        }

        window.addEventListener("resize", handleResize)

        handleResize()

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [screenSize])









    if (screenSize > 700) {
        return (<WarnDesktop />)
    }


    return (




        <div className={`${proxima.className} flex flex-col items-center h-[100vh]`} >

            {/* Resturant Title */}
            <p className={` text-3xl mb-1 mt-2 font-normal`}>{`THE KABAB HOUSE`}</p>



            {/* SearchBar */}
            <section className={` flex  mb-5 p-1 w-[320px] border-[1px] rounded-full border-black`}>
                <Image
                    className="opacity-30 mx-2"
                    width={20}
                    height={20}
                    alt="menu"
                    src={`/icons/search.svg`}
                />
                <input type="text" className="focus:outline-none " placeholder="Search items" />

            </section>




            {/* Carousel Area */}
            <div

                className="w-full mb-11 ">

                <CarouselCard />
            </div>




            {/* Catagory Area */}
            <section className=" w-full flex flex-col mb-7 overscroll-contain">

                <p className="text-xl self-center font-bold mb-2 tracking-wider">
                    Whats On your mind?
                </p>

                <div className="grid grid-rows-2 grid-flow-col gap-1 px-2 min-w-[100vw] overflow-x-scroll  no-scrollbar auto-cols-[28%]  "  >


                    {categories[0] === 'loading' ? (
                        <div className="flex h-[100vh] w-[100vw]   justify-center items-center">
                            <span className="loading loading-spinner text-success loading-lg"></span>
                        </div>

                    ) : (
                        categories.map((item, index) => {

                            //destructuring each category came from backend
                            const { categoryName, imageUrl, _id } = item;

                            return (<div key={_id} className=" centerAll " >

                                <p
                                    className="font-medium text-[12px] tracking-widest"
                                >{categoryName}</p>
                                <Link href={`/home/${params.tableNo}/${categoryName}`}>
                                    <Image
                                        className="h-[65px] w-auto aspect-square  "
                                        src={imageUrl}
                                        alt="category"
                                        width={100}
                                        height={100}
                                    />
                                </Link>
                            </div>)

                        })

                    )}


                </div>



            </section>




            {/* Review and Best Items */}

            <section className="mt-4 w-full flex justify-center mb-16">

                <button className="themedBtn mr-2 relative overflow-hidden tracking-widest">
                    <Link
                        href={`/best-items`}>

                        BEST ITEMS

                        <div className="absolute bottom-0 right-0 -rotate-12 translate-x-1 translate-y-1 opacity-60  inline-block" >

                            <Image
                                className=""
                                width={50}
                                height={50}
                                alt="review-icon"
                                src={`/icons/dish.svg`}
                            />
                        </div>

                    </Link>
                </button>

                <button className="themedBtn ml-2  relative overflow-hidden tracking-widest">
                    <Link
                        href={`/review-zone`}>

                        REVIEW ZONE

                        <div className="absolute bottom-0 right-0 -rotate-12 translate-x-1 translate-y-1 opacity-60  inline-block" >

                            <Image
                                className=""
                                width={50}
                                height={50}
                                alt="review-icon"
                                src={`/icons/review.svg`}
                            />
                        </div>


                    </Link>

                </button>

            </section>


        </div >



    )
}

export default Home