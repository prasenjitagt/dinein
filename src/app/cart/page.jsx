'use client'

import { globalContext } from "../context/global_context"
import Link from "next/link"
import { useState, useContext, useEffect } from "react"
import FoodCard from "../components/FoodCard"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { io } from "socket.io-client"
import localFont from "next/font/local"

const proxima = localFont({
    src: "../../../fonts/proxima.otf",
})

import { Bebas_Neue } from "next/font/google";
const Bebas = Bebas_Neue({
    weight: '400',
    subsets: ['latin'],

});

//connecting to socket server in backend
const socket = io("http://localhost:4848");

//console logging on establishing connection
socket.on('connection', (socket) => {
    console.log('socket connected id: ', socket.id);
})





const Order = () => {

    const handleConfirmOrder = () => {


        const modifiedPayload = cartItemsAndCount.map(eachItem => {
            const { image, ...everythingWithoutImage } = eachItem.item;

            return {
                item: everythingWithoutImage,
                itemCount: eachItem.itemCount
            };
        })


        socket.emit('orderFromClient', modifiedPayload);


    }


    const router = useRouter();

    //for controlling the dine in and take away section
    const [isDining, setIsDining] = useState(true);


    //getting Global Cart values
    const contextData = useContext(globalContext);


    //destructuring Global Cart Values
    const { cartItemsAndCount, handleAddtoCart, handleRemoveFromCart, tableNo, setTableNo } = contextData;


    //converting the price in paise and storing the total
    const totalPriceInPaise = cartItemsAndCount.reduce((totalAcc, eachCartItem) => {

        const priceInPaise = Number(eachCartItem.item.price) * eachCartItem.itemCount;



        return totalAcc + priceInPaise

    }, 0);

    // State to hold the total price in rupees
    const [totalPriceInRupees, setTotalPriceInRupees] = useState(0);

    //for changing the value of ITEM TOTAL
    useEffect(() => {

        const totalPrice = (totalPriceInPaise / 100).toFixed(2);
        setTotalPriceInRupees(totalPrice);

    }, [totalPriceInPaise]);



    //For getting gst details
    const [gstDetails, setGstDetails] = useState({
        sgst: 'loading...',
        cgst: 'loading...',
    });

    //For numeric value of gst
    const [numGstAndGt, setNumGstAndGt] = useState({
        numSgst: 'loading...',
        numCgst: 'loading...',
        grandTotal: 'loading...',
    });

    useEffect(() => {
        const fetchGstData = async () => {
            try {
                const fetchGstUrl = "http://localhost:4848/api/get-gst";
                const serverResponse = await fetch(fetchGstUrl);
                const data = await serverResponse.json();
                setGstDetails(data);

                // Move totalPriceInRupees calculation here
                const totalPrice = (totalPriceInPaise / 100).toFixed(2);

                const sgstFromServerFloat = parseFloat(data.sgst);
                const cgstFromServerFloat = parseFloat(data.cgst);

                const numberedSgstValue = ((totalPrice * sgstFromServerFloat) / 100);

                const numberedCgstValue = ((totalPrice * cgstFromServerFloat) / 100);

                const calculatedGrandTotal = ((totalPriceInPaise / 100) + numberedCgstValue + numberedSgstValue).toFixed(2);

                setNumGstAndGt({
                    numSgst: numberedSgstValue,
                    numCgst: numberedCgstValue,
                    grandTotal: calculatedGrandTotal
                });

            } catch (error) {
                console.error("Error fetching Gst data:", error);
            }
        };

        fetchGstData();
    }, [totalPriceInPaise]); // Empty dependency array means this effect runs once on mount










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

                {/* <div className="flex justify-between text-black">
                    <p>
                        Discount:
                    </p>
                    <p>
                        {`₹${`50`}`}
                    </p>
                </div> */}


                <div className="flex justify-between text-black">
                    <p>
                        {`SGST (${gstDetails.sgst}%) :`}
                    </p>
                    <p>
                        {`₹${numGstAndGt.numSgst}`}
                    </p>
                </div>
                <div className="flex justify-between text-black">
                    <p>
                        {`CGST (${gstDetails.cgst}%) :`}
                    </p>
                    <p>
                        {`₹${numGstAndGt.numCgst}`}
                    </p>
                </div>
                <div className="w-full bg-black h-[1px]">

                </div>
                <div className="flex justify-between text-black font-bold">
                    <p>
                        GRAND TOTAL :
                    </p>
                    <p>
                        {`₹${numGstAndGt.grandTotal}`}
                    </p></div>
            </section>

            <button onClick={handleConfirmOrder}>
                <Link href='' className="flex justify-between items-center mt-5 py-1 px-8 w-[85vw] rounded-2xl bg-myRed  text-white text-xl font-bold shadow-[0_5px_7px_2px_rgba(0,0,0,0.2)]">
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
            </button>


        </div>
    )
}

export default Order