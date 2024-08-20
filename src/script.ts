/*_____________________________________________________________________*/
/*2 Läs Documentation - TypeScript for JavaScript Programmers och svara på frågorna.

a Vad betyder (type) inference?
betyder att TypeScript automatiskt förstår vilken typ en variabel har, baserat på vad man sätter in i den.

b Vad är ett interface?
är en strukturer för objekt.Ett interface specificerar vilka egenskaper ett objekt måste ha.
exempel:
interface Person {
    name: string;
    age: number;
    greet(): void;
}

c Vilka datatyper har JavaScript?
Number
String
Boolean
Null
Undefined
Symbol
BigInt
Object

d Vilka nya datatyper tillför TypeScript?
Enum - en typ för att definiera en uppsättning namngivna konstanter.
exempel: 
enum Direction {
    Up,
    Down,
    Left,
    Right
}

Tuple - en typ som representerar en array med en fast längd och bestämda typer för varje element.
exempel:
let tuple: [string, number];
tuple = ["hello", 10];

Any - en typ som kan representera vilken typ som helst.
Void - används för funktioner som inte returnerar något.
Never - en typ för värden som aldrig uppstår, till exempel för funktioner som aldrig returnerar eller som alltid kastar ett undantag.
Unknown - en typ som liknar any, men som kräver typkontroll innan du kan använda det som en annan typ.


e Vad är generics?
Generics gör det möjligt att skapa återanvändbara komponenter som fungerar med olika datatyper utan att förlora typinformationen.
exempel: 
let bookBox = createBox<string>("En bok");
let toyBox = createBox<number>(123);

// Nu vet TypeScript att bookBox är av typen string
// och toyBox är av typen number

*/

/*_____________________________________________________________________*/
/*3 Skapa en variabel color som innehåller namnet på ett färg. Skriv en funktion som producerar en mening med variabeln. Om color till exempel är 'blå' ska programmet skriva ut: 'En blå bil'. Variabeln och funktionen ska ha type annotations; dvs du ska tala om vilka datatyper variabeln, parametern och returvärdet har.*/

let color: string 
color = 'blå'; 



function carSentence(carColor: string) {
    let sentence = 'En ' + carColor + 'bil'
    return sentence
    
}



/*_____________________________________________________________________*/
/*4 Skriv en loop som kör 10 gånger. Du kan lägga den i en funktion för att få bättre struktur på koden. Loopen ska simulera ett trafikljus och därför omväxlande skriva ut "rött", "gult", "grönt" i den ordningen. En färg per varv i loopen.
Tips: du behöver en till variabel, som håller ordning på om det är 1, 2 eller 3 som ska skrivas ut.*/

function trafficLight(): void {  
    let colorNumber: number = 1;
    for (let i: number = 0; i < 10; i++) {
        switch (colorNumber) {
            case 1:
                console.log('rött');
                colorNumber = 2;
                break;
            case 2:
                console.log('gult');
                colorNumber = 3;
                break;
            case 3:
                console.log('grönt');
                colorNumber = 1;
                break;
        }
    }
}

trafficLight();




/*5 Skriv ett program som skriver ut talen 1 till 20 och om varje tal är udda eller jämnt.
Tips 1: Du kan använda en variabel för att hålla reda på om variabeln är jämn. let isEven = true 
Tips 2: Operatorn modulo kan användas för att ta reda på om ett tal är udda eller jämnt.
if( x % 2 === 0 ) //talet är jämnt*/

function numberCounter(): void {
    const jämnt: string = ' talet är jämnt';
    const ojämnt: string = ' talet är ojämnt';

    for (let number: number = 1; number < 21; number++) {
        if (number % 2 === 0) {
            console.log(`${number}${jämnt}`);
        } else {
            console.log(`${number}${ojämnt}`);
        }
    }
}

numberCounter();



/*_____________________________________________________________________*/
/*6 Pelle har 100 kronor. Varje dag köper Pelle en frukt för 7 kronor. Hur många dagar räcker pengarna? Bygg ett program som besvarar frågan.
Tips: använd en for-loop.*/

function calculateDays(): number {
    const pricePerFruit: number = 7;
    let money: number = 100;
    let days: number = 0;

    while (money >= pricePerFruit) {
        money -= pricePerFruit;
        days++;
    }

    return days;
}

const totalDays = calculateDays();
console.log(`Pelle kan köpa frukt i ${totalDays} dagar.`);



/*_____________________________________________________________________*/
/*7 Gör en funktion med namnet next som tar en parameter. Funktionen ska returnera "nästa" värde. Till exempel, om den anropas med parametern 99 ska funktionen returnera 100. Använd console.log för att anropa funktionen och testa att den returnerar rätt svar.*/

function next(number: number): number {
    return number + 1;
}

console.log(next(99)); 



/*_____________________________________________________________________*/
/*8a Bygg en funktion med namnet cheer som skriver ut tre stycken positiva tillrop (typ "Bra jobbat!") när den anropas.*/

function cheer(): void {
    const messages: string[] = [
        'Bra jobbat!',
        'Det finns ingen utmaning du inte kan övervinna!',
        'Varje litet steg framåt är ett steg närmare dina drömmar!'
    ];

    messages.forEach(message => console.log(message));
}

cheer();


/*
8b Modifiera funktionen så att den tar en parameter, som är antalet meddelanden som ska skrivas ut. Om man till exempel anropar funktionen med värdet 4, ska den skriva ut 4 gånger.
Tips: använd en upprepning inuti funktionen.*/

function cheer2(times: number): void {
    const messages: string[] = [
        'Bra jobbat!',
        'Det finns ingen utmaning du inte kan övervinna!',
        'Varje litet steg framåt är ett steg närmare dina drömmar!'
    ];

    for (let i = 0; i < times; i++) {
        messages.forEach(message => console.log(message));
    }
}

cheer2(4);


