"use strict";

function Person(name, surname) {
    this.name = name;
    this.surname = surname;
    this.toString = function () {
        return "El nombre: " + this.name + ", apellido: " + this.surname;
    }
}

function ListaObjetos() {

    this.MAX_ELEMENT_LIST = 10;
    this.list = [];
    this.isEmpty = function () {
        return (this.list.length === 0);
    }
    this.isFull = function () {
        return (this.list.length === this.MAX_ELEMENT_LIST);
    }
    this.size = function () {
        return this.list.length;
    }
    this.add = function (Person) {
        this.list.push(Person);

        return this.size();
    }
    this.addAt = function (persona, index) {
        if (index < 0 || index > this.size()) throw "El indice esta fuera del tamaño de la lista";

        this.list.splice(index, 0, persona);

        return this.size();
    }
    this.get = function (index) {
        return this.list[index];
    }
    this.toString = function () {
        var cadena = "";
        this.list.forEach(function (t) {
            cadena += t.toString() + " - ";
        });
        return cadena;
    }
    this.indexOf = function (persona) {
        return this.list.findIndex(function (t, index) {
            if (t.name == persona.name && t.surname == persona.surname) {
                return t;
            }
        })
    }
    this.lastIndexOf = function (persona) {
        for (var i = this.list.length - 1; i > 0; i--) {
            if (this.list[i].name == persona.name && this.list[i].surname == persona.surname) {
                return i;
            }
        }
        return -1;
    }
    this.capacity = function () {
        return this.MAX_ELEMENT_LIST;
    }
    this.clear = function () {
        this.list.length = 0;
    }
    this.firstElement = function () {
        return this.list[0];
    }
    this.lastElement = function () {
        return this.list[this.size() - 1];
    }
    this.remove = function (index) {
        return this.list.splice(index, 1);
    }
    this.removeElement = function (elem) {
        var index = this.indexOf(elem);

        if (index == -1) {
            return false
        } else {
            while ((index = this.indexOf(elem)) !== -1) {
                this.list.splice(index, 1);
            }
            return true;
        }
    }
    this.set = function (person, index) {
        this.list[index]=person;
    }


}

//Probando metodos.

var lista = new ListaObjetos();

//añadimos 5 personas:

console.log("Tamaño de la lista: " + lista.add(new Person("Sergio", "Santos")));
console.log("Tamaño de la lista: " + lista.add(new Person("Luis", "Ortega")));
console.log("Tamaño de la lista: " + lista.add(new Person("Ramiro", "Peñal")));
console.log("Tamaño de la lista: " + lista.add(new Person("Oscar", "Arribas")));
console.log("Tamaño de la lista: " + lista.add(new Person("Maria", "Francisca")));

//Mostramos la lista y probamos mas metodos.

console.log(lista.toString());
console.log("Esta vacia la lista : " + lista.isEmpty());
console.log("Esta llena la lista: " + lista.isFull());
console.log("Tamaño de la lista: " + lista.size());

//Añadimos personas por index.

console.log("Tamaño de la lista, metemos a Juana en la posicion 3: " + lista.addAt(new Person("Juana", "Asecas"), 3));
console.log("Tamaño de la lista, metemos a mario en la posicion 0: " + lista.addAt(new Person("Mario", "Lupas"), 0));

//Mostramos la lista

console.log(lista.toString());

console.log("La posicion 3 contiene la persona: " + lista.get(3).toString());

console.log("La primera posicion para una persona llamada Ramiro y de apellido Peñal es : " + lista.indexOf(new Person("Ramiro", "Peñal")));

//metemos un ramiro en las posiciones mas ultimas para probar el lastindexof:
lista.addAt(new Person("Ramiro", "Peñal"), 6)
console.log("La primera ultima posicion para una persona llamada Ramiro y de apellido Peñal es : " + lista.lastIndexOf(new Person("Ramiro", "Peñal")));
console.log("La capacidad es de: " + lista.capacity());

console.log("La primera persona es: " + lista.firstElement().toString());
console.log("La ultima persona es: " + lista.lastElement().toString());
console.log("Borramos la persona 1: " + lista.remove(1));
console.log(lista.toString());
console.log("Borramos las personas de nombre Ramiro Peñal: " + lista.removeElement(new Person("Ramiro", "Peñal")));
console.log(lista.toString());
//cambiamos una la persona de la posicion 0 por Alfonso Ortega.

console.log(lista.set(new Person("Alfonso", "Ortega"),0));
console.log(lista.toString());
