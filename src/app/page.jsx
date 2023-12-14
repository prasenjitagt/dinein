import FoodCard from "./components/FoodCard";

export default function Home() {

  const images = [
    "/foodItemPics/momos.jpg",
    "/foodItemPics/thali.jpg",
    "/foodItemPics/Shahi Paneer.jpg",
    "/foodItemPics/Gobi Manchurian.jpg",
    "/foodItemPics/burger.jpg"
  ]

  return (
    <>
      <div className="text-center rounded-lg text-base-100 py-4 mx-4 mb-4 bg-gradient-to-b from-myGreenDark to-myGreenLight">
        <p className="font-bold text-xl">
          {`BIRYANI`}
        </p>
        <p>
          {`MENU`}
        </p>

        
      </div>
      <div className="px-4">

      <section className="">
          <p>
            VEG
          </p>
        </section>
      </div>
      <div className="p-4 bg-slate-300 grid sm:grid-cols-1 lg:grid-cols-2 gap-4">

        <FoodCard image={images[0]} />
        <FoodCard image={images[1]} />
        <FoodCard image={images[2]} />
        <FoodCard image={images[3]} />
        <FoodCard image={images[4]} />
      </div>
    </>
  )
}
