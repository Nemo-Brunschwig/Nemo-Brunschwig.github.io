let switch_input = document.getElementById("theme-switcher-input");
switch_input.addEventListener("change", (e) => switchTheme(e));

function switchTheme(e) {
    if (switch_input.checked) {
        let style = document.getElementById("light-theme");
        if (style === null) {
            style = document.createElement("style");
            style.id = "light-theme";
            let head = document.querySelector("head");
            head.appendChild(style);
        }
        style.innerHTML = `:root {
            --rosewater: #dc8a78;
            --flamingo: #dd7878;
            --pink: #ea76cb;
            --mauve: #8839ef;
            --red: #d20f39;
            --maroon: #e64553;
            --peach: #fe640b;
            --yellow: #df8e1d;
            --green: #40a02b;
            --teal: #179299;
            --sky: #04a5e5;
            --sapphire: #209fb5;
            --blue: #1e66f5;
            --blue-hover: #649df8;
            --lavender: #7287fd;
            --text: #4c4f69;
            --subtext1: #5c5f77;
            --subtext0: #6c6f85;
            --overlay2: #7c7f93;
            --overlay1: #8c8fa1;
            --overlay0: #9ca0b0;
            --surface2: #acb0be;
            --surface1: #bcc0cc;
            --surface0: #ccd0da;
            --base: #eff1f5;
            --mantle: #e6e9ef;
            --crust: #dce0e8;
            --success: var(--green);
            --info: var(--blue);
            --warning: var(--yellow);
            --danger: var(--red);
            --light: var(--base);
            --dark: var(--text);
            --modal-hover: rgba(76, 79, 105, 0.9)
        }`
    } else {
        let style = document.getElementById("light-theme");
        if (style === null) {
            style = document.createElement("style");
            style.id = "light-theme";
            let head = document.querySelector("head");
            head.appendChild(style);
        }
        style.innerHTML = "";
    }
}