// si vuole creare un programma dove 10 giocatori creeranno casualmente 2 squadre da 5 giocatori l'una.
// sceglieranno casualmente un dio a testa tra quelli disponibili
// e si affronteranno in una mappa assault
// 1- tra i giocatori ci sono ovviamente quelli bravi e quelli scarsi, quindi creare
//    una regola che dia un valore 'bravura da 1 a 3' ad ogni giocatore
// 2 - per cominciare crea un oggetto 'crea dio' dove gli passerai il nome,
//    la difficolt� del dio e la forza (10 dei a disposizione per ora)
// 3 - lo scontro verr� vinto dalla prima squadra che totalizzer� 3 punti
// 4 - un punto corrisponde ad ottenere una torre o una fenice o un minotauro
// questa � l'introduzione incasinata almento tanto quanto le mie idee ma cercher�
// di rendere il tutto pi� comprensibile e verosimile con il procedere del progetto.


// per cominciare creo l'oggetto che rappresentar� i 10 giocatori che andranno a sfidarsi nella
// mappa assaul! cominciamo con il giocatore1.

/*

var giocatore = function (){

};

var giocatore1 = new giocatore();

*/

// per ogni giocatore voglio che venga definito NOME, BRAVURA e DIO.
// cominciamo con il nome.

/*

var giocatore = function (){

    this.name;
};

var giocatore1 = new giocatore();


giocatore1.name = 'Mario';
console.log(giocatore1)
console.log(giocatore1.name);

*/

// ok funziona il primo giocatore si chiama Mario ma noi vorremmo
// che chiunque potesse giocare e quindi lasciamo spazio ai primi 10 che
// si iscrivono, quindi creo una funzione che da un nome a caso tra 20
// possibile a ogni giocatore.


/*

var giocatore = function (){

    this.name = function (){
        var nomiPossibili = ['Mario' , 'Marco' , 'Max' , 'Tony' , 'Luca' ,
                     'Alberto' , 'Silvio' , 'Gennaro' , 'Michele' , 'Adrione' ,
                     'Abelardo' , 'Alvin' , 'Richard' , 'Samuel' , 'Michael' ,
                     'John' , 'Livio' , 'Damiano' , 'Daniele' , 'Umberto'];
        var numeroCasuale = Math.floor(Math.random() * 20);
        return nomiPossibili[numeroCasuale];

    };

};

var giocatore1 = new giocatore();

console.log(giocatore1.name());

*/

// ok ora dobbiamo aggiungere la bravura a 'per comodit� Mario'
// 1 = noob, 2 = giocatoreNellaMedia e 3 = pro.
// come tutti sappiamo le probabilit� di avere un NOOB DI M***A in squadra sono molto + elevate rispetto ad quelle di avere un pro
// quindi semplifichiamo dicendo che tirando un numero da 1 a 100, se il risultato � tra 1 e 50 sar� un noob (valore 0), tra 51 e 90 sar�
// un giocatore medio (valore 1) e tra 91 e 100 sar� un pro (valore 2).
// commento la parte fatta e procedo aggiungendo questa nuova caratteristica.


/*

var giocatore = function (){

    this.name = function (){
        var nomiPossibili = ['Mario' , 'Marco' , 'Max' , 'Tony' , 'Luca' ,
                     'Alberto' , 'Silvio' , 'Gennaro' , 'Michele' , 'Adrione' ,
                     'Abelardo' , 'Alvin' , 'Richard' , 'Samuel' , 'Michael' ,
                     'John' , 'Livio' , 'Damiano' , 'Daniele' , 'Umberto'];
        var numeroCasuale = Math.floor(Math.random() * 20);
        return nomiPossibili[numeroCasuale];
    };

    this.bravura = function (){
        var bravura;
        var numeroCasuale = Math.ceil(Math.random() * 100);
        if (numeroCasuale >= 1 && numeroCasuale <= 50){
            bravura = 0;
        } else if (numeroCasuale >= 51 && numeroCasuale<= 90){
            bravura = 1;
        } else {
            bravura = 2;
        }
        return bravura;
    };

};

var giocatore1 = new giocatore();

console.log(giocatore1.name());
console.log(giocatore1.bravura());

*/



