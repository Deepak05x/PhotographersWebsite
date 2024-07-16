"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const Links = [
    {
        path: "/",
        name: "Home",
    },
    {
        path: "/about",
        name: "About",
    },
    {
        path: "/pricing",
        name: "Pricing",
    },
    {
        path: "/contact",
        name: "Contact",
    },
];

const Navbar = ({ containerStyles, linkStyles, underlineStyles }) => {
    const pathname = usePathname();

    return (
        <nav className={`${containerStyles}`}>
            {Links.map((item, index) => (
                <Link key={index} href={item.path} className={`capitalize ${linkStyles}`}>
                    {item.path === pathname && <motion.span initial={{ y: "-100%" }} animate={{ y: 0 }} transition={{ type: "tween" }} layoutId="underline" className={`${underlineStyles}`} />}
                    {item.name}
                </Link>
            ))}
        </nav>
    );
};

export default Navbar;
