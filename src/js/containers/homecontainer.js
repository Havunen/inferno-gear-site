import {Inferno, Component} from './../infernowrapper';

export class HomeContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <h1>Hello from home</h1>
        )
    }
}
