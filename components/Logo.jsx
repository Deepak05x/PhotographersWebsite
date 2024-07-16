import React from "react";
import Link from "next/link";
import Image from "next/image";

const Logo = () => {
    return (
        <div>
            <Link href="/">
                <Image src="/logo.svg" width={55} height={55} priority alt="logo" />
            </Link>
        </div>
    );
};

export default Logo;
