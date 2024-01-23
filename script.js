
function showDate() {
    var date = new Date() // si rien dans les (),  représente la date et heure courante du moment de l'instanciation

    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();

    

    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    var today  = new Date();
   
    var dfr = today.toLocaleDateString("fr-FR", options);
  
    
    document.getElementById('hour').innerHTML = h;
    document.getElementById('minute').innerHTML = m;
    document.getElementById('second').innerHTML = s;
    document.getElementById('date').innerHTML = dfr;

}

setInterval(() => {
    
    showDate()
}, 1000);

