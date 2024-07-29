export default function Square({ value = " " }) {
    function clickHandler() {
        alert(value + " clicked!");
    }

    return <button className="square" onClick={clickHandler}>{value}</button>
}