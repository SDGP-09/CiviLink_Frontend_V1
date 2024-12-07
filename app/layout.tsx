import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/app/components/navbar/Navbar";
import Sidebar from "@/app/components/sidebar/Sidebar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "CiviLink",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <div className="w-full h-screen bg-blueCanvas bg-opacity-25 flex items-center flex-col">

          <Navbar/>

          <div className="w-11/12 h-lvh flex mb-5">
              <div className="w-1/5 h-full bg-canvasWhite mr-5 rounded shadow-sm pt-5 px-10 min-w-72">
                  <Sidebar/>
              </div>
              <div className="w-4/5 h-full bg-canvasWhite rounded shadow-sm">
                  {children}
              </div>

          </div>

      </div>


      </body>
    </html>
  );
}
