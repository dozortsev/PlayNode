class Game extends React.Component {
    render() {
        return (
            <div>
                <Board />
            </div>
        );
    }
}

ReactDOM.render(<Game />, document.getElementById('container'));