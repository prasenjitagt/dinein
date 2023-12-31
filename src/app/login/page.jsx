'use client'

import { useState } from "react"
import Image from "next/image"

const Login = () => {

    //Fuction for showing and hinding
    const [isEyeOpen, setIsEyeOpen] = useState(false);
    const showPassword = (e) => {
        e.preventDefault();

        setIsEyeOpen(prev => !prev);
    };


    console.log(isEyeOpen);
    return (
        <div className="px-4 flex flex-col justify-center items-center h-[100vh]">

<form action="" className="rounded-lg bg-slate-100 px-3 py-3 shadow-lg">

            {/* Login Heading */}
            <section className="self-start mt-4 mb-7 ml-5">

                <p className="text-4xl font-semibold " >Login</p>
                <p className="text-lg font-semibold">Welcom Back!</p>

            </section>




                <section className="mb-3">
                    <p>Email address</p>
                    <input type="email" name="email" placeholder="xyz@example.com" className="inputField" />
                </section>

                {/* Password Field */}
                <section className="mb-3">
                    <p>Password</p>
                    <div>
                        <div className="relative">

                            <input type={isEyeOpen ? `password` : `text`} name="email" placeholder="Enter Password" className="inputField" />

                            {/* Passowrd Show Hide Image */}
                            <button className="absolute right-4 top-3 opacity-50" onClick={showPassword}>
                                {isEyeOpen ?
                                    <Image src={`/icons/eyeOpen.svg`} alt="show" width={20} height={20} />
                                    :
                                    <Image src={`/icons/eyeClose.svg`} alt="show" width={20} height={20} />

                                }
                            </button>
                        </div>
                    </div>
                </section>

                {/* Remeber me Section */}
                <section className="flex mb-3">
                    <input type="checkbox" name="remember" className="mr-2" />
                    <p>Remember me</p>
                </section>

                <section className="centerAll">
                    <button type="submit" className="btn bg-myRed text-white w-44 text-lg">
                        Login
                    </button>
                </section>

            </form>
        </div>
    )
}

export default Login