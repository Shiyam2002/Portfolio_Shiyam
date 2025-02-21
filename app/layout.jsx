import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import Footer from "@/components/Footer";

const JetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrainsMono",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"]
});


export const metadata = {
  title: "ShiyamKs",
  description: "",
    icon: "/favicon.ico", // Ensure this file exists in the public folder
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${JetbrainsMono.variable}  antialiased`}>
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
        <Footer />
      </body>
    </html>
  );
}
