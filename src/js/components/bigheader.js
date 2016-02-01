import {Inferno} from './../infernowrapper';
import {Link} from './link';

export const BigHeader = () => (
    <div class="topheader">
        <Link href="/">
            <img class="logo" src="/img/inferno-gear.svg" alt="inferno-gear" />
            <h1>Inferno Gear</h1>
        </Link>
        <h4>The open source component library for <a href="https://github.com/trueadm/inferno">InfernoJS</a></h4>
        <ul class="topheader-actions">
            <li class="topheader-action">Installation</li>
            <li class="topheader-action"><Link url="/components">Components</Link></li>
            <li class="topheader-action">Github</li>
        </ul>
    </div>
);
