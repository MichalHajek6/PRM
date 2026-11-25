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
    
