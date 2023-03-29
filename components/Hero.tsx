import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";


type Props = {};

function Hero({ }: Props) {
    const [text, count] = useTypewriter({
        words: [
            "Hei. Mitt navn er Camilla",
            "Jeg er:",
            "</> Frontend Utvikler </>",
            "{ Web Designer }",
        ],
        loop: true,
        delaySpeed: 2000,
    });
    return (
        <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
            <img
                className="relative rounded-full h-32 w-32 mx-auto object-cover"
                src="https://scontent.fosl3-1.fna.fbcdn.net/v/t39.30808-6/293596149_10166417660275057_2790820894200290701_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=rW4zsvWvEdUAX9IFVZY&_nc_ht=scontent.fosl3-1.fna&oh=00_AfAvY8nUZqJbQWH9qIvjQdcED4ccUBFYv7tf3-jqpYUTMQ&oe=6428CC48"
                alt=""
            />

            <div className="z-20">
                <h2 className="text-sm uppercase text-gray-400 pb-2 tracking-[15px]">
                    Frontend Utvikler
                </h2>
                <h1 className="text-3xl lg:text-5xl text-[#CC8D3B] font-semibold px-10">
                    <span className="mr-3">{text}</span>
                    <Cursor cursorColor="white" />
                </h1>

                <div className="pt-5">
                    <Link href="#about">
                        <button className="heroButton">Om Meg</button>
                    </Link>
                    <Link href="#feedback" >
                        <button className="heroButton">Omtale</button>
                    </Link>
                    <Link href="#projects" >
                        <button className="heroButton">Prosjekter</button>
                    </Link>
                    <Link href="#contact">
                        <button className="heroButton">Kontakt</button>
                    </Link>

                </div>
            </div>
        </div>
    );
}

export default Hero;
