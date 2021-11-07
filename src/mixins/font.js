import Observer from 'fontfaceobserver';

// import fonts stylesheet
import './fonts.scss';

export function loadFont() {

    // observe body font
    const NotoSans = new Observer('NotoSans');

    NotoSans.load().then(() => {
    document.documentElement.classList.add('NotoSans');
    });

    // observe body font
    const M_PLUS_1p = new Observer('M_PLUS_1p');

    M_PLUS_1p.load().then(() => {
    document.documentElement.classList.add('M_PLUS_1p');
    });

}
