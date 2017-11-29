"use strict";

function Person(name, surname) {
    var name = name;
    var surname = surname;
    this.toString = function () {
        return "El nombre: " + name + ", apellido: " + surname;
    }
    Object.defineProperty(this, "name", { get: function () { return name; } });
    Object.defineProperty(this, "surname", { get: function () { return surname; } });
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
        list.sort(function (a,b) {

            if(a.name==b.name){

                return a.surname>b.surname;

            }else{

                return a.name>b.name;

            }

        })

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
            if (t.name == persona.name && t.surname == persona.surname) {
                return t;
            }
        })
    }
    this.lastIndexOf = function (persona) {
        if(! persona instanceof Person) throw new MyError("El objeto no es una persona");
        for (var i = list.length - 1; i > 0; i--) {
            if (list[i].name == persona.name && list[i].surname == persona.surname) {
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
        var index = list.indexOf(persona);

        if (index == -1) {
            return false;
        } else {
            while ((index = list.indexOf(persona)) !== -1) {
                list.splice(index, 1);
            }
            return true;
        }
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

//Mostramos la lista

console.log(lista.toString());

console.log("La posicion 3 contiene la persona: " + lista.get(3).toString());

console.log("La primera posicion para una persona llamada Ramiro y de apellido Peñal es : " + lista.indexOf(new Person("Ramiro", "Peñal")));
console.log("La primera ultima posicion para una persona llamada Ramiro y de apellido Peñal es : " + lista.lastIndexOf(new Person("Ramiro", "Peñal")));
console.log("La capacidad es de: " + lista.capacity());

console.log("La primera persona es: " + lista.firstElement().toString());
console.log("La ultima persona es: " + lista.lastElement().toString());
console.log("Borramos la persona 1: " + lista.remove(1));
console.log(lista.toString());
console.log("Borramos las personas de nombre Ramiro Peñal: " + lista.removeElement(new Person("Ramiro", "Peñal")));
console.log(lista.toString());
//cambiamos una la persona de la posicion 0 por Alfonso Ortega.
console.log(lista.toString());
