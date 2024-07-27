"use client";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { UserCheck, MailIcon, ArrowRightIcon, MessageSquare, UserRoundCheck, Building } from "lucide-react";

const Form = () => {
    return (
        <form className="flex flex-col gap-y-4">
            <div className="relative flex items-center">
                <Input type="name" id="first name" placeholder="First Name" />
                <UserCheck className="absolute right-6" size={20} />
            </div>
            <div className="relative flex items-center">
                <Input type="name" id="last name" placeholder="Last Name" />
                <UserRoundCheck className="absolute right-6" size={20} />
            </div>
            <div className="relative flex items-center">
                <Input type="email" id="email" placeholder="Email" />
                <Building className="absolute right-6" size={20} />
            </div>
            <div className="relative flex items-center">
                <Textarea placeholder="Type Your Message Here" />
                <MessageSquare className="absolute right-6" size={20} />
            </div>

            <Button className="flex items-center gap-x-1 max-w-[165px]">
                Lets Talk
                <ArrowRightIcon size={20} />
            </Button>
        </form>
    );
};

export default Form;
