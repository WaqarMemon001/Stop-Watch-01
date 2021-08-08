
var mins = 0;
var secnds = 0;
var msecnds = 0;
var interval;

minBody = document.getElementById("min");
secBody = document.getElementById("sec");
msecBody = document.getElementById("msec");

function timer() {
    msecnds++
    msecBody.innerHTML = msecnds
    if (msecnds >= 100) {
        secnds++
        secBody.innerHTML = secnds
        msecnds = 0;
    } else if (secnds >= 60) {
        mins++
        secnds = 0;
        minBody.innerHTML = mins
    } 
}

function start() {
    interval = setInterval(timer, 10)
    
}
function stop() {
    clearInterval(interval)
    document.getElementById("myBtn").disabled = false;
}
function reset() {

    mins = 0;
    secnds = 0;
    msecnds = 0;
   
    minBody.innerHTML = mins;
    secBody.innerHTML = secnds;
    msecBody.innerHTML = msecnds;
    stop()
    document.getElementById("myBtn").disabled = false;

}
function disableBtn() {
    document.getElementById("myBtn").disabled = true;
}

function add() {
    var ulListb = document.getElementById('wrapper')
    var txtmin = ulListb.childNodes[1].childNodes[0].nodeValue  
    var txtsec = ulListb.childNodes[5].childNodes[0].nodeValue
    var txtmsec = ulListb.childNodes[9].childNodes[0].nodeValue
    var ulList = document.getElementById('ulList')
    var liList = document.createElement('h3')
    ulList.appendChild(liList)
    var txtNode = document.createTextNode("Min " + txtmin + " : " + "Sec " + txtsec + " : " + " Msec " + txtmsec )
    liList.appendChild(txtNode)
}