// perfetto anche questa � fatta
// ora dovremmo definire con che dio giocar� il personaggio ma per fare questo devo
// creare i 20 dei a disposizione quindi ci fermiamo e passiamo all'argomento dei.

// mmmmm PAUSA PLEASEEEE BYE.

// procedo creando i 10 dei (per ora) che prenderanno parte allo scontro
// per ogni dio definisco complessit� (1-2-3), forza(1-2-3), difesa(1-2-3) e escape(1-2-3);

// e il nome e l'ingaggio (1-2-3)

var dio = function (){
    this.name;
    this.complessita;
    this.forza;
    this.difesa;
    this.escape;
    this.ingaggio;
};

var ymir = new dio();
ymir.name = 'Ymir';
ymir.complessita = 1;
ymir.forza = 2;
ymir.difesa = 3;
ymir.escape = 1;
ymir.ingaggio = 3


var bastet = new dio();
bastet.name = 'Bastet';
bastet.complessita = 1;
bastet.forza = 2;
bastet.difesa = 1;
bastet.escape = 2;
bastet.ingaggio = 3;


var nox = new dio();
nox.name = 'Nox';
nox.complessita = 3;
nox.forza = 3;
nox.difesa = 1;
nox.escape = 2;
nox.ingaggio = 3;


var kukulkan = new dio();
kukulkan.name = 'Kukulkan';
kukulkan.complessita = 2;
kukulkan.forza = 3;
kukulkan.difesa = 1;
kukulkan.escape = 1;
kukulkan.ingaggio = 1;


var xbalanque = new dio();
xbalanque.name = 'Xbalanque';
xbalanque.complessita = 2;
xbalanque.forza = 3;
xbalanque.difesa = 1;
xbalanque.escape = 2;
xbalanque.ingaggio = 1;


var odin = new dio();
odin.name = 'Odin';
odin.complessita = 2;
odin.forza = 2;
odin.difesa = 2;
odin.escape = 2;
odin.ingaggio = 3;


var neith = new dio();
neith.name = 'Neith';
neith.complessita = 1;
neith.forza = 3;
neith.difesa = 1;
neith.escape = 2;
neith.ingaggio = 1;


var loki = new dio();
loki.name = 'Loki';
loki.complessita = 3;
loki.forza = 3;
loki.difesa = 1;
loki.escape = 3;
loki.ingaggio = 2;


var sunWukong = new dio();
sunWukong.name = 'Sun Wukong';
sunWukong.complessita = 2;
sunWukong.forza = 1;
sunWukong.difesa = 2;
sunWukong.escape = 3;
sunWukong.ingaggio = 3;


var heBo = new dio();
heBo.name = 'He Bo';
heBo.complessita = 2;
heBo.forza = 3;
heBo.difesa = 1;
heBo.escape = 2;
heBo.ingaggio = 2;


var dei = [ymir, bastet, nox, kukulkan, xbalanque, odin, neith, loki, sunWukong, heBo];

// console.log(dei);

// OHH YEA ora facciamo prendere casualmente un dio al nostro giocatore.
// abbiamo il nostro array di dei quindi aggiungiamo all'oggeto giocatore la
// caratteristica divinita.


/*

var giocatore = function (){

    this.name = function (){
        var nomiPossibili = ['Mario' , 'Marco' , 'Max' , 'Tony' , 'Luca' ,
                     'Alberto' , 'Silvio' , 'Gennaro' , 'Michele' , 'Adrione' ,
                     'Abelardo' , 'Alvin' , 'Richard' , 'Samuel' , 'Michael' ,
                     'John' , 'Livio' , 'Damiano' , 'Daniele' , 'Umberto'];
        var numeroCasuale = Math.floor(Math.random() * 20);
        return nomiPossibili[numeroCasuale];
    };

    this.bravura = function (){
        var bravura;
        var numeroCasuale = Math.ceil(Math.random() * 100);
        if (numeroCasuale >= 1 && numeroCasuale <= 50){
            bravura = 0;
        } else if (numeroCasuale >= 51 && numeroCasuale<= 90){
            bravura = 1;
        } else {
            bravura = 2;
        }
        return bravura;
    };

    this.divinita = function (){
        var numeroCasuale = Math.floor(Math.random() * 10);
        return dei[numeroCasuale];
    };
};

*/
/*


var giocatore1 = new giocatore();

//console.log(giocatore1.divinita());



// ottimo ora aggiungo i restanti 9 giocatori


var giocatore2 = new giocatore();
var giocatore3 = new giocatore();
var giocatore4 = new giocatore();
var giocatore5 = new giocatore();
var giocatore6 = new giocatore();
var giocatore7 = new giocatore();
var giocatore8 = new giocatore();
var giocatore9 = new giocatore();
var giocatore10 = new giocatore();


*/

