// se il mio browser SUPPORTA i ServiceWorker
if ("serviceWorker" in navigator) { // l'oggetto navigator non è altro che il browser
    // navigator.serviceWorker sono le API
    // del browser per il supporto ai ServiceWorker
    // Registrare un ServiceWorker indica associare
    // il service worker alla mia web app
    navigator.serviceWorker.register("/serviceWorker.js") // crea un Promise
      .then(function(registration) {
        console.log("Service Worker registrato con scope:", registration.scope);
      })
      .catch(function(error) {
        console.log("Registrazione Service Worker fallita:", error);
      })
}


let bottone = document.getElementById("bottone");
bottone.addEventListener("click", (evento) => {
    console.log("Qualcuno mi ha cliccato");
})