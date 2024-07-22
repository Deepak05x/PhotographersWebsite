import React from "react";
import { Card, CardHeader } from "./ui/card";
import Image from "next/image";
import { Badge } from "./ui/badge";

const ProjectCard = ({ project }) => {
    return (
        <Card className="group overflow-hidden relative">
            <CardHeader>
                <div className="relative w-full h-[290px] flex items-center justify-center dark:bg-secondary/40 xl:bg-[100%] xl:bg-no-repeat overflow-hidden">
                    <Image src={project.image} width={440} height={200} alt="img" priority className="absolute top-0 shadow-2xl" />
                </div>
            </CardHeader>
            <div className="h-full px-8 py-6">
                <Badge className="uppercase text-sm font-medium mb-2 absolute top-4 left-5">{project.category}</Badge>
                <h4 className="h4 mb-1">{project.name}</h4>
                <p className="text-muted-foreground text-lg">{project.description}</p>
            </div>
        </Card>
    );
};

export default ProjectCard;
