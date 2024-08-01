import styled from 'styled-components'

const ReactButton = (props) => {
    return <button className={props.className}>{props.children}</button>
}

const ReactargeButton = styled(ReactButton)`
    font-size : 20px;
    color : tomato;
`;

const PrimaryButton = styled(ReactButton)`
    color : ${function (props) {
        return props.stock > 20 ? 'green' : 'orange';
    }}
`;

export default function App() {
    return (
        <>
            <ReactargeButton>스타일버튼</ReactargeButton>
            <PrimaryButton stock={10}>재고</PrimaryButton>
            <PrimaryButton stock={50}>재고</PrimaryButton>
        </>
    );
}