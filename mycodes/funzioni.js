/* 
    Esercizio 1: Passare una Funzione come Argomento
    Scrivere una funzione execute che prende una funzione e un valore e restituisce il risultato della funzione applicata al valore.
*/

let execute = (f,a) => {
    return f(a);
}

function doppio(a) {
    return 2*a;
}

let risultato1 = execute(doppio, 21);
let risultato2 = execute(doppio, 5);

console.log(risultato1);
console.log(risultato2);

/*
    Esercizio 2: Funzione di Callback
    Scrivere una funzione repeatAction che accetta un'azione (funzione) e la esegue tre volte.
*/

function repeatAction(f){
    for(i=0;i<3;i++){
        f();
    }
}

repeatAction( () => {console.log("Ciao")});