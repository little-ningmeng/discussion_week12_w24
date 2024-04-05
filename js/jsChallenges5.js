document.querySelector("#bandana").addEventListener("mouseover", function() {
    let pos = document.querySelector("#display");
    pos.insertAdjacentHtml('beforeend', this.alt);
    
})