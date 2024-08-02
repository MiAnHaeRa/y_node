import { useRouter } from "next/router";

export default function Id() {
    const router = useRouter();
    const id = router.query.id;
    return (
        <>
            <h1>/pages/sub/[id].js</h1>
            <p>Parameter id : {id}</p>
            <a href="/">Main Page(/pages/index.js)</a>
        </>
    );
}