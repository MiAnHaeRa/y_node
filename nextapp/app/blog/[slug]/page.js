export default function Page({ params }) {
    let { slug } = params;
    return <div>My Post: {slug}</div>
}