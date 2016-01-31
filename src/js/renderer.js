import {Inferno, InfernoDOM} from './infernowrapper';
import {HomeContainer} from './containers/homecontainer';
import {BigHeader} from './components/bigheader';

const headerDiv = document.getElementById('header'),
    contentDiv = document.getElementById('content');

function renderBigHeader() {
    InfernoDOM.render(<BigHeader />, headerDiv);
}

export function renderHomeView() {
    renderBigHeader();
    InfernoDOM.render(<HomeContainer />, contentDiv);
}

export function renderAbout() {
    console.log("todo render about");
}

export function renderDocsInput() {
    console.log("TODO render docs input");
}
