import Link from "next/link"
const NotFound = () => {
    return (
        <div className=" flex flex-col items-center min-w-[360px] w-full ">

            <video className="mb-6 mt-9 " src="/notFoundVid.mp4" autoPlay loop muted />

            <p className=" sm:text-xl md:text-3xl lg:text-5xl  ">Stop playing with the SearchBar</p>

            <p className="my-8 text-red-700 text-7xl" >404!</p>

            <Link className="themedBtn centerAll" href={'/'} >
                Go To Home
            </Link>
        </div>
    )
}

export default NotFound