import Navigo from 'navigo';
import {renderHomeView, renderAbout, renderComponents, renderComInput} from './renderer';

const router = new Navigo(null, false); // BasePathname, useHash

router.on({
    'components/input': renderComInput,
    'components': renderComponents,
    'about': renderAbout,
    '': renderHomeView
});

export function navigate(url) {
    router.navigate(url);
}
