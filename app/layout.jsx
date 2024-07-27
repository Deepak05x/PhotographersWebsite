import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Sen } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";

const SenFont = Sen({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    display: "swap",
});

export const metadata = {
    title: "Photographers Website",
    description: "Created By Deepak",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={SenFont.className}>
                <ThemeProvider attribute="class" defaultTheme="light">
                    <Header />
                    {children}
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    );
}
