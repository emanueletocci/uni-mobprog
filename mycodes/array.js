/* 
Esercizio 1: Accesso agli Elementi
Dichiarare un array colors contenente i valori "red", "green" e "blue". Stampa il primo e l’ultimo elemento.
*/

let colors = ["red", "green", "blue"];
console.log(colors);
console.log(colors[0]);

let n = colors.length; //lunghezza dell'array
console.log(colors[n-1]);

/* Si puó accedere direttamente a posizioni inesistenti dell'array senza che vengano generati warning. Semplicemente
 verrá restituito úndefined */

console.log(colors[n]); 
console.log(colors[1000000]);

/* 
Esercizio 2: Aggiunta e Rimozione di Elementi
Dichiarare un array fruits e aggiungi "apple" e "banana". Rimuovi il primo elemento.
*/

let fruits = ["strawberry"];
console.log("Array: " + fruits);    // ["strawberry"]
fruits[fruits.length] = "apple";
console.log("Array: " + fruits);    // ["strawberry", "apple"]
fruits[2] = "banana";
console.log("Array: " + fruits);    // ["strawberry", "apple", "banana"]

/* 
    L'inserimento tramite indice non é molto conveniente e comodo da usare, conviene utilizzare push per l'inserimento
    in coda e 'pop' per la rimozione dalla testa
*/

fruits.push("Lemon");
console.log("Array: " + fruits);    // ["strawberry", "apple", "banana", "lemon"]
fruits.push("Pineapple", "Orange"); 
console.log("Array: " + fruits);    // ["strawberry", "apple", "banana", "lemon", "Pineapple", "Orange"]

fruits.pop();
console.log("Array: " + fruits);    // ["strawberry", "apple", "banana", "lemon", "Pineapple"]

fruits.push(["Lime" , "Plumb"]);   // Sto inserendo un sottoarray
console.log("Array: " + fruits);

i=0;
for(element in fruits){
    console.log("Elemento all'indice" + i++ + ": " + element);
}


