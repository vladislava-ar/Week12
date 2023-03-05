function ShowInChat() {
    const imgValue = document.getElementById('img').value;
    const img = document.querySelector('img');
    img.src = imgValue;
    document.getElementById("img").value = "";

    const nameValue = document.getElementById('name').value;
    document.getElementById('chatName').innerHTML = nameValue;
    document.getElementById("name").value = "";

    const commentValue = document.getElementById('comment').value;
    document.getElementById('chatComment').innerHTML = commentValue;
    document.getElementById("comment").value = "";
}


function UpperFirstLetters(){
    let name = document.getElementById('name').value;
    let words = name.split(" ");
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
}
    words.join(" ");
}
