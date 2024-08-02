import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div>nextjs(app) hello</div>
      <ul>
        <li><Link href="/sub">/app/sub/page.js</Link></li>
        <li><Link href="/sub/about">/app/sub/about/page.js</Link></li>
        <li><Link href="/blog/1">/app/blog/[slug]/page.js</Link></li>
      </ul>
    </>
  );
}
