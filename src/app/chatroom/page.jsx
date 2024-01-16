'use client'

import { useState, useEffect } from "react";
import { io } from "socket.io-client"



const Chatroom = () => {

    const [msgtext, SetMsgtext] = useState('');
    const [servermsg, SetServermsg] = useState('no data');


    const socket = io('http://localhost:8080');

    const handleClick = () => {


        socket.on("connect", () => {
            console.log("socket connected from client side", socket.id);
        });
        socket.emit('mymsg', msgtext);




    }


    useEffect(() => {
        socket.on('toKitchen', (message) => {
            SetServermsg(message);
        })

    }, [socket])


    return (
        <div className="flex flex-col  justify-center items-center" >
            <div className="flex justify-center">
                <p className="text-3xl "> Chatroom</p>
            </div>


            <section className="flex flex-col w-[60vw] ">

                <input onChange={e => SetMsgtext(e.target.value)} className="w-full input input-primary" type="text" placeholder="Message" />

                <button onClick={handleClick} className="w-full btn btn-primary">Send</button>
            </section>

            <p>{`data is: ${servermsg}`}</p>

        </div>
    )
}

export default Chatroom