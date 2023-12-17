'use client'

import Link from "next/link"
import Image from "next/image"

import CarouselManger from "./components/CarouselManger"




const Home = () => {


  const offerImageArr = ["/foodItemPics/Gobi Manchurian.jpg", "/foodItemPics/burger.jpg", "/foodItemPics/momos.jpg", "/foodItemPics/shahi Paneer.jpg", "/foodItemPics/thali.jpg"];


  const Catagory = [
    { "BIRYANI": "/icons/catagory/biryani.png" },
    { "PARATHA": "/icons/catagory/paratha.png" },
    { "BURGER": "/icons/catagory/bug.png" },
    { "BURGER": "/icons/catagory/bug.png" },
    { "BURGER": "/icons/catagory/bug.png" },
    { "BURGER": "/icons/catagory/bug.png" },
    { "BURGER": "/icons/catagory/bug.png" },
    { "BURGER": "/icons/catagory/bug.png" },
    { "BURGER": "/icons/catagory/bug.png" },
    { "BURGER": "/icons/catagory/bug.png" },
    { "BURGER": "/icons/catagory/bug.png" },
    { "BURGER": "/icons/catagory/bug.png" },
    { "BURGER": "/icons/catagory/bug.png" },
    { "BURGER": "/icons/catagory/bug.png" },
    { "BURGER": "/icons/catagory/bug.png" },
    { "BURGER": "/icons/catagory/bug.png" },
    { "BURGER": "/icons/catagory/bug.png" },
    { "BURGER": "/icons/catagory/bug.png" },
    { "BURGER": "/icons/catagory/bug.png" },

  ]



  return (
    <div className="flex flex-col items-center">

      {/* Resturant Title */}
      <p className="text-3xl mb-1 font-bold">{`The Kabab House`}</p>



      {/* SearchBar */}
      <section className="flex mb-5 lg:w-full md:w-full">
        <input type="text" className="transition-all h-9 duration-75 input focus:border-none input-success w-full " placeholder="Search items" />
        <button className="pl-2">
          <Image
            width={28}
            height={28}
            alt="menu"
            src={`/icons/search.svg`}
          />
        </button>
      </section>




      {/* Carousel Area */}
      <section
        className=" w-full border-2 border-orange-500 cert h-32 mt-3 mb-5 centerAll"
      >

        Carousel Area









      </section>




      {/* Catagory Area */}
      <section className=" w-full flex flex-col mb-4">

        <p className="text-lg self-center font-bold mb-2">
          Whats On your mind?
        </p>

        <div className="grid grid-rows-2 grid-flow-col gap-3 px-2 min-w-[100vw] overflow-x-scroll overscroll-contain no-scrollbar auto-cols-[27%]  "  >
          {Catagory.map((item, index) => {

            const objKeys = Object.keys(item);
            const objValues = item[objKeys];


            return (<div key={index} className=" centerAll " >

              <p
                className="font-normal text-[12px]"
              >{objKeys}</p>
              <Link href={`/biryani`}>
                <Image
                  className="h-[80px] w-auto aspect-square  "
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






      <section className="mt-4 w-full flex justify-center ">

        <button className="themedBtn mr-2 relative overflow-hidden">
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

        <button className="themedBtn ml-2  relative overflow-hidden">
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