// ora bisogna definire le regole con le quali si svolger� lo scontro

// pasusa mmmm.

// per prima cosa ragioniamo su come dovr� avvenire lo scontro
// - comincia la partita facciamo finta di avere gi� le 2 squadre
// - i  2 team si affrontano 5 vs 5? no!
// - qui interviene in fattore bravura
//   una bravura di valore 2 dar� al giocatore una probabilit� del 90% di essere in team fight,
//   una bravura di valore 1 dar� al giocatore una probabilit� del 75% di essere in team fight,
//   una bravura di valore 0 dar� al giocatore una probabilit� del 50% di essere in team fight,
//
// - mettiamo caso che solo 2 giocatori per squadra faranno parte al team fight,
//   per decidere quale squadra far� la prima mossa si somma ingaggio e bravura ma si sottrae la complessit�.
//   la squadra con il valore + alto inizia la battaglia.
// - tutti gli dei attaccheranno e comincieranno dagli obbiettivi con l'attacco maggiore
//   quindi se abbiamo ymir e bastet avremmo 2 attacchi di entit� 2 ognuno
//   se a difendere avremo odino e neith gli attacchi saranno diretti prima a neith (forza 3) e poi se ci fossero ancora attacchi ad odino (forza 2)
// - come sappiano se neith � stata ferita / morta / immune?
// - cominciamo a parlare di difesa e evasione
// - la difesa indica i punti di danno che pu� subire prima di 'morire' l'evasione se � in grado di evitare l'attacco.
// - quindi un attacco di entit� 1 avr� il 60 % di colpire una evasione 1, il  40 % di colpire una evasione 2 e il 20 % di colpire una evasione 3
// - un attacco di entit� 2 avr� il 75 % di colpire una evasione 1, ...55 % evasione 2 e 35 % evasione 35
// - entit� 3 = 90 % evasione 1, 70 % evasione 2, 50 % evasione 35
//
//   se si viene colpiti si perde un punto difesa se i punti difesa vanno a 0 il dio � morto.

// - se un dio sta per morire ma ci sono altri membri del team fight che hanno pi� di un punto difesa rimanente si pu� fare un test per perdere un
//   punto difesa al posto del proprio compagno
// - per fare questo interviene nuovamente la bravura
//   per un valore 2 avviene al 90 % valore 1 al 60 % valore 0 al 30 %
// - la squadra che perde il team fight (tutti gli dei morti) perde un punto mappa
// - i punti mappa sono 3, prima la torre, poi la fenice e poi il minotauro
//   per semplicit� punto mappa 1 = torre ...
//   la prima squadra a conquistare 3 punti mappa vince lo scontro

// BENE! prima di procedere per� penso sia meglio avere pronte le 2 squadre quindi procedo


// la squadraA avr� i primi 5 giocatori e la squadraB gli altri per comodit�.
// ogni squadra pu� avere un solo dio per tipo am si possono ripetere tra le 2 squadre



// ogni volta che creo un nuovo giocatore aggiungo la sua divinit� all'array
// proviamo

// rielaboro le chiamate giocatore

