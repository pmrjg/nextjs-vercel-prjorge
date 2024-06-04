"use client";
import React from "react";
import {motion} from "framer-motion";

const Footer = () => {

    return (<motion.div className="place-self-center text-center content-center pt-8" whileHover={{scale:1.5}}>
        <h2 className={"text-black font-bold"}>Contact me through <a href="mailto:author@prjorge.com">author@prjorge.com</a></h2>
        <h4 className={"text-black font-semibold"}>© @ Pedro Jorge 2024</h4>
    </motion.div>)
}

export default Footer;