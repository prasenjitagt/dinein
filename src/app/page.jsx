import Link from "next/link"
import Image from "next/image"
import CarouselCard from "./components/CarouselCard"
const Home = () => {
  return (
    <div className="text-center px-3 h-[100vh]">
      <p className="text-3xl mb-1 font-bold">{`The Kabab House`}</p>
      <section className="flex">
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

      <section>
        <CarouselCard />
      </section>


      <Link className="btn btn-info" href="/biryani">
        Biryani page
      </Link>
    </div >
  )
}

export default Home