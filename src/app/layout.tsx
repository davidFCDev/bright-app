import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "../styles/globals.css";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bright App",
  description: "Bright Sky Next App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${openSans.className} relative`}>{children}</body>
    </html>
  );
}
