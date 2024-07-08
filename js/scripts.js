function showAd2() {
    document.getElementById("p1").style.display = "none";
    document.getElementById("p2").style.display = "block";
    document.getElementById("progress1").style.display = "none";
    document.getElementById("progress2").style.display = "block";
}

function showAd3() {
    document.getElementById("p2").style.display = "none";
    document.getElementById("p3").style.display = "block";
    document.getElementById("progress2").style.display = "none";
    document.getElementById("progress3").style.display = "block";
}

function showAd4() {
    document.getElementById("p3").style.display = "none";
    document.getElementById("p4").style.display = "block";
    document.getElementById("progress3").style.display = "none";
    document.getElementById("progress4").style.display = "block";
}

function showAd5() {
    document.getElementById("p4").style.display = "none";
    document.getElementById("p5").style.display = "block";
    document.getElementById("progress4").style.display = "none";
    document.getElementById("progress5").style.display = "block";
}


// JavaScript para atualizar a data automaticamente
function updateDate() {
    var today = new Date();
    var day = String(today.getDate()).padStart(2, '0');
    var month = String(today.getMonth() + 1).padStart(2, '0');
    var dateText = `Restam apenas 124 unidades promocionais hoje dia ${day}/${month}, garanta o seu antes que termine!`;
    document.getElementById('promotional-text').innerText = dateText;
}
updateDate();