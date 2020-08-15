var output = document.getElementById("output-text");
var input = document.getElementById("input-text");
var str;



var radios = document.getElementsByName("radios");

document.getElementById("input-text").onkeyup = function(){

    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked && radios[i].value === "uppercase") {
            output.innerHTML = input.value.toUpperCase();
        }
    }






}
