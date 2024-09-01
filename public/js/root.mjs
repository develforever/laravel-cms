

import App from "app/App.mjs";
import Modal from "app/Modal.mjs";
import AppContext from "app/AppContext.mjs";


class AppProvider extends React.Component {

    constructor(props) {
        super(props);


        this.state = {
            user: {
                username: "admin"
            },
            updateUser: (user) => {
                console.log('updateUser', this, user)
                this.setState({
                    user: {
                        username: "admin 2"
                    }
                });
            }
        }

    }

    componentDidMount(){
        setTimeout(this.state.updateUser, 1000, "admin 2");
    }

    render() {

        return React.createElement(AppContext.Provider, {
            value: this.state
        }, [
            React.createElement(App, { key: "app" }),
            React.createElement(Modal, { key: "modal" })
        ]);

    }
}

let strictMode = React.createElement(React.StrictMode, null, React.createElement(AppProvider));



export default function () {

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(strictMode);
}