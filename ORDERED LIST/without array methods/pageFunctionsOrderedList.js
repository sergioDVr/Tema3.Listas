"use strict";

var list = create();

function pushNumber(num) {

    var error = document.getElementById("error");
    var resultant = document.getElementById("list");


    try {

        add(list, parseInt(num));
        resultant.innerHTML = toString(list);
        error.innerHTML = "";
    } catch (err) {

        error.innerHTML = err;

    }

}

function NumberRemove(index) {

    var error = document.getElementById("error");
    var resultant = document.getElementById("list");

    try {

        remove(list, parseInt(index));
        resultant.innerHTML = toString(list);
        error.innerHTML = "";
    } catch (err) {

        error.innerHTML = err;

    }

}

function NumberRemoveElement(element) {

    var error = document.getElementById("error");
    var resultant = document.getElementById("list");

    try {

        removeElement(list, element);
        resultant.innerHTML = toString(list);
        error.innerHTML = "";

    } catch (err) {

        error.innerHTML = err;

    }

}