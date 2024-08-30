

class Hello extends React.Component {

    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    render() {

        console.log(this.state);
        return React.createElement('div', null, `Hello ${this.props.toWhat}`);
    }
}

let hello = React.createElement(Hello, { toWhat: 'World' }, null);

let strictMode = React.createElement(React.StrictMode, null, hello);



export default function () {

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(strictMode);
}