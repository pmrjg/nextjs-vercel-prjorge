"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";


const Logo = () => {
    return (
        <motion.div whileHover={{scale:1.33}} className="flex items-left justify-left mt-2">
                <Link href="/" className="w-36 h-30 bg-white content-center rounded-full text-2xl text-black font-bold"><Image alt={"logo"} width={150} height={120} src={"/images/signature.png"}/></Link>
        </motion.div>
    )
}

export default Logo;