//can be pasted into console
function run(){
    for(element of document.getElementsByClassName("slot")){
        if(element.style.backgroundColor == "red"){
            element.click()
            setTimeout(run, 500);
        }
    }
}
run()