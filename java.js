function init() {
     
     document.body.appendChild(a);
    } 
function createA(link, text){
    let a = document.createElement("a");
    if (link){
    a.setAttribute("href", link);
    } 
    if(text){
    let aText = document.createTextNode(text);
    a.appendChild(aText);
    } 
    return a;
} 
window.onload =init