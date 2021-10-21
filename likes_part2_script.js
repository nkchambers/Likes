var countNeil = 9;
var countNichole = 12;
var countJim = 9;


var nm_likesElement = document.querySelector ("#nm_likes");
var nk_likesElement = document.querySelector ("#nk_likes");
var jr_likesElement = document.querySelector ("#jr_likes");



function addLikes_Neil() {
    countNeil++;
    nm_likesElement.innerText = countNeil + "like(s)";
    console.log (countNeil);
} 

function addLikes_Nichole() {
    countNichole++;
    nk_likesElement.innerText = countNichole + "like(s)";
    console.log (countNichole);
}

function addLikes_Jim() {
    countJim++;
    jr_likesElement.innerText = countJim + "like(s)";
    console.log (countJim);
}