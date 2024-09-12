import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import { Inter } from "next/font/google";
import Topbar from "@/components/shared/Topbar";
import LeftSidebar from "@/components/shared/LeftSidebar";
import RightSidebar from "@/components/shared/RightSidebar";
import Bottombar from "@/components/shared/Bottombar";
import { ClerkProvider } from "@clerk/nextjs";

const inter =  Inter({subsets: ["latin"]});

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: 'Threads',
  description: 'A Next.js 14 Meta Threads Application'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html>
        
          <body className="inter.className">
            <Topbar />

            <main className="flex flex-row">
                <LeftSidebar />

                <section className="main-container">
                  <div className="w-full max-w-4xl">
                    {children}
                  </div>
                </section>

                <RightSidebar />

            </main>

            <Bottombar />

          </body>
        
      </html>
    </ClerkProvider>
  );
}
