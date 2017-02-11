
function printAllName(names, el) {

    for (var i = 0; i < names.length; i++) {

        el.innerHTML += names[i] + " ";
    }
}


function loopOverNamesOne() {

    var el = document.getElementById("namesOne");

    var names = ["Guy", "Gidget", "Zoe", "Blue", "Lisa", "Thomas"];

    printAllName(names, el);

}

function loopOverNamesTwo() {
    var el = document.getElementById("namesTwo");

    var names = '"Guy", "Gidget", "Zoe", "Blue", "Lisa", "Thomas"';

    printAllName(names, el);
}


window.onload = function () {

    loopOverNamesOne();

    loopOverNamesTwo();
    
}