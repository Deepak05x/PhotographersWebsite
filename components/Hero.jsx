"use client";

import { Input } from "./ui/input";
import { Button } from "./ui/button";
import Link from "next/link";
import { RiMenFill, RiBookmark3Fill, RiBodyScanFill, RiServiceFill } from "react-icons/ri";
import Socials from "./Socials";
import HeroImg from "./HeroImg";
import Badge from "./Badge";
import { motion } from "framer-motion";

const Hero = () => {
    return (
        <section className="py-12 xl:py-24 h-[auto] bg-bottom">
            <div className="container mx-auto">
                <div className="flex justify-between gap-8">
                    <div className="flex max-w-[800px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
                        <motion.div
                            initial={{ y: 150, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.1, duration: 0.8, ease: "easeInOut" }}
                            viewport={{ once: true }}
                            className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]"
                        >
                            Photography
                        </motion.div>
                        <motion.h1
                            initial={{ y: 150, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
                            viewport={{ once: true }}
                            className="h1"
                        >
                            Let&apos;s Make Magic
                        </motion.h1>
                        <motion.p
                            initial={{ y: 150, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.8, ease: "easeInOut" }}
                            viewport={{ once: true }}
                            className="subtitle max-w-[590px] mt-4 mx-auto xl:mx-0"
                        >
                            We are fine art, nature & potrait film photographers from San Francisco, with a special love for natural light, medium format film cameras & redheads with freckles.
                        </motion.p>
                        <motion.div
                            initial={{ y: 150, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.7, duration: 0.8, ease: "easeInOut" }}
                            viewport={{ once: true }}
                            className="flex flex-col gap-3 md:flex-row mx-auto xl:mx-0 mb-12"
                        >
                            <div className="flex w-full gap-4">
                                <label htmlFor="email" className="sr-only">
                                    Email Address
                                </label>
                                <Input type="email" id="email" placeholder="Email" />
                                <Link href="/contact">
                                    <Button className="gap-2 bg-primary">
                                        Subscribe <RiMenFill size={18} />
                                    </Button>
                                </Link>
                            </div>
                        </motion.div>
                        <motion.div
                            className="flex gap-6 mx-auto xl:mx-0"
                            initial={{ y: 150, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.9, duration: 0.8, ease: "easeInOut" }}
                            viewport={{ once: true }}
                        >
                            <Socials containerStyles="flex gap-6 mx-auto xl:mx-0" iconStyles="text-foreground text-[22px] hover:text-primary transistion-all cursor-pointer" />
                        </motion.div>
                    </div>
                    <motion.div
                        initial={{ x: 150, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.8, ease: "easeInOut" }}
                        viewport={{ once: true }}
                        className="hidden xl:flex relative"
                    >
                        <HeroImg imgSrc="/about/photography.svg" containerStyles="w-[550px] h-[475px] bg-no-repeat relative bg-bottom" />
                    </motion.div>
                </div>
                <div className="py-24 sm:py-32">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
                            <motion.div
                                initial={{ y: 100, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
                                viewport={{ once: true }}
                                className="mx-auto flex max-w-xs flex-col gap-y-4"
                            >
                                <dt className="text-base leading-7 text-muted-foreground">Years of Expertise</dt>
                                <dd className="order-first text-3xl font-semibold tracking-light text-gray-900 sm:text-5xl">
                                    <Badge icon={<RiBookmark3Fill />} endCountNum={12} endCountText="+" />
                                </dd>
                            </motion.div>
                            <motion.div
                                initial={{ y: -100, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
                                viewport={{ once: true }}
                                className="mx-auto flex max-w-xs flex-col gap-y-4"
                            >
                                <dt className="text-base leading-7 text-muted-foreground">Followers</dt>
                                <dd className="order-first text-3xl font-semibold tracking-light text-gray-900 sm:text-5xl">
                                    <Badge icon={<RiBodyScanFill />} endCountNum={967} endCountText="K" />
                                </dd>
                            </motion.div>
                            <motion.div
                                initial={{ y: 100, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
                                viewport={{ once: true }}
                                className="mx-auto flex max-w-xs flex-col gap-y-4"
                            >
                                <dt className="text-base leading-7 text-muted-foreground">Projects</dt>
                                <dd className="order-first text-3xl font-semibold tracking-light text-gray-900 sm:text-5xl">
                                    <Badge icon={<RiServiceFill />} endCountNum={79} endCountText="+" badgeText="" />
                                </dd>
                            </motion.div>
                        </dl>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
