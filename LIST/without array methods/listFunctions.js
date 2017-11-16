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

    list[size(list)] = elem;

    return size(list);

}

function addAt(list, elem, index) {
    if (isNaN(elem)) throw "El elemento no es un Number";
    if (isNaN(index)) throw "El index no es un Number";
    if (isFull(list)) throw "La lista esta esta llena";
    if (index < 0 || index > size(list)) throw "El indice esta fuera del tamaño de la lista";

    var tempo;
    var tam = size(list);
    tempo = elem;

    for (var j = parseInt(index); j < tam; j++) {
        elem = list[j];
        list[j] = tempo;
        tempo = elem;
    }

    list[tam] = tempo;
    return size(list);

}

function get(list, index) {

    if (index < 0 || index > size(list)) throw "El indice esta fuera del tamaño de la lista";
    if (isNaN(index)) throw "El indice no es un valor númerico"

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

}

function indexOf(list, elem) {
    if (isNaN(elem)) throw "El elemento no es un Number";

    var tam = size(list);
    var inter = true;
    var cont = 0;

    while (cont < tam && inter) {
        var inter = (list[cont] == elem) ? false : true;
        cont++;
    }

    if (inter) {
        return -1;
    } else {
        return cont - 1;
    }

}

function lastIndexOf(list, elem) {
    if (isNaN(elem)) throw "El elemento no es un Number";

    var tam = size(list);
    var inter = true;
    var cont = tam - 1;

    while (cont > 0 && inter) {
        var inter = (list[cont] == elem) ? false : true;
        cont--;
    }

    if (inter) {
        return -1;
    } else {
        return cont + 1;
    }
}

function capacity(list) {
    return MAX_ELEMENT_LIST;
}

function clear(list) {
    if (!isEmpty(list)) {
        var tam = size(list);

        for (var i = 0; i < tam; i++) {
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
    if (isNaN(element)) throw "El elemento no es un número";


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

function set(list, elem, index) {
    if (isNaN(elem)) throw "El elemento no es un Number";
    if (index < 0 || index > size(list)) throw "El indice esta fuera del tamaño de la lista";

    var aDevolt = list[index];

    list[index] = elem;

    return aDevolt;
}

function testList() {
    var list = [];

    console.log("Capacidad: " + capacity(list));
    console.log("Es vacía: " + isEmpty(list));
    console.log("Longitud: " + size(list));

    try {
        for (var i = 0; i < MAX_ELEMENT_LIST; i++) {
            console.log("Nº de elementos: " + add(list, i * 10));
        }
        add(list, i); //It will generate an exception.
    } catch (err) {
        console.log(err);
    }

    console.log("The full stack: " + toString(list));
    console.log("The first element list: " + firstElement(list));
    console.log("The last element list: " + lastElement(list));
    console.log("first position of 40 in the list: " + indexOf(list, 40));
    console.log("last position of 40 in the list: " + lastIndexOf(list, 40));

    try {
        console.log("Consumed index 3: " + remove(list, 3));
        console.log("Consumed elemen 40") + removeElement(list, 40);
        console.log("Set element 6 by 90") + set(list, 90, 6);
        console.log("The list: " + toString(list));
    } catch (err) {
        console.log(err); //When the queue is empty, an exception will be catched.
    }
}

window.onload = testList;