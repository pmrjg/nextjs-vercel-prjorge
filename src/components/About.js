"use client";
import React from "react";
import Image from "next/image";
import {motion} from "framer-motion";

const txtTitle = "∞ About Pedro Jorge".split(" ");

const MotionImage = motion(Image);

const About = () => {
    return (
        <motion.div className={"md:grid md:grid-cols-2 sm:grid sm:grid-cols-1 gap-1 items-center py-1 px-4 xl:gap-2 sm:py-16 xl:px-16 text-black"} initial={{ scale: 0 }}
                    animate={{ rotate: 360, scale: 1 }}
                    transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20
                    }}>
            <MotionImage whileHover={{scale:1.4, rotate: 18}} src={"/images/profile.jpg"} alt={"Myself"} width={400} height={800}/>
            <motion.div whileHover={{scale:1.4, rotate: -18}}>
                <motion.div className={"text-5xl"}>
                    {txtTitle.map((el, i) => (<motion.span initial={{opacity: 0}} animate={{ opacity: 1 }}
                                                            transition={{
                                                                duration: 0.25,
                                                                delay: i / 10,
                                                            }}
                                                            key={i}
                >
                    {el}{" "}</motion.span>))}
                </motion.div>
                <motion.div>
                    <motion.p whileInView={{opacity: 1}} className={"text-2xl p-1"}>
                        It does not matter much what we love or like, what matters most is what is important to us and
                        makes us happy.
                    </motion.p>
                    <motion.p whileInView={{opacity: 1}} className={"text-2xl p-1"}>
                        When everything changes, what occurs to us is unpredictable and undefined until the moment it
                        actually happens.
                    </motion.p>
                    <motion.p whileInView={{opacity: 1}} className={"text-3xl p-1"}>
                        Check out my books!
                    </motion.p>
                </motion.div>
            </motion.div>
        </motion.div>
    );
}

export default About;