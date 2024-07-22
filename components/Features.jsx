import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from "@heroicons/react/24/outline";

const features = [
    {
        name: "PHOTOGRAPHY",
        description:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere, aperiam magni? Sapiente, tenetur veritatis, quis sunt labore dolor explicabo reprehenderit repudiandae in accusamus facilis itaque aut recusandae a pariatur natus?",
        icon: CloudArrowUpIcon,
    },
    {
        name: "PORTFOLIO LISTS",
        description:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere, aperiam magni? Sapiente, tenetur veritatis, quis sunt labore dolor explicabo reprehenderit repudiandae in accusamus facilis itaque aut recusandae a pariatur natus?",
        icon: LockClosedIcon,
    },
    {
        name: "FULLY CUSTOMIZABLE",
        description:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere, aperiam magni? Sapiente, tenetur veritatis, quis sunt labore dolor explicabo reprehenderit repudiandae in accusamus facilis itaque aut recusandae a pariatur natus?",
        icon: ArrowPathIcon,
    },
    {
        name: "FREE PLUGINS",
        description:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere, aperiam magni? Sapiente, tenetur veritatis, quis sunt labore dolor explicabo reprehenderit repudiandae in accusamus facilis itaque aut recusandae a pariatur natus?",
        icon: FingerPrintIcon,
    },
];

const Features = () => {
    return (
        <section className="pb-12 xl:py-24">
            <div className="container mx-auto">
                <h2 className="section-title mb-2 xl:mb-3 text-center mx-auto">Key Features</h2>
                <div className="flex flex-col">
                    <div className="mx-auto max-w-7xl text-center">
                        <p className="mt-2 text-3xl font-bold tracking-light text-black dark:text-white sm:text-4xl">Everything you need to deliver faster.</p>
                        <p className="mt-6 text-lg leading-8 text-black dark:text-white ">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero consequatur dolorem labore enim cumque iste odio. Deserunt, rerum, rem dolores quia molestiae natus, eum
                            atque eveniet reprehenderit voluptates temporibus! Impedit!
                        </p>
                    </div>
                </div>

                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                        {features.map((item) => (
                            <div key={item.name} className="relative hover:scale-110 transition-all ease-in-out">
                                <dt className="text-base font-semibold leading-7 text-muted-foreground justify-center">
                                    <div className="flex flex-col w-[100px] h-[100px] bg-primary rounded-full items-center mb-4 justify-center">
                                        <item.icon className="h-[36px] w-[36px] text-white" aria-hidden="true" />
                                    </div>
                                    <div className="text-black dark:text-white">{item.name}</div>
                                </dt>
                                <dd className="mt-2 text-base leading-7">{item.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </section>
    );
};

export default Features;
