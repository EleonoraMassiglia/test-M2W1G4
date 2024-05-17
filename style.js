/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* RISPOSTA: 
Number: contiene numeri sia interi che decimali.
    Es:
    let x = 5

String: contiene, generalmente, testo e può essere
dichiarata tramite virgolette, apici o backtick.
    Es: const name = "Eleonora"

Boolean: può essere solo true o false, risponde ad un
confronto tra due valori.
    Es:
    const x = 10
    const y = 20
    const isEqual = 10<20

Array: è una lista non ordinata di dati, che contiene tutti
i precedenti tipi di dati. Si dichiara tramite parentesi
quadre. e i valori contenuti all'interno di esse sono
separate da virgola.
    Es: array [33, true, "Giovanni"]

Undefined: tipi di dati che non sono stati definiti
dall'utente, ma che può essere dichiarato successivamente.
    Es:
    function sum(num1, num2) {
        return num1 + num 2;
    }
    console.log(sum (20, 50));

Null: tipo di dato che non vengono, volontariamente,
dichiarati dall'utente.
    Es: const x = null

Oggetti: rappresentano entità reali di un progetto,
contiene coppie chiave-valore che sono separate, tra di
loro, dalla virgola e vengono dichiarati tramite le
parentesi graffe.
    Es: const user{
        name = "Eleonora";
        age = 32;
        town = "Novi Ligure"
    }
 */

/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.
*/

/*RISPOSTA
Rappresentano entità reali di un progetto, contiene coppie
chiave-valore che sono separate, tra di loro, dalla virgola
e vengono dichiarati tramite le parentesi graffe.
    Es: const user{
        name = "Eleonora";
        age = 32;
        town = "Novi Ligure"
    }

*/

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione
 (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const sum(12 + 20);
console.log(sum);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const x = 12

/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo
 nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const name = "Eleonora";
console.log(name);

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const subtract = 4 - x;
console.log(subtract);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const name1 = "john";
const name2 = "John";
const isEqual = name1 === name2;
console.log(isEqual)

const name1 = "john";
const name2.toLowerCase = "John";
const isEqual = name1 === name2;
console.log(isEqual)
