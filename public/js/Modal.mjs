import AppContext from "app/AppContext.mjs";

class Modal extends React.Component {

    static contextType = AppContext;

    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    render() {

        // console.log('modal', this);

        //         <div class="modal" tabindex="-1">
        //   <div class="modal-dialog">
        //     <div class="modal-content">
        //       <div class="modal-header">
        //         <h5 class="modal-title">Modal title</h5>
        //         <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        //       </div>
        //       <div class="modal-body">
        //         <p>Modal body text goes here.</p>
        //       </div>
        //       <div class="modal-footer">
        //         <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        //         <button type="button" class="btn btn-primary">Save changes</button>
        //       </div>
        //     </div>
        //   </div>
        // </div>

        return React.createElement('div', null, `Hello ${this.props.toWhat}`);
    }
}

export default Modal