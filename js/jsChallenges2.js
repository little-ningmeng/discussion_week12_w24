document.querySelector("#sameAddress").addEventListener("click", function() {
    if (this.checked) {
        let add = document.querySelector("#bill").value;
        document.querySelector("#home").value = add;
        document.querySelector("#home").disabled = true;
    } else {
        document.querySelector("#home").value = "";
        document.querySelector("#home").disabled = false;
    }
})

