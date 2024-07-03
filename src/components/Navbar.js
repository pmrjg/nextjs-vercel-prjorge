"use client";
import React from "react";
import Link from "next/link";
import Logo from "@/components/Logo";
import Image from "next/image";
import {motion} from "framer-motion";
import "./NavBar.css";

const w1 = 48;

const MotionLink = motion(Link);

const NavBar = () => {
    return (
        <motion.div className="flex w-full px-2 py-2 font-medium items-center justify-between xs:grid xs:grid-cols-8 xs:flex-row">
            <Logo className="xs:w-fit"/>
            <motion.nav className="md:flex rounded-full border-black border-2 pb-1 pt-1 px-1 m-0 bg-white xs:w-fit xs:flex-row" whileHover={{scale:1.1}} >

                    <MotionLink href="https://www.amazon.com/stores/Pedro-Miguel-Rodrigues-Jorge/author/B0D8Q7LCG3" whileHover={{scale: 1.2}}>
                        <Image alt={"amazon"}
                               src={"/images/amazon.png"}
                               width={w1}
                               height={w1}/>
                    </MotionLink>


                    <MotionLink href="https://www.goodreads.com/author/show/50838407.Pedro_Miguel_Rodrigues_Jorge" whileHover={{scale: 1.24}}><Image alt={"goodreads"}
                                                                                                 src={"/images/goodreads.png"}
                                                                                                 width={w1}
                                                                                                 height={w1}/></MotionLink>

                    <MotionLink href="https://www.instagram.com/rgpter/" whileHover={{scale: 1.28}}><Image alt={"instagram"}
                                                                          src={"/images/instagram.png"}
                                                                          width={w1} height={w1}/></MotionLink>

                    <MotionLink href="https://www.tiktok.com/@r.g.peter" whileHover={{scale: 1.35}}><Image alt={"tiktok"} src={"/images/tiktok.png"}
                                                                          width={w1} height={w1}/></MotionLink>


                    <MotionLink href="https://www.youtube.com/@rgptr" whileHover={{scale: 1.4}}><Image alt={"youtube"} src={"/images/youtube.png"}
                                                                       width={w1} height={w1}/></MotionLink>


            </motion.nav>
        </motion.div>
    )
}

export default NavBar;
