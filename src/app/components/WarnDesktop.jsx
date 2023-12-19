
import Image from "next/image"

const WarnDesktop = () => {
    return (
        <div className="h-[100vh] w-[100vw] centerAll">
            <div className="bg-slate-100 centerAll py-20 px-5 rounded-xl">

                <section className="flex flex-col items-center justify-between">

                    {/* Cross Symbol */}
                    <div className="bg-red-200 rounded-[100%] h-[120px] w-[120px] centerAll mb-7 ">
                        <Image
                            className="bg-myRed rounded-[100%] h-[70px] w-[70px] p-5 "
                            width={10}
                            height={10}
                            alt="menu"
                            src={`/icons/cross.svg`}
                        />
                    </div>


                    <p className="text-3xl font-bold mb-5">Oops!</p>



                </section>

                <p className="text-lg font-semibold">Quite desktop mode</p>
                <div className="flex">

                    <p className="text-lg font-semibold">If you want to order Something,</p>
                    <p className=" text-lg font-semibold ml-2 text-green-600">Maybe Biryani?</p>
                </div>
            </div>

        </div >
    )
}

export default WarnDesktop