"use strict";

var list = new ListaObjetos();

function pushPersona(name, surname) {
    var error = document.getElementById("error");
    var resultant = document.getElementById("list");

    try {
        list.add(new Person(name,surname));

        resultant.innerHTML = list.toString();
        error.innerHTML = "";
    } catch (err) {
        error.innerHTML = err;
    }
}
function personGet(index) {
    var error = document.getElementById("error");
    var resultant = document.getElementById("paraGet");

    try {
        resultant.value = list.get(index).toString();
        error.innerHTML = "";
    } catch (err) {
        error.innerHTML = err;
    }
}
function PersonRemove(index) {
    var error = document.getElementById("error");
    var resultant = document.getElementById("list");

    try {
        list.remove(index);

        resultant.innerHTML = list.toString();
        error.innerHTML = "";
    } catch (err) {
        error.innerHTML = err;
    }
}
function PersonRemoveElement(persona) {
    var error = document.getElementById("error");
    var resultant = document.getElementById("list");

    try {
        list.removeElement(persona);

        resultant.innerHTML = list.toString();
        error.innerHTML = "";
    } catch (err) {
        error.innerHTML = err;
    }

}
function clearList() {
    list.clear();

    var resultant = document.getElementById("list");

    resultant.innerHTML = list.toString();
}