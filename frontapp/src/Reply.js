function Reply(data) {
    return (
        <>
            <span>{data.id}</span>
            <span>{data.title}</span>
            <span>{data.writer}</span>
        </>
    );
}

export default function Replies({ datas }) {
    return (
        datas.map((data) => (
            <div key={data.id}>
                <Reply {...data} />
            </div>
        ))
    )
}