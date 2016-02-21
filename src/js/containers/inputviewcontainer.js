import {Inferno, Component} from './../infernowrapper';
import {Link} from './../components/link';


const NestedStateless = (props) => (<section class={props.class}>{props.children}</section>);

export class InputViewConainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: 0
        };

        this.addStuff = this.addStuff.bind(this);
    }

    addStuff() {
        this.setState({
            value: 10
        });
    }

    render() {
        return (
            <div>
                <h2>IGearInput</h2>
                <button onClick={this.addStuff}>Add</button>
                <NestedStateless>
                    <NestedStateless key={1}><h1>1</h1></NestedStateless>
                    <NestedStateless class={''+this.state.value}><h2>{this.state.value}</h2></NestedStateless>
                </NestedStateless>
            </div>
        )
    }
}
