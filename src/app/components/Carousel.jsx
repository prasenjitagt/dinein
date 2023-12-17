import Image from "next/image"
const Carousel = () => {
    return (
        <div
            className="min-w-[100vw] flex  justify-center"
            key={index}>
            <Image
                priority={true}

                role="button"
                className="h-[150px] w-[266px] rounded-lg shadow-xl "

                alt="slide"
                src={imgurl}

                height={100}
                width={100}
            />
        </div>
    )
}

export default Carousel