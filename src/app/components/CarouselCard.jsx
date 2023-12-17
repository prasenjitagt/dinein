import Image from "next/image"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
const CarouselCard = () => {
    const offerImageArr = [

        "/foodItemPics/test.jpg",
        "/foodItemPics/test2.jpg",
        "/foodItemPics/test3.jpg",
        "/foodItemPics/test.jpg",

    ];
    return (
        <Carousel
            showThumbs={false}
            showStatus={false}
            showArrows={false}
            centerMode
            emulateTouch
            autoPlay
            infiniteLoop
            interval={2000}

        >
            {offerImageArr.map((imgUrl, index) => (


                <div
                    key={index}
                    className=" w-[70vw] centerAll "
                >

                    <Image
                        className="rounded-2xl drop-shadow-xl"
                        alt="car"
                        src={imgUrl}
                        width={256}
                        height={144}
                    />
                </div>


            ))}
        </Carousel>
    )
}

export default CarouselCard