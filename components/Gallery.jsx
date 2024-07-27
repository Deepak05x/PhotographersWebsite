"use client";

import React from "react";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

const projectData = [
    {
        image: "/work/3.png",
        category: "Portraits",
        name: "February 11, 2024",
        description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit, officia ut. Consectetur reprehenderit, sunt cum dignissimos fuga fugit enim incidunt voluptas quaerat vero exercitationem nemo similique autem suscipit rem porro.",
        link: "/",
        codepen: "/",
    },
    {
        image: "/work/5.png",
        category: "Models",
        name: "April 23, 2024",
        description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit, officia ut. Consectetur reprehenderit, sunt cum dignissimos fuga fugit enim incidunt voluptas quaerat vero exercitationem nemo similique autem suscipit rem porro.",
        link: "/",
        codepen: "/",
    },
    {
        image: "/work/6.png",
        category: "Places",
        name: "November 24 2024",
        description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit, officia ut. Consectetur reprehenderit, sunt cum dignissimos fuga fugit enim incidunt voluptas quaerat vero exercitationem nemo similique autem suscipit rem porro.",
        link: "/",
        codepen: "/",
    },
    {
        image: "/work/7.png",
        category: "Corporate",
        name: "Jan 14 2024",
        description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit, officia ut. Consectetur reprehenderit, sunt cum dignissimos fuga fugit enim incidunt voluptas quaerat vero exercitationem nemo similique autem suscipit rem porro.",
        link: "/",
        codepen: "/",
    },
    {
        image: "/work/8.png",
        category: "Fashion",
        name: "Jan 31 2024",
        description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit, officia ut. Consectetur reprehenderit, sunt cum dignissimos fuga fugit enim incidunt voluptas quaerat vero exercitationem nemo similique autem suscipit rem porro.",
        link: "/",
        codepen: "/",
    },
    {
        image: "/work/9.png",
        category: "Fashion",
        name: "Jan 31 2024",
        description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit, officia ut. Consectetur reprehenderit, sunt cum dignissimos fuga fugit enim incidunt voluptas quaerat vero exercitationem nemo similique autem suscipit rem porro.",
        link: "/",
        codepen: "/",
    },
];

const Gallery = () => {
    return (
        <section className="relative mb-12 xl:mb-48">
            <div className="container py-24 mx-auto">
                <motion.h2
                    initial={{ y: -150, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
                    viewport={{ once: true }}
                    className="section-title mb-8 xl:mb-16 text-center mx-auto"
                >
                    My Gallery
                </motion.h2>
                <div className="flex flex-col gap-12">
                    {projectData.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ x: index % 2 === 0 ? 150 : -150, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
                            viewport={{ once: true }}
                        >
                            <ProjectCard project={project} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
