let text = document.querySelector(".typewriting-text:not([hidden])");
let contents_fr = [
    "Jeux Vidéo",
    "Réalité étendue",
    "Web"
];
let contents_en = [
    "Game",
    "Extended reality",
    "Web"
];
let content = '';
let text_index = 0;
let char_index = 0;
let pause_timer = 0;
let states = {
    WRITE: 0,
    PAUSE: 1,
    CLEAR: 2
}
let state = states.WRITE;

let timer = setInterval(() => {
    switch (state) {
        case states.WRITE:
            write();
            break;
        case states.PAUSE:
            pause(10);
            break;
        case states.CLEAR:
            clear();
            break;
    }
}, 75);

/**
 * when the cursor is in writing state
 */
function write() {
    if (Math.floor(char_index / 2) < content.length) {
        if (char_index % 2)
            text.innerHTML += content[Math.floor(char_index / 2)];
        char_index++;
    } else {
        char_index = content.length;
        state = states.PAUSE;
    }
}

/**
 * when the cursor is in pause state
 * @param {number} time the time to be in pause
 */
function pause(time) {
    if (pause_timer < time) {
        pause_timer++;
    } else {
        pause_timer = 0;
        state = states.CLEAR;
    }
}

/**
 * when the cursor is in clear state
 */
function clear() {
    if (char_index > 0) {
        text.innerHTML = text.innerHTML.slice(0, -1);
        char_index--;
    } else {
        char_index = 0;
        content = lang === "en" ? contents_en[text_index % contents_en.length] : contents_fr[text_index % contents_fr.length];
        text_index++;
        state = states.WRITE;
    }
}