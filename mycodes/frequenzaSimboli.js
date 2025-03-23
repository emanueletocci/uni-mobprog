/* 
    Scrivere una funzione che prenda una stringa s ed analizzi la frequenza di simboli all'interno. 
    La funzione deve restituire un oggetti i cui campi sono tutti i simboli presenti e il valore del
    campo é quante volte appare quel simbolo in s
*/

function f(s) {
    let frequency_map = {};
    for(let i=0 ; i <s.length; i++){
        let character = s[i];
        if(frequency_map[character] !== undefined) {
            frequency_map[character]++;
        } else{
            frequency_map[character] = 1;
        }
    }
    return frequency_map
}

// Prende in input una frequency map
function graph(fm){
    let char_array = [];
    for(const char in fm){
        char_array.push(char);
    }
    char_array.sort((x,y) => {
        if(fm[x] === fm[y]){
            if(x<y) return -1;
            return 1;
        }

        if(fm[x] <= fm[y])
            return 1;
        return -1;  

    });
    for(let char of char_array){
        let frequency = fm[char];

        let count_str = "";
        for(let i=0; i<fm[char]; i++){
            count_str += "#";
        }

        console.log(char + ": " + count_str + " (" + frequency + ")");
        
    }
}
let string = f("Ciao come stai? Domani andiamo al cinema?");
graph(string)
