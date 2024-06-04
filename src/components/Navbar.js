"use client";
import React from "react";
import Link from "next/link";
import Logo from "@/components/Logo";
import Image from "next/image";
import {motion} from "framer-motion";

const w1 = 48;

const MotionLink = motion(Link);

const NavBar = () => {
    return (
        <div className="flex w-full px-2 py-2 font-medium items-center justify-between">
            <Logo/>
            <motion.nav className="flex rounded-full border-black border-2 pb-1 pt-1 px-2 m-2 bg-white" whileHover={{scale:1.1}}>

                    <MotionLink href="https://www.amazon.com/stores/R.-G.-Peter/author/B0CWNLR4MN" whileHover={{scale: 1.2}}>
                        <Image alt={"amazon"}
                               src={"/images/amazon.png"}
                               width={w1}
                               height={w1}/>
                    </MotionLink>


                    <MotionLink href="https://www.goodreads.com/author/show/48757905.R_G_Peter" whileHover={{scale: 1.24}}><Image alt={"goodreads"}
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
        </div>
    )
}

export default NavBar;