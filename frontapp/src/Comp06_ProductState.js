import './ProductState.css';
import { useState } from 'react';

const datas = [
    { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
    { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
    { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
    { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
    { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
]

function SearchBar({ filterText, inStockOnly, onFilterTextChange, onInStockOnly }) {
    return (
        <form>
            <input type="text" value={filterText} placeholder="Search..." onChange={e => onFilterTextChange(e.target.value)} />
            <label>
                <input type="checkbox" checked={inStockOnly} onChange={e => onInStockOnly(e.target.checked)} /> Only show product in stock
            </label>
        </form>
    );
};

function ProductTable({ products, filterText, inStockOnly }) {
    let nowCategory = "";
    let list = [];

    products.forEach(product => {
        if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
            return;
        }

        if (inStockOnly && !product.stocked) {
            return;
        }

        if (nowCategory != product.category) {
            nowCategory = product.category;
            list.push(<CategoryRow category={nowCategory} />)
        }

        list.push(<ProductRow product={product} />);
    });

    console.log(list);

    return (
        <table>
            <thead>
                <tr>
                    <td>Name</td>
                    <td>Price</td>
                </tr>
            </thead>
            <tbody>{list}</tbody>
        </table>
    );
};

function CategoryRow({ category }) {
    return (
        <tr key={category}>
            <th colSpan="2">
                {category}
            </th>
        </tr>
    );
};

function ProductRow({ product }) {
    let name = product.stocked ? product.name :
        <span style={{ color: "red" }}>{product.name}</span>

    return (
        <tr key={product.name}>
            <td>{name}</td>
            <td>{product.price}</td>
        </tr>
    );
};

//최종 출력
function App() {
    let [filterText, setFilterText] = useState('');
    let [inStockOnly, setInStockOnly] = useState(false);

    return (
        <>
            <SearchBar filterText={filterText} inStockOnly={inStockOnly} onFilterTextChange={setFilterText} onInStockOnly={setInStockOnly} />
            <ProductTable products={datas} filterText={filterText} inStockOnly={inStockOnly} />
        </>
    );
}

export default App;