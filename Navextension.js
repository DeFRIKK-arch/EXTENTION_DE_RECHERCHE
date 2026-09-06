document.getElementById("google_rech").addEventListener("click", google);

function google() {
    const la_recherche = document.getElementById("recherche").value.trim();

    if (la_recherche !== "") {
        const googleurl = "https://www.google.com/search?q=" + encodeURIComponent(la_recherche);
        window.open(googleurl, "_blank", "width=500,height=500");
    }
}

document.getElementById("opera_rech").addEventListener("click", opera);

function opera() {
    const la_recherche = document.getElementById("recherche").value.trim();

    if (la_recherche !== "") {
        const operaurl = "https://www.opera.com/search?q=" + encodeURIComponent(la_recherche);
        window.open(operaurl, "_blank", "width=500,height=500");
    }
}

document.getElementById("wikipedia_rech").addEventListener("click", wikipedia);

function wikipedia() {
    const la_recherche = document.getElementById("recherche").value.trim();

    if (la_recherche !== "") {
        const wikipediaurl = "https://fr.wikipedia.org/wiki/Special:Search?search=" + encodeURIComponent(la_recherche);
        window.open(wikipediaurl, "_blank", "width=500,height=500");
    }
}
