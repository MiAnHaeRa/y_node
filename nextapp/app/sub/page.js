import Link from "next/link";

export default function SubHome() {
    return (
        <>
            <h2>Sub Page</h2>
            <p><Link href="/">Main Page(/pages/page.js)</Link></p>
        </>
    );
}