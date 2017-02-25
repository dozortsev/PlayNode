
class Toggle extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isToggle: true
        };
    }

    handleClick = () => {
        this.setState((prevState) => ({
            isToggle: !prevState.isToggle
        }));
    };

    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.isToggle ? 'Yes' : 'No'}
            </button>
        );
    }
}

ReactDOM.render(<Toggle />, document.getElementById('app'));