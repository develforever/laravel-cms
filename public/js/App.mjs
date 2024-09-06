
import AppContext from "app/AppContext.mjs";

class App extends React.Component {

    static contextType = AppContext;

    constructor(props) {
        super(props);
        this.state = { date: new Date() };

    }

    componentDidMount(...arg){
        console.log('update', arg);
    }

    render() {


        return React.createElement(AppContext.Consumer,
            null,
            (context) => {
                return React.createElement('div', null, `Hello ${context.user.username}`)
            }
        );

    }
}

export default App