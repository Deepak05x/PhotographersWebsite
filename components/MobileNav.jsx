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
                <div>
                    <div>
                        <Logo />
                        <Navbar />
                    </div>
                    <Socials />
                </div>
            </SheetContent>
        </Sheet>
    );
};

export default MobileNav;
