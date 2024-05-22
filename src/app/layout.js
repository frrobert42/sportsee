import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/app/component/header/header";
import Navbar from "@/app/component/navbar/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SportSee - Dashboard",
  description: "Une startup dédiée au coaching sportif.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={inter.className}>
      <Header />
      <Navbar />
      {children}
      </body>
    </html>
  );
}
