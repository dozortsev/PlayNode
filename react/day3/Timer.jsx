class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            secondsElapsed: 0
        };
    }

    updateTimer() {
        this.setState((prevState) => ({secondsElapsed: prevState.secondsElapsed + 1}));
    }

    componentDidMount() {
        this.interval = setInterval(
            () => this.updateTimer(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <div>Seconds elapsed: {this.state.secondsElapsed}</div>
        );
    }
}

ReactDOM.render(<Timer />, document.getElementById('timer'));