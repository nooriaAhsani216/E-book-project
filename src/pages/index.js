import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import MainHome from "@/components/Home/HomeMain";
import CardMain from "@/components/books/MainBook";
import CardList from "@/components/books/BookList";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div>
     <MainHome/>
    </div>
  );
}
