import AppContext from "app/AppContext.mjs";

class Modal extends React.Component {

    static modalClassOpen = 'modal show d-block';
    static modalClassClose =  'modal';

    static contextType = AppContext;

    constructor(props) {
        super(props);
        this.state = {
            modalClass:  Modal.modalClassOpen
            
        };
        this.onCloseClick = this.onCloseClick.bind(this);
    }

    onCloseClick() {
        this.setState({
            modalClass: Modal.modalClassClose
        });

        this.context.removeModal(this.props.id);
    }

    render() {

        let key = 1;

        return React.createElement('div', { className: this.state.modalClass },
            React.createElement('div', null,
                React.createElement('div', { className: 'modal-dialog' },
                    React.createElement('div', { className: 'modal-content' }, [
                        React.createElement('div', { className: 'modal-header', key: key++ },
                            [
                                React.createElement('h5', { className: 'modal-title', key: key++ }),
                                React.createElement('button', { className: 'btn-close', onClick: this.onCloseClick, key: key++ })
                            ]
                        ),
                        React.createElement('div', { className: 'modal-body', key: key++ }, [
                            React.createElement('p', { key: key++ }, 'modal body')
                        ]),
                        React.createElement('div', { className: 'modal-footer', key: key++ }, [
                            React.createElement('button', { className: 'btn btn-secondary', key: key++ }, 'Close'),
                            React.createElement('button', { className: 'btn btn-primary', key: key++ }, 'Confirm')
                        ])
                    ]
                    )
                )
            )
        );
    }
}

export default Modal