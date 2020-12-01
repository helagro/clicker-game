var all = [];
function load(){
    var area = document.getElementById("playArea");
    for(i = 0; i < 144; i++){
        var slot = document.createElement('div');
        slot.className = "slot";
        slot.id = "normal";
        area.appendChild(slot);
        all.push(slot);
    }
}
    
function start(){
    var myNode = document.getElementById("playArea");
    while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
    }
    all = [];
    load();
    var random = Math.floor(Math.random() * all.length);
    var clickMe = all[random];
    clickMe.style.background = "red";
    clickMe.id = "clickMe";
    clickMe.onclick = function(e){other(e);}
    document.getElementById("start").style.display = "none";
    document.getElementById("score").style.display = "block";

    counter()
}

var num = 0;
function other(event){
    event.target.id = "normal";
    event.target.style.background = "black";
    event.target.onclick = function(e){}
    var random = Math.floor(Math.random() * all.length);
    var clickMe = all[random];
    clickMe.style.background = "red";
    clickMe.id = "clickMe";
    clickMe.onclick = function(e){other(e);}
    num ++;
    document.getElementById("clicked").innerHTML = num;
}

let running = false
let time = 30
function counter(){
    time --;
    document.getElementById("time").innerHTML = time
    setTimeout(counter, 1000)

    if(time == 0){
        alert("Game over")
    }
}