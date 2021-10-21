var count = 3;
var su_likesElement = document.querySelector ("#su_likes");


function addLikes() {
    count++;
    su_likesElement.innerText = count + "like(s)";
    console.log (count);
}