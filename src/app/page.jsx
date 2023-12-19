'use client'


import Link from "next/link"
import Image from "next/image"
import CarouselCard from "./components/CarouselCard";

import localFont from "next/font/local"
import { useState, useEffect } from "react";
import WarnDesktop from "./components/WarnDesktop";
const proxima = localFont({
  src: "../../fonts/proxima.otf",
})


// import { Bebas_Neue } from "next/font/google";
// const Bebas = Bebas_Neue({
//   weight: '400',
//   subsets: ['latin'],

// });





const Home = () => {


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





  const Catagory = [
    { "BIRYANI": "/icons/catagory/biryani.png" },
    { "PARATHA": "/icons/catagory/paratha.png" },
    { "BURGER": "/icons/catagory/burger.png" },
    { "ICE CREAM": "/icons/catagory/ice_cream.png" },
    { "JUICE": "/icons/catagory/juice.png" },
    { "PIZZA": "/icons/catagory/pizza.png" },
    { "ROLL": "/icons/catagory/roll.png" },
    { "CHOWMIN": "/icons/catagory/chowmin.png" },
  ]


  // if (screenSize > 700)
  if (false) {
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
          {Catagory.map((item, index) => {

            const objKeys = Object.keys(item);
            const objValues = item[objKeys];


            return (<div key={index} className=" centerAll " >

              <p
                className="font-medium text-[12px] tracking-widest"
              >{objKeys}</p>
              <Link href={`/biryani`}>
                <Image
                  className="h-[65px] w-auto aspect-square  "
                  src={objValues}
                  alt="category"
                  width={100}
                  height={100}
                />
              </Link>
            </div>)
          }

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