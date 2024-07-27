"use client";

import React from "react";
import { CheckIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { toast, useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@radix-ui/react-toast";

const includedFeatures = ["Private forum access", "Member Resources", "Entry to annual conference", "Official member equipment"];

const PricingPage = () => {
    return (
        <section className="min-h-screen xl:py-24 py-12">
            <div className="container mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 150 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
                    viewport={{ once: true }}
                    className="section-title mb-8 xl:mb-16 text-center mx-auto"
                >
                    My Pricing
                </motion.h2>
                <motion.div
                    initial={{ opacity: 0, y: 150 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8, ease: "easeInOut" }}
                    viewport={{ once: true }}
                    className="mx-auto max-w-2xl sm:text-center"
                >
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Memories worth love cherishing</h2>
                    <p className="mt-6 text-lg leading-8">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae aperiam tempora quis rem, architecto dolore possimus ut velit! Maiores veniam corrupti totam quam quas, delectus
                        animi numquam blanditiis dicta aspernatur!
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 150 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.8, ease: "easeInOut" }}
                    viewport={{ once: true }}
                    className="mx-auto my-16 max-w-2xl ring-1 ring-gray-200 rounded-[10px] sm:mt-20 lg:mx-0 lg:flex lg:max-w-none"
                >
                    <div className="p-8 sm:p-10 lg:flexx-auto">
                        <h3 className="text-2xl font-bold tracking-tight">Lifetime Membership</h3>
                        <p className="mt-6 text-base leading-7">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum fugiat sed sit, sint maiores cumque odit quam, ea veritatis minima recusandae excepturi atque expedita, quo
                            tempore culpa illum voluptatum non.
                        </p>
                        <div className="mt-10 flex items-center gap-x-4">
                            <h4 className="flex-none text-sm font-semibold leading-6 text-primary">Whats Included</h4>
                            <div className="h-px flex-auto bg-gray-100"></div>
                        </div>
                        <ul role="list" className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6">
                            {includedFeatures.map((feature) => (
                                <li key={feature} className="flex text-muted-foreground gap-x-3">
                                    <CheckIcon className="h-6 w-5 flex-none text-primary" aria-hidden="true" />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex items-center justify-center p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0 dark:text-black">
                        <div className="bg-red-100  py-10 rounded-2xl text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                            <div className="mx-auto max-w-xs px-8">
                                <p className="text-base font-semibold">Pay Once, Own it Forever</p>
                                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                                    <span className="text-5xl font-bold tracking-tight">$349</span>
                                    <span className="text-sm font-semibold leading-6 tracking-wide">USD</span>
                                </p>
                                <Button
                                    onClick={() => {
                                        toast({
                                            title: "Purchased Successfully",
                                            description: "Friday, Feb 10, 2024 at 5:57 PM",
                                            action: <ToastAction altText="Close">Close</ToastAction>,
                                        });
                                    }}
                                    className="gap-x-2 mt-3"
                                >
                                    Purchase
                                </Button>
                                <p className="mt-6 text-xs leading-5">Invoices and receipts available for easy company</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default PricingPage;
