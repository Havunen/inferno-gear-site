import {Inferno, Component} from './../infernowrapper';
import {Link} from './../components/link';

export class ComponentListContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ul>
                <li><Link url="/components/input">Input</Link></li>
            </ul>
        )
    }
}