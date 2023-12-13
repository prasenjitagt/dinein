import Image from "next/image"
const FoodCard = ({ image }) => {

    return (
        // <div className="card card-side bg-base-100 shadow-xl">
        //     <figure className="min-w-[100px]">
        //         <Image className="rounded-xl" alt={`food-item`} width={100} height={100} src={`/foodItemPics/momos.jpg`} />
        //     </figure>
        //     <div className="card-body">
        //         <h2 className="card-title">FRIED MOMOS</h2>
        //         <p className="text-success">₹399</p>
        //         <p className="card-title">ABOUT</p>
        //         <p className="text-justify text-sm leading-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi sint commodi vitae recusandae est dignissimos corporis dolor quaerat quae optio.</p>
        //         <div className="card-actions justify-end">
        //             <button className="btn btn-primary">Watch</button>
        //         </div>
        //     </div>
        // </div>

        <div className="bg-base-100 rounded-xl p-4 shadow-xl">
            <div className="flex gap-2 ">

                <Image className="min-w-[100px] max-h-[100px] aspect-square overflow-hidden rounded-xl" height={150} width={150} alt={`food-item`} src={image} />

                <section className="flex flex-col justify-between ">

                    <section>
                        <p className="font-bold text-sm">{`BIRYANI`}</p>
                        <p className="text-success">₹399</p>
                    </section>

                    <section>

                        <p className="font-bold text-sm">ABOUT</p>
                        <p className="text-justify text-[10px] leading-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi sint commodi vitae recusandae est dignissimos corporis dolor quaerat quae optio.</p>
                    </section>

                    <section>
                        <div className="flex items-center justify-center">

                            <div className="font-bold text-center text-sm bg-success rounded-full w-14 text-slate-200">
                                HALF
                            </div>
                            <button>
                                <div className="dropdown dropdown-end">
                                    <div tabIndex={0} role="button" className="m-1 flex  ">
                                        <Image
                                            src={`/icons/dropdownArrow.svg`}
                                            alt="dropdown"
                                            height={25}
                                            width={25}
                                        />
                                    </div>
                                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                        <li><a>Item 1</a></li>
                                        <li><a>Item 2</a></li>
                                    </ul>
                                </div>
                            </button>
                        </div>

                    </section>
                </section>
            </div>

        </div>

    )
}

export default FoodCard