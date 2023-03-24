/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/



/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/*
In JavaScript esistono diversi tipi di dati, tra cui:
1. Number: utilizzato per i valori numerici, sia interi che decimali.
2. String: utilizzate per i valori di testo, racchiusi tra apici singoli o doppi.
3. Booleani: utilizzati per i valori logici, che possono essere veri o falsi.
4. Null: usato per rappresentare l'assenza intenzionale di un valore di un oggetto.
5. Undefined: usato per rappresentare una variabile che è stata dichiarata ma a cui non è stato assegnato un valore.
6. Oggetti: utilizzati per memorizzare collezioni di dati e funzioni.
*/



/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.
*/

/*
In JavaScript, un oggetto è un insieme di coppie chiave-valore, dove ogni chiave è una variabile a cui viene corrisposto un valore. 

Gli oggetti in JavaScript sono dinamici, il che significa che è possibile aggiungere o rimuovere proprietà in qualsiasi momento. Inoltre, possono essere annidati, cioè le proprietà possono essere oggetti a loro volta, consentendo di creare strutture di dati complesse.

Gli oggetti sono un aspetto fondamentale di JavaScript e sono ampiamente utilizzati nel linguaggio, in quanto forniscono un modo per rappresentare dati complessi e organizzare il codice in componenti semplici da leggere, riutilizzabili e modulari.
*/



/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/*
let num1 = 12;
let num2 = 20;
let sum = num1 + num2;
console.log(sum);
*/



/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/*
let x = 12;
*/



/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/*
let name = "Alessio";
*/



/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/*
let x = 12;
let result = x - 4;
console.log(result);
*/



/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/

/*
let name1 = "john";
let name2 = "John";

console.log(name1 !== name2); // output: true

console.log(name1.toLowerCase() === name2.toLowerCase()); // output: true
*/
