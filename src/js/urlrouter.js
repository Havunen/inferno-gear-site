import Navigo from 'navigo';
import {renderHomeView, renderAbout, renderDocsInput} from './renderer';

const clickEvent = document.ontouchstart ? 'touchstart' : 'click',
    router = new Navigo(null, false), // BasePathname, useHash
    HAS_ATTRIBUTE = 'hasAttribute',
    RE_ORIGIN = /^.+?\/+[^\/]+/;

router.on({
    'docs/input': renderDocsInput,
    'about': renderAbout,
    '': renderHomeView
});


// Change behavior of links to actually call router rather than reloading page
function click(e) {
    if (e.which != 1 /* not left click */
        || e.metaKey || e.ctrlKey || e.shiftKey /* or meta keys */
        || e.defaultPrevented) {
        return;
    }

    /* Get the closest link instance */
    let el = e.target;
    while (el && el.nodeName !== 'A') {
        el = el.parentNode;
    }

    if (!el || el.nodeName !== 'A' // not A tag
        || el[HAS_ATTRIBUTE]('download') // has download attr
        || !el[HAS_ATTRIBUTE]('href') // has no href attr
        || el.target && el.target != '_self' // another window or frame
        || el.href.indexOf(window.location.href.match(RE_ORIGIN)[0]) == -1 // cross origin
    ) {
        return;
    }

    e.preventDefault();
    navigate(el.href);
}

document.addEventListener(clickEvent, click);


export function navigate(url) {
    router.navigate(url);
}
