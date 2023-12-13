import FoodCard from "./components/FoodCard";

export default function Home() {

  const images = [
    "/foodItemPics/momos.jpg",
    "/foodItemPics/thali.jpg",
    "/foodItemPics/Shahi Paneer.jpg",
    "/foodItemPics/Gobi Manchurian.jpg"
  ]

  return <div className="p-4 bg-slate-300">
    <FoodCard image={images[2]} />
  </div>;
}
