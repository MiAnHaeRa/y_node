import Link from "next/link";

export default function About() {
    return (
        <>
            <h2>About Page</h2>
            <p><Link href="/">Main Page(/app/index.js)</Link></p>
        </>
    );
}