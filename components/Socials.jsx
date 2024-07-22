"use client";
import { RiPaypalFill, RiSnapchatFill, RiSkypeFill, RiFacebookFill, RiInstagramFill } from "react-icons/ri";

const icons = [
    {
        path: "/",
        name: <RiPaypalFill />,
    },
    {
        path: "/",
        name: <RiSnapchatFill />,
    },
    {
        path: "/",
        name: <RiSkypeFill />,
    },
    {
        path: "/",
        name: <RiFacebookFill />,
    },
    {
        path: "/",
        name: <RiInstagramFill />,
    },
];

const Socials = ({ containerStyles, iconStyles }) => {
    return (
        <div className={`${containerStyles}`}>
            {icons.map((item, index) => {
                return (
                    <div key={index} className={iconStyles}>
                        {item.name}
                    </div>
                );
            })}
        </div>
    );
};

export default Socials;
