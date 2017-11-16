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

function numberGet(index) {
    var error = document.getElementById("error");
    var resultant = document.getElementById("paraGet");

    try {
        resultant.value = get(list, parseInt(index));
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
        removeElement(list, parseInt(element));

        resultant.innerHTML = toString(list);
        error.innerHTML = "";
    } catch (err) {
        error.innerHTML = err;
    }
}

function clearList() {
    clear(list);

    var resultant = document.getElementById("list");

    resultant.innerHTML = toString(list);
}