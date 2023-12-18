import Image from "next/image"
import Link from "next/link"



const Nav = () => {
    return (
        <div className=" flex justify-between items-center pl-2 pr-4  w-full h-12  bg-white   rounded-lg shadow-[0_0px_10px_2px_rgba(0,0,0,0.2)]">
            <Link className="" href={`/`}>
                <Image
                    src='/icons/home.svg'
                    alt="Home"
                    width={43}
                    height={43}
                />
            </Link>
            <Link className="" href={`/order`}>
                <Image
                    src='/icons/spoonFork.svg'
                    alt="Home"
                    width={30}
                    height={30}
                />
            </Link>
            <Link className="" href={`/customerAccount`}>
                <Image
                    src='/icons/account.svg'
                    alt="Home"
                    width={30}
                    height={30}
                />
            </Link>
            <Link className="" href={`/biryani`}>
                <Image
                    src='/icons/menuBottomNav.svg'
                    alt="Home"
                    width={30}
                    height={30}
                />
            </Link>

        </div>
    )
}

export default Nav