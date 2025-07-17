import React, { ReactNode } from "react";
import "./global.css";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "next-themes";
import FloatingNavigation from "@/src/components/FloatingNavigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Yo Use Ship",
  description: "Modern SaaS Admin Dashboard with Clerk, Prisma, NeonDB, Next.js",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <ClerkProvider>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <html lang="en">
          <body className="min-h-screen bg-background antialiased">
            <FloatingNavigation />
            {children}
          </body>
        </html>
      </ThemeProvider>
    </ClerkProvider>
  );
}
