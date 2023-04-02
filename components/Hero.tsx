import { urlFor } from "@/sanity";
import { PageInfo } from "@/typings";
import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";




type Props = {
   pageInfo: PageInfo;
};

function Hero({ pageInfo }: Props) {
    const [text, count] = useTypewriter({
        words: [
            `Hei. Mitt navn er ${pageInfo?.name} `,
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
                src={urlFor(pageInfo?.heroImage).url()}
                alt="Image of me"
            />

            <div className="z-20">
                <h2 className="text-sm uppercase text-gray-400 pb-2 tracking-[15px]">
                    {pageInfo?.role}
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
