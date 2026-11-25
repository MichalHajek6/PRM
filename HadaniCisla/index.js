//mas hadat cislo od 1-50 a a pokud cislo nizsi nez to spravne tak to napis ze cislo je spatne a spravne cislo je nizsi a to same naopak
//a pokud je spravne tak to napise ze jsi to uhadl a kdyz to uhodne tlacitko se zmeni z hadej na reset a resetne ti to stranku a muzes zacinat znovu


if("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
         navigator.serviceWorker.register("sw.js")
         .then(registration => {
            console.log("SW registered");
         })
         .catch(error => {
            console.log("SW registration failed: ", error);
         });
    });
}



function randomNumber(min, max){
   randomNum = Math.random() * (max - min) + min;
}


function hadej() {
    const cislo = parseFloat(document.getElementById("cislo").value);
    
    }
    document.getElementById("vysledek").innerText = vysledek;
    
