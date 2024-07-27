"use client";

import React from "react";
import Form from "@/components/Form";
import { motion } from "framer-motion";

const ContactPage = () => {
    return (
        <section className="min-h-screen mt-24">
            <div className="container mx-auto">
                <div className="grid xl:grid-cols-2 pt-12 mb-6 xl:mb-24">
                    <motion.div
                        initial={{ opacity: 0, x: 150 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
                        viewport={{ once: true }}
                        className="flex flex-col justify-center"
                    >
                        <div className="flex items-center gap-x-4 text-primary text-lg mb-4">
                            <span className="w-[30px] h-[2px] bg-primary"></span>Hello
                        </div>
                        <h1 className="h1 max-w-md mb-8">Let's Work Togeather</h1>
                        <p className="subtitle max-w-[400px]">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique vero odit assumenda voluptate minima quam! Commodi aliquam, in cum placeat sit veniam soluta asperiores
                            vitae, aspernatur aliquid quam earum molestias!
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: -150 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
                        viewport={{ once: true }}
                        className="lg:mt-24"
                    >
                        <Form />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactPage;
