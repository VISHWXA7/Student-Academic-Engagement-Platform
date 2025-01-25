import "./globals.css";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google"; 

import { Toaster } from "@/components/ui/sonner";
import { QueryProvider } from "@/components/query-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Student Engagement Platform",
  description: "Here students can engage to scheduled there projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(inter.className, "antialiased min-h-screen")}
      >
        <QueryProvider>
        <Toaster />
        {children}
        </QueryProvider>
      </body>
    </html>
  );
}
