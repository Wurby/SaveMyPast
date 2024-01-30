import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { ButtonLink } from "@/components/Button";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Savemypast",
  description: "A personal history app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ClerkProvider>
        <body
          className={`flex min-h-screen w-full flex-col gap-4 bg-gradient-to-b from-slate-800 via-slate-900 to-slate-950 text-white ${inter.className}`}
        >
          <main className="mx-auto w-full max-w-5xl flex-grow p-4">
            {children}
          </main>
          <footer className="align-center flex w-full justify-center">
            <nav className="flex items-center justify-center gap-4 px-4">
              <ButtonLink href="/app">App</ButtonLink>
              <>
                <UserButton afterSignOutUrl="/" />
              </>
              <ButtonLink href="/">Home</ButtonLink>
            </nav>
          </footer>
        </body>
      </ClerkProvider>
    </html>
  );
}
