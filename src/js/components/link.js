import {Inferno} from './../infernowrapper';
import {navigate} from './../urlrouter';

function clickHandler(event) {
    event.preventDefault();
    let href = event.target.attributes['href'].value;
    href = href.replace(/^\//,''); // remove first slash if exists
    navigate(href);
}

export const Link = (props) => (
    <a onClick={clickHandler} href={props.url}>{props.children}</a>
);