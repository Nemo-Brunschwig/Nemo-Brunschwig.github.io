let lang = "fr";
let style_lang = document.getElementById("lang");
if (style_lang === null) {
    style_lang = document.createElement("style");
    style_lang.id = "lang";
    style_lang.innerHTML = `.${switcher[lang]} {
        display: none;
    }`;
    let head = document.querySelector("head");
    head.appendChild(style_lang);
}

let switcher = {
    'fr': 'en',
    'en': 'fr'
}

function switchLang() {
    if (style_lang === null) {
        style_lang = document.createElement("style");
        style_lang.id = "lang";
        let head = document.querySelector("head");
        head.appendChild(style_lang);
    }
    style_lang.innerHTML = `.${lang} {
        display: none;
    }`;
    lang = switcher[lang];
}