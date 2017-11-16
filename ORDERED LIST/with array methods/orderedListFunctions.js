"use strict";

var MAX_ELEMENT_LIST = 10;

function create() {
    return [];
}

function isEmpty(list) {
    return (list.length === 0);
}

function isFull(list) {
    return (list.length === MAX_ELEMENT_LIST);
}

function size(list) {
    return list.length;
}

function add(list, elem) {
    if (isNaN(elem)) throw "El elemento no es un Number";
    if (isFull(list)) throw "La lista esta esta llena";

    list.push(elem);
    list.sort();

    return size(list);
}

function get(list, index) {
    if (index < 0 || index > size(list)) throw "El indice esta fuera del tamaño de la lista";
    if (isNaN(index)) throw "El indice no es un valor númerico"

    return list[index];
}

function toString(list) {
    return list.toString();
}

function indexOf(list, elem) {
    if (isNaN(elem)) throw "El elemento no es un Number";

    return list.indexOf(elem);
}

function lastIndexOf(list, elem) {
    if (isNaN(elem)) throw "El elemento no es un Number";

    return list.lastIndexOf(elem);
}

function capacity(list) {
    return MAX_ELEMENT_LIST;
}

function clear(list) {
    list.length = 0;
}

function firstElement(list) {
    if (isEmpty(list)) throw "La lista esta vacia";

    return list[0];
}

function lastElement(list) {
    if (isEmpty(list)) throw "La lista esta vacia";

    return list[size(list) - 1];
}

function remove(list, index) {
    if (index < 0 || index > size(list)) throw "El indice esta fuera del tamaño de la lista";

    return list.splice(index, 1);
}

function removeElement(list, element) {
    if (isNaN(element)) throw "El elemento no es un número";

    var index = indexOf(list, element);

    if (index == -1) {
        return false;
    } else {
        while ((index = indexOf(list, element)) !== -1) {
            list.splice(index, 1);
        }
        return true;
    }
}

function testList() {

    var list = [];
    console.log("Capacidad: " + capacity(list));
    console.log("Es vacía: " + isEmpty(list));
    console.log("Esta llena: " + isFull(list));
    console.log("Tamaño de la lista: " + size(list));
    console.log("Añadimos un elemento 5: " + add(list, 5));
    console.log("Añadimos otro elemento 8: " + add(list, 8));
    console.log("Añadimos otro elemento 50: " + add(list, 50));
    console.log("Añadimos otro elemento 100: " + add(list, 100));
    console.log(list);
    console.log("El elemento de la posicion 2 es: " + get(list, 2));
    console.log("first position of 50 in the list: " + indexOf(list, 50));
    console.log("last position of 8 in the list: " + lastIndexOf(list, 8));
    console.log("The first element list: " + firstElement(list));
    console.log("The last element list: " + lastElement(list));
    console.log("Consumed index 3: " + remove(list, 3));
    console.log(list);
    console.log("Borramos el elemento 100: " + removeElement(list, 100));
    console.log(list);

}

window.onload = testList;