class HelloWorld extends React.Component {
    render() {
        return (<h1>Hello {this.props.name}</h1>)
    }
}

ReactDOM.render(
    <HelloWorld name="Anton"/>,
    document.getElementById('area')
);

const data = (<h2>2 + 2 = {2 + 2}</h2>);

ReactDOM.render(data, document.getElementById('data'));

//

var fun = function (isLarge) {
    return (isLarge ? <h1>Lorem ipsum dolor.</h1> : <h6>Lorem ipsum dolor.</h6>);
};

ReactDOM.render(fun(true), document.getElementById('yes'));
ReactDOM.render(fun(false), document.getElementById('no'));

const newLine = <br/>;

console.log(typeof newLine);


function Welcome(props) {
    return <h1>Hello {props.name}</h1>
}

class Clock extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

ReactDOM.render(<Clock date={new Date()} />, document.getElementById('clock'));
