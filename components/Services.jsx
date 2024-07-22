import { Smile, Scan, Bird } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const servicesData = [
    {
        icons: <Smile size={48} strokeWidth={1} />,
        title: "Portraiture",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quibusdam deleniti facere odit! Harum fugit incidunt excepturi temporibus voluptatem, illo voluptatibus rerum beatae debitis! Magni voluptates tempore itaque labore autem.",
    },
    {
        icons: <Scan size={48} strokeWidth={1} />,
        title: "LandScapes",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quibusdam deleniti facere odit! Harum fugit incidunt excepturi temporibus voluptatem, illo voluptatibus rerum beatae debitis! Magni voluptates tempore itaque labore autem.",
    },
    {
        icons: <Bird size={48} strokeWidth={1} />,
        title: "LifeStyles",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quibusdam deleniti facere odit! Harum fugit incidunt excepturi temporibus voluptatem, illo voluptatibus rerum beatae debitis! Magni voluptates tempore itaque labore autem.",
    },
];

const Services = () => {
    return (
        <section className="mb-12 xl:mb-36">
            <div className="container mx-auto py-24">
                <h2 className="section-title mb-6 xl:mb-24 text-center mx-auto">Our Services</h2>
                <div className="grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8">
                    {servicesData.map((item, index) => (
                        <Card
                            key={index}
                            className="relative w-full max-w-[425px] h-[450px] flex flex-col pb-10 justify-center items-center cursor-pointer  hover:scale-105 transition-all ease-in-out duration-500"
                        >
                            <CardHeader className="text-primary">
                                <div className="w-[80px] h-[80px] bg-primary text-white rounded-full flex justify-center items-center absolute -bottom-6 right-6">{item.icons}</div>
                            </CardHeader>
                            <CardContent className="text-center">
                                <CardTitle className="mb-4">{item.title}</CardTitle>
                                <CardDescription className="text-lg">{item.description}</CardDescription>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
