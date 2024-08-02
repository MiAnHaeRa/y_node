import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div>nextjs(page) hello</div>
      <ul>
        <li><a href="/sub">/pages/sub/index.js</a></li>
        <li><a href="/sub/about">/pages/sub/about.js</a></li>
        <li><a href="/sub/Product">/pages/sub/Product.js</a></li>
        <li><a href="/sub/fetch">/pages/sub/fetch.js</a></li>
      </ul>
    </>
  );
}
