"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface AuthLayoutProps {
    children: React.ReactNode;
};


const AuthLayout = ({children}: AuthLayoutProps) => {
    const pathname = usePathname();
    const isSignIN = pathname === "/sign-in";
    return ( 
        <main className="bg-neutral-100 min-h-screen">
            <div className="max-w-screen-2xl mx-auto p-4">
                <nav className="flex justify-between items-center">
                        <Image 
                        src="/logo.svg"
                        alt="logo"
                        height={56}
                        width={152}
                        />
                        <Button variant="secondary">
                            <Link href={isSignIN ? "/sign-up" : "/sign-in"}>
                            {isSignIN ? "Sign Up" : "Login"}
                            </Link>
                        </Button>
                </nav>
                <div className="flex flex-col justify-center items-center pt-4 md:pt-14">
                    {children}
                </div>
            </div>
        </main>
     );
}
 
export default AuthLayout;
                    
                    
                    
                   