

import App from "app/App.mjs";
import Modals from "app/Modals.mjs";
import AppContext from "app/AppContext.mjs";
import uuidv4 from 'uuid-v4';


class AppProvider extends React.Component {

    constructor(props) {
        super(props);


        this.state = {
            user: {
                username: "admin"
            },
            modals: [],
            addModal: (modalConfig) => {
                let modals = [...this.state.modals];
                modalConfig.id = uuidv4();
                modals.push(modalConfig);
                this.setState({
                    modals
                });
            },
            removeModal: (id) => {
                let modals = [...this.state.modals];
                
                let index = modals.findIndex((e)=>e.id==id);
                if(index !==-1){
                    modals.splice(index, 1);
                }

                this.setState({
                    modals
                });
            },
            updateUser: (user) => {
                this.setState({
                    user: user
                });
            }
        }

    }

    componentDidMount() {
        setTimeout(this.state.updateUser, 1000, {
            username: "admin 2"
        });

        setTimeout(this.state.addModal, 2000, {
            title: "Modal 1"
        });
    }

    render() {

        return React.createElement(AppContext.Provider, {
            value: this.state
        }, [
            React.createElement(App, { key: "app" }),
            React.createElement(Modals, { key: "modal" })
        ]);

    }
}

let strictMode = React.createElement(React.StrictMode, null, React.createElement(AppProvider));



export default function () {

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(strictMode);
}