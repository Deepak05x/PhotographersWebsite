import Socials from "./Socials";

const Footer = () => {
    return (
        <footer className="bg-primary py-12">
            <div className="container mx-auto">
                <div className="flex flex-col items-center justify-between">
                    <Socials containerStyles="flex gap-x-6 mx-auto mb-4" iconStyles="text-white text-[20px] transition-all dark:text-white/70 hover:text-white dark:hover:text-primary" />
                    <div className="text-white">Copyright &copy; 2024, All Rights Reserved.</div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
