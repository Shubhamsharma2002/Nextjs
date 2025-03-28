
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";

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
           <Link href="/about">
              <p>About</p>
           </Link>
           <Link href="/contact">
              <p>Contact</p>
           </Link>
           <Link href="/cart">
              <p>Cart</p>
           </Link>
        </div>
  );
}