/*

var squadraA = [];
var squadraB = [];

var giocatore1 = new giocatore();
squadraA.push (giocatore1.divinita());

var giocatore2 = new giocatore();
squadraA.push (giocatore2.divinita());

var giocatore3 = new giocatore();
squadraA.push (giocatore3.divinita());

var giocatore4 = new giocatore();
squadraA.push (giocatore4.divinita());

var giocatore5 = new giocatore();
squadraA.push (giocatore5.divinita());

var giocatore6 = new giocatore();
squadraB.push (giocatore6.divinita());

var giocatore7 = new giocatore();
squadraB.push (giocatore7.divinita());

var giocatore8 = new giocatore();
squadraB.push (giocatore8.divinita());

var giocatore9 = new giocatore();
squadraB.push (giocatore9.divinita());

var giocatore10 = new giocatore();
squadraB.push (giocatore10.divinita());

*/

//console.log(squadraA,squadraB);


// adesso cominciano i cazzi;
// devo fare in modo che quando chiamo il giocatore2 il duo dio sia diverso da quello del giocatore1 proviamo


// riprendo il this.divinita dell'oggetto giocatore e lo provo ad elaborare

/*

this.divinita = function (){
    var numeroCasuale = Math.floor(Math.random() * 10);
    var dio = dei[numeroCasuale];
    if (squadraA.length < 5){
        do {
            dio = dei[numeroCasuale];
            } while (dio == squadraA[0] || dio == squadraA[1] || dio == squadraA[2] || dio == squadraA[3])
    } else if (squadraA.length >= 5){
        do {
            dio = dei[numeroCasuale];
        } while (dio == squadraB[0] || dio == squadraB[1] || dio == squadraB[2] || dio == squadraB[3])
    }
    return dio;
};

*/


// commento le parti modificate e le risistemo di seguito aggiungendo un console.log delle due squadre


var giocatore = function (){

    this.name = function (){
        var nomiPossibili = ['Mario' , 'Marco' , 'Max' , 'Tony' , 'Luca' ,
                     'Alberto' , 'Silvio' , 'Gennaro' , 'Michele' , 'Adrione' ,
                     'Abelardo' , 'Alvin' , 'Richard' , 'Samuel' , 'Michael' ,
                     'John' , 'Livio' , 'Damiano' , 'Daniele' , 'Umberto'];
        var numeroCasuale = Math.floor(Math.random() * 20);
        return nomiPossibili[numeroCasuale];
    };

    this.bravura = function (){
        var bravura;
        var numeroCasuale = Math.ceil(Math.random() * 100);
        if (numeroCasuale >= 1 && numeroCasuale <= 50){
            bravura = 0;
        } else if (numeroCasuale >= 51 && numeroCasuale<= 90){
            bravura = 1;
        } else {
            bravura = 2;
        }
        return bravura;
    };

    this.divinita = function (){
        console.log('creo divinita');
        var numeroCasuale = Math.floor(Math.random() * 10);
        var dio;
        console.log('numeroCasuale...', numeroCasuale);
        if (squadraA.length < 5){
          console.log('squadraA.length < 5...');
            do {
                dio = dei[numeroCasuale];
                console.log('\tdio squadraA...', dio);
                } while (dio == squadraA[0] || dio == squadraA[1] || dio == squadraA[2] || dio == squadraA[3])
        } else if (squadraB.length < 5){
          console.log('squadraB.length < 5...');
            do {
                dio = dei[numeroCasuale];
                console.log('\tdio squadraB...', dio);
            } while (dio == squadraB[0] || dio == squadraB[1] || dio == squadraB[2] || dio == squadraB[3])
        }
        return dio;
    };
};


var squadraA = [];
var squadraB = [];

var giocatore1 = new giocatore();
squadraA.push (giocatore1.divinita());

var giocatore2 = new giocatore();
squadraA.push (giocatore2.divinita());

var giocatore3 = new giocatore();
squadraA.push (giocatore3.divinita());

var giocatore4 = new giocatore();
squadraA.push (giocatore4.divinita());

var giocatore5 = new giocatore();
squadraA.push (giocatore5.divinita());

var giocatore6 = new giocatore();
squadraB.push (giocatore6.divinita());

var giocatore7 = new giocatore();
squadraB.push (giocatore7.divinita());

var giocatore8 = new giocatore();
squadraB.push (giocatore8.divinita());

var giocatore9 = new giocatore();
squadraB.push (giocatore9.divinita());

var giocatore10 = new giocatore();
squadraB.push (giocatore10.divinita());


//console.log(squadraA,squadraB);
