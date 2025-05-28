let params = new URLSearchParams(document.location.search);
let lang = params.get("lang");
if (lang === "en") {
    let fr = document.querySelectorAll(".fr");
    fr.forEach(el => {
        el.setAttribute("hidden", "true");
    });
    let en = document.querySelectorAll(".en");
    en.forEach(el => {
        el.removeAttribute("hidden");
    });
}