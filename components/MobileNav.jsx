import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Navbar from "./Navbar";
import Logo from "./Logo";
import Socials from "./Socials";
import { AlignJustify } from "lucide-react";

const MobileNav = () => {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <AlignJustify className="cursor-pointer" />
            </SheetTrigger>
            <SheetContent>
                <div className="flex flex-col items-center justify-between h-full py-8">
                    <div className="flex flex-col gap-8 pt-12">
                        <Logo />
                        <Navbar containerStyles="flex flex-col items-center gap-6" linkStyles="text-1xl" />
                    </div>
                    <Socials containerStyles="flex gap-4" iconStyles="text-2xl" />
                </div>
            </SheetContent>
        </Sheet>
    );
};

export default MobileNav;
