"use client";

import { RiRidingFill, RiUserHeartFill, RiStarHalfFill, RiVidiconFill, RiVipCrown2Fill, RiSendPlaneFill } from "react-icons/ri";
import { motion } from "framer-motion";
import HeroImg from "@/components/HeroImg";

const infoData = [
    {
        icons: <RiUserHeartFill size={20} />,
        text: "Mrs Smith",
    },
    {
        icons: <RiSendPlaneFill size={20} />,
        text: "+91 99483 23421",
    },
    {
        icons: <RiVidiconFill size={20} />,
        text: "photography@gmail.com",
    },
    {
        icons: <RiVipCrown2Fill size={20} />,
        text: "Born on 23 jan, 2000",
    },
    {
        icons: <RiRidingFill size={20} />,
        text: "22, Ella Statu, Texas",
    },
];

const AboutPage = () => {
    return (
        <section className="pb-12 py-12 xl:py-24">
            <div className="container mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 150 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
                    viewport={{ once: true }}
                    className="section-title mb-8 xl:mb-16 text-center mx-auto"
                >
                    About Me
                </motion.h2>
                <div className="flex flex-col xl:flex-row">
                    <motion.div
                        initial={{ opacity: 0, x: -150 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
                        viewport={{ once: true }}
                        className="relative flex-1 flex items-center justify-center"
                    >
                        <HeroImg containerStyles="w-[450px] h-[450px] lg:w-[520px] lg:h-[505px] bg-no-repeat relative" imgSrc={"/about/profile.png"} />
                    </motion.div>
                    <div className="flex-1 flex flex-col justify-center">
                        <div className="text-lg mt-12 xl:mt-3">
                            <div className="text-center xl:text-left">
                                <motion.h3
                                    initial={{ opacity: 0, x: 150 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
                                    viewport={{ once: true }}
                                    className="h3 mb-4"
                                >
                                    Let&apos;s Plan Your Perfect Photoshoot
                                </motion.h3>
                                <motion.p
                                    initial={{ opacity: 0, y: 150 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6, duration: 0.8, ease: "easeInOut" }}
                                    viewport={{ once: true }}
                                    className="subtitle max-w-xl mx-auto  xl:max-0"
                                >
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur minus vero odio omnis, corporis, unde dolorem pariatur ut a numquam nulla enim rem sed,
                                    quibusdam obcaecati dolor quasi temporibus magni?
                                </motion.p>

                                <motion.div
                                    initial={{ opacity: 0, y: 150 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.9, duration: 0.8, ease: "easeInOut" }}
                                    viewport={{ once: true }}
                                    className="grid xl:grid-cols-2 gap-4 mb-12"
                                >
                                    {infoData.map((item, index) => (
                                        <div key={index} className="flex items-center gap-x-4 mx-auto xl:mx-0">
                                            <div className="text-primary">{item.icons}</div>
                                            <div>{item.text}</div>
                                        </div>
                                    ))}
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutPage;
