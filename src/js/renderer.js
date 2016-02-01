import {Inferno, InfernoDOM} from './infernowrapper';
import {HomeContainer} from './containers/homecontainer';
import {ComponentListContainer} from './containers/componentlistcontainer';
import {InputViewConainer} from './containers/inputviewcontainer';
import {BigHeader} from './components/bigheader';

const headerDiv = document.getElementById('header'),
    contentDiv = document.getElementById('content');

let isHeaderActive = false;

function renderBigHeader() {
    if (isHeaderActive === false) {
        isHeaderActive = true;
        InfernoDOM.render(<BigHeader />, headerDiv);
    }
}

export function renderHomeView() {
    renderBigHeader();
    InfernoDOM.render(<HomeContainer />, contentDiv);
}

export function renderAbout() {
    console.log("todo render about");
}

export function renderComponents() {
    renderBigHeader();
    InfernoDOM.render(<ComponentListContainer />, contentDiv);
}

export function renderComInput() {
    renderBigHeader();
    InfernoDOM.render(<InputViewConainer />, contentDiv);
}