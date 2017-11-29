"use strict";

function Person(name, surname) {
    var name = name;
    var surname = surname;
    this.toString = function () {
        return "El nombre: " + name + ", apellido: " + surname;
    }
    Object.defineProperty(this, "valueName", { get: function () { return name; } });
    Object.defineProperty(this, "valueSurname", { get: function () { return surname; } });
}
function MyError(message) {
    this.name = 'Error lista';
    this.message = message || 'Default Message';
    this.stack = (new Error()).stack;
}
MyError.prototype = Object.create(Error.prototype);
MyError.prototype.constructor = MyError;
function ListaObjetos() {

    var MAX_ELEMENT_LIST = 10;
    var list = [];
    this.isEmpty = function () {
        return (list.length === 0);
    }
    this.isFull = function () {
        return (list.length === MAX_ELEMENT_LIST);
    }
    this.size = function () {
        return list.length;
    }
    this.add = function (person) {
        if(! person instanceof Person) throw new MyError("El objeto no es una persona");
        if (this.isFull(list)) throw new MyError("La lista esta llena");

        list.push(person);

        return this.size();
    }
    this.addAt = function (persona, index) {
        if(! persona instanceof Person) throw new MyError("El objeto no es una persona");
        if (this.isFull(list)) throw new MyError("La lista esta llena");
        if (isNaN(index)) throw new MyError("El index no es un entero");

        list.splice(index, 0, persona);

        return this.size();
    }
    this.get = function (index) {
        if (index < 0 || index > this.size()) throw new MyError("El indice esta fuera del tamaño de la lista");
        if (isNaN(index)) throw new MyError("El indice no es un valor númerico");

        return list[index];
    }
    this.toString = function () {
        var cadena = "";
        cadena += list.join(" - ");
        return cadena;
    }
    this.indexOf = function (persona) {
        if(! persona instanceof Person) throw new MyError("El objeto no es una persona");
        return list.findIndex(function (t, index) {
            if (t.valueName == persona.valueName && t.valueSurname == persona.valueSurname) {
                return t;
            }
        })
    }
    this.lastIndexOf = function (persona) {
        if(! persona instanceof Person) throw new MyError("El objeto no es una persona");
        for (var i = list.length - 1; i > 0; i--) {
            if (list[i].valueName == persona.valueName && list[i].valueSurname == persona.valueSurname) {
                return i;
            }
        }
        return -1;
    }
    this.capacity = function () {
        return MAX_ELEMENT_LIST;
    }
    this.clear = function () {
        list.length = 0;
    }
    this.firstElement = function () {
        if(this.isEmpty())throw new MyError("La lista esta vacia");
        return list[0];
    }
    this.lastElement = function () {
        if(this.isEmpty())throw new MyError("La lista esta vacia");
        return list[this.size() - 1];
    }
    this.remove = function (index) {
        if (index < 0 || index > this.size()) throw new MyError("El indice esta fuera del tamaño de la lista");
        return list.splice(index, 1);
    }
    this.removeElement = function (persona) {
        if(! persona instanceof Person) throw new MyError("El objeto no es una persona");
        var index = this.indexOf(persona);

        if (index == -1) {
            return false;
        } else {
            while ((index = this.indexOf(persona)) !== -1) {
                list.splice(index, 1);
            }
            return true;
        }
    }
    this.set = function (persona, index) {
        if(! persona instanceof Person) throw new MyError("El objeto no es una persona");
        if (index < 0 || index > this.size()) throw new MyError("El indice esta fuera del tamaño de la lista");

        var aDevolver=list[index]=persona;
        list[index]=persona;
        return aDevolver;
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
