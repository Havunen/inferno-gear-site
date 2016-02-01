import {Inferno, Component} from './../infernowrapper';

export class HomeContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <p class="introduction">Inferno Gear is set of ready made components built on top of Inferno JS library. <br />
                In my opinion runtime performanc eand instant responsivness of UI controls is really important for web applications, and thats why I started building this library. <br />
                Look and feel is inspired by Google Material design principles and in place editing.<br />
                Inferno gear is currently under active development, I'm adding more features every day.
                Special thanks for <a href="https://github.com/trueadm">@trueadm</a>, <a href="https://github.com/kflash">@kflash</a>, <a href="https://github.com/kuraga">@kuraga</a>, <a href="https://github.com/tejacques">@tejacques</a> and rest of <a href="https://github.com/trueadm/inferno/graphs/contributors">InfernoJS contributors</a> who has made this library possible!</p>

                <h2>Getting started! (TODO)</h2>
                <pre>
                    npm install xxxxxxxx
                    xxxxxxxxxx
                </pre>
            </div>
        );
    }
}
