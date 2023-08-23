var count = 3;
var sue_likesElement = document.querySelector ("#su_likes");


function addLikes() {
    count++;
    sue_likesElement.innerText = count + "like(s)";
    console.log (count);
}