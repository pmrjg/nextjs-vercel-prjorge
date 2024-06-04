"use client";
import React from "react";
import Image from "next/image";
import {motion} from "framer-motion";


const MotionImage = motion(Image);


const Books = async () => {
    const rot1 = - 18;
    const rot2 = 18;
    const rot3 = - 18;
    const rot4 = 18;

    return (
        <motion.div className={"md:grid md:grid-cols-4 sm:grid sm:grid-cols-1 xl:grid xl:grid-cols-1 gap-1 items-center py-1 px-4 xl:gap-2 sm:py-2 xl:px-1 text-black"}>
            <motion.div className={"grid grid-cols-4 md:grid-cols-4 sm:grid-cols-4 gap-4"}>
                <MotionImage src={"/books/" + "ill_me.png"} alt="ill me"
                             className="h-auto max-w-full w-full rounded-lg"
                             loading={"lazy"}
                             sizes="(max-width: 640px) 50vw,(max-width: 1280px) 50vw,(max-width: 1536px) 50vw, 45vw"
                             width={"0"} height={"0"} whileHover={{scale:1.4, rotate: 18}}/>
                <MotionImage src={"/books/" + "infinity.png"} alt="infinity minus eight"
                             className="h-auto max-w-full w-full rounded-lg"
                             loading={"lazy"}
                             sizes="(max-width: 640px) 50vw,(max-width: 1280px) 50vw,(max-width: 1536px) 50vw, 45vw"
                             width={"0"} height={"0"} whileHover={{scale:1.4, rotate: 18}}/>
                <MotionImage src={"/books/" + "ian_oaks.png"} alt="Ian Oaks"
                             className="h-auto max-w-full w-full rounded-lg"
                             loading={"lazy"}
                             sizes="(max-width: 640px) 50vw,(max-width: 1280px) 50vw,(max-width: 1536px) 50vw, 45vw"
                             width={"0"} height={"0"} whileHover={{scale:1.4, rotate: 18}}/>
                <MotionImage src={"/books/" + "rg_peter.png"} alt="R. G. Peter"
                             className="h-auto max-w-full w-full rounded-lg"
                             loading={"lazy"}
                             sizes="(max-width: 640px) 50vw,(max-width: 1280px) 50vw,(max-width: 1536px) 50vw, 45vw"
                             width={"0"} height={"0"} whileHover={{scale:1.4, rotate: 18}}/>
            </motion.div>
        </motion.div>


    );
}

export default Books;