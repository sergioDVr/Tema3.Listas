"use strict";

var MAX_ELEMENT_LIST = 10;

function create() {

    var list = [];

    for (var i = 0; i < MAX_ELEMENT_LIST; i++) {
        list[i] = NaN;
    }

    return list;
}

function isEmpty(list) {


    return (isNaN(list[0]));

}

function isFull(list) {

    return (isNaN(list[MAX_ELEMENT_LIST - 1])) ? false : true;

}

function size(list) {

    if (isFull(list)) {

        return MAX_ELEMENT_LIST;

    } else if (isEmpty(list)) {

        return 0;

    } else {

        var cont = 0;

        while (!isNaN(list[cont])) {

            cont++;

        }

        return cont;
    }

}

function add(list, elem) {

    if (isNaN(elem)) throw "El elemento no es un Number";

    if (isFull(list)) throw "La lista esta esta llena";

    var tam = size(list);

    var aux;

    if (isEmpty(list)) {

        list[0] = elem;

    } else {

        var inter = true;
        for (var i = 0; i < tam && inter; i++) {

            if (list[i] >= elem) {

                aux = list[i];
                list[i] = elem;
                elem = aux;

            }

        }

        list[tam] = elem;


    }

    return size(list);

}

function get(list, index) {

    if (index < 0 || index > size(list)) throw "El indice esta fuera del tamaño de la lista";

    return list[index];

}

function toString(list) {

    var str = "";
    if (!isEmpty(list)) {
        var length = size(list);
        for (var i = 0; i < length - 1; i++) {
            str = str + list[i] + " - ";
        }
        str = str + list[i];
    }
    return str;


    return cadena;
}

function indexOf(list, elem) {

    if (isNaN(elem)) throw "El elemento no es un Number";

    var tam = size(list);
    var inter = true;
    var cont = 0;

    while (cont < tam && inter) {

        if(list[cont] > elem) return -1;
        var inter = (list[cont] == elem) ? false : true;
        cont++;


    }

    if (inter) {

        return -1;

    } else {

        return cont - 1;

    }

}

function capacity(list) {
    return MAX_ELEMENT_LIST;
}

function clear(list) {

    if (!isEmpty(list)) {

        var size = size(list);

        for (var i = 0; i < size; i++) {

            list[i] = Number.NaN;

        }

    }

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

    var tam = size(list);

    var aDevolver = list[index];

    list[i] = 0;

    for (var i = index; i < tam; i++) list[i] = list[i + 1];

    return aDevolver;

}

function removeElement(list, element) {

    var index = indexOf(list, element);

    if (index == -1) {

        return false;

    } else {

        while ((index = indexOf(list, element)) !== -1) {

            var tam = size(list);

            for (var i = index; i < tam; i++) list[i] = list[i + 1];

        }

        return true;

    }

}
function testList() {
    //var queue = create ();
    var list = [];
    console.log("Capacidad: " + capacity(list));
    console.log("Es vacía: " + isEmpty(list));
    console.log("Longitud: " + size(list));

    try {
        for (var i = 0; i < MAX_ELEMENT_LIST; i++) {
            console.log("Nº de elementos: " + add(list, Math.floor(Math.random()*10)));
        }
        add(list, i); //It will generate an exception.
    } catch (err) {
        console.log(err);
    }

    console.log("The full stack: " + toString(list));
    console.log("The first element list: " + firstElement(list));
    console.log("The last element list: " + lastElement(list));

    console.log("first position of 40 in the list: " + indexOf(list, 40));
    //clear(stack);

    try {

        console.log("Consumed index 3: " + remove(list, 3));
        console.log("Consumed elemen 40") + removeElement(list, 40);
        console.log("The list: " + toString(list));
    } catch (err) {
        console.log(err); //When the queue is empty, an exception will be catched.
    }
}

window.onload = testList;
