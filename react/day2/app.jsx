function App(props) {
    console.log('Setup');
    return (
        <div>
            <SearchBar />
            <FilterableProductTable data={props} />
        </div>
    );
}

class SearchBar extends React.Component {

    render() {
        return (
            <div>
                <input type="text" id="search-input" placeholder="Search..."/>
                <br/>
                <label htmlFor="checkbox-input">
                    <input type="checkbox" id="checkbox-input"/>
                    Only show products in stock
                </label>
            </div>
        );
    }
}

function FilterableProductTable(props) {
    return (
        <div>
            <table>
                <thead>
                <tr>
                    <td>Name</td>
                    <td>Price</td>
                </tr>
                </thead>
                <ProductTable data={props.data} />
            </table>
        </div>
    );
}

class ProductTable extends React.Component {
    render() {
        var array = data.map((item) => {
            const category = [<ProductTableCategory type={item.type} />];
            const rows = item.stuff.map((product) => <ProductTableRow stuff={product}/>);
            category.push(...rows);

            return category;
        });
        console.log(array);
        return (
            <tbody>{array}</tbody>
        );
    }
}

class ProductTableCategory extends React.Component {
    render() {
        return (
            <tr>
                <td colSpan="2"><b>{this.props.type}</b></td>
            </tr>
        );
    }
}

class ProductTableRow extends React.Component {
    render() {
        return (
            <tr>
                <td style={{color: this.props.stuff.stocked ? 'white' : 'red'}}>
                    {this.props.stuff.name}
                </td>
                <td>{this.props.stuff.price}</td>
            </tr>
        );
    }
}

const data = [
    {
        type: 'Sport',
        stuff: [
            {name: 'Football', price: '$49.99', stocked: true},
            {name: 'Baseball', price: '$4.99', stocked: true},
            {name: 'Basketball', price: '$9.99', stocked: false}
        ]
    },
    {
        type: 'Electronics',
        stuff: [
            {name: 'iPod Touch', price: '$99.99', stocked: true},
            {name: 'iPhone 5', price: '$500.99', stocked: false},
            {name: 'Nexus 7', price: '$500.99', stocked: false}
        ]
    }
];



ReactDOM.render(<App />, document.getElementById('app'));