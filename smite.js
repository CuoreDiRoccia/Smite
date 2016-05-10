// si vuole creare un programma dove 10 giocatori creeranno casualmente 2 squadre da 5 giocatori l'una.
// sceglieranno casualmente un dio a testa tra quelli disponibili
// e si affronteranno in una mappa assault
// 1- tra i giocatori ci sono ovviamente quelli bravi e quelli scarsi, quindi creare
//    una regola che dia un valore 'bravura da 1 a 3' ad ogni giocatore
// 2 - per cominciare crea un oggetto 'crea dio' dove gli passerai il nome,
//    la difficoltà del dio e la forza (10 dei a disposizione per ora)
// 3 - lo scontro verrà vinto dalla prima squadra che totalizzerà 3 punti
// 4 - un punto corrisponde ad ottenere una torre o una fenice o un minotauro
// questa è l'introduzione incasinata almento tanto quanto le mie idee ma cercherò
// di rendere il tutto più comprensibile e verosimile con il procedere del progetto.


// per cominciare creo l'oggetto che rappresentarà i 10 giocatori che andranno a sfidarsi nella
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

// ok ora dobbiamo aggiungere la bravura a 'per comodità Mario'
// 1 = noob, 2 = giocatoreNellaMedia e 3 = pro.
// come tutti sappiamo le probabilità di avere un NOOB DI M***A in squadra sono molto + elevate rispetto ad quelle di avere un pro
// quindi semplifichiamo dicendo che tirando un numero da 1 a 100, se il risultato è tra 1 e 50 sarà un noob (valore 0), tra 51 e 90 sarà
// un giocatore medio (valore 1) e tra 91 e 100 sarà un pro (valore 2).
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



// perfetto anche questa è fatta
// ora dovremmo definire con che dio giocarà il personaggio ma per fare questo devo
// creare i 20 dei a disposizione quindi ci fermiamo e passiamo all'argomento dei.

// mmmmm PAUSA PLEASEEEE BYE.

// procedo creando i 10 dei (per ora) che prenderanno parte allo scontro
// per ogni dio definisco complessità (1-2-3), forza(1-2-3), difesa(1-2-3) e escape(1-2-3); 

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
kukulkan.ingaggio = 1:


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


// ora bisogna definire le regole con le quali si svolgerà lo scontro

// pasusa mmmm.

// per prima cosa ragioniamo su come dovrà avvenire lo scontro
// - comincia la partita facciamo finta di avere già le 2 squadre
// - i  2 team si affrontano 5 vs 5? no!
// - qui interviene in fattore bravura
//   una bravura di valore 2 darà al giocatore una probabilità del 90% di essere in team fight,
//   una bravura di valore 1 darà al giocatore una probabilità del 75% di essere in team fight,
//   una bravura di valore 0 darà al giocatore una probabilità del 50% di essere in team fight,
//
// - mettiamo caso che solo 2 giocatori per squadra faranno parte al team fight,
//   per decidere quale squadra farà la prima mossa si somma ingaggio e bravura ma si sottrae la complessità.
//   la squadra con il valore + alto inizia la battaglia.
// - tutti gli dei attaccheranno e comincieranno dagli obbiettivi con l'attacco maggiore
//   quindi se abbiamo ymir e bastet avremmo 2 attacchi di entità 2 ognuno
//   se a difendere avremo odino e neith gli attacchi saranno diretti prima a neith (forza 3) e poi se ci fossero ancora attacchi ad odino (forza 2)
// - come sappiano se neith è stata ferita / morta / immune?
// - cominciamo a parlare di difesa e evasione
// - la difesa indica i punti di danno che può subire prima di 'morire' l'evasione se è in grado di evitare l'attacco.
// - quindi un attacco di entità 1 avrà il 60 % di colpire una evasione 1, il  40 % di colpire una evasione 2 e il 20 % di colpire una evasione 3
// - un attacco di entità 2 avrà il 75 % di colpire una evasione 1, ...55 % evasione 2 e 35 % evasione 35
// - entità 3 = 90 % evasione 1, 70 % evasione 2, 50 % evasione 35
// 
//   se si viene colpiti si perde un punto difesa se i punti difesa vanno a 0 il dio è morto.

// - se un dio sta per morire ma ci sono altri membri del team fight che hanno più di un punto difesa rimanente si può fare un test per perdere un 
//   punto difesa al posto del proprio compagno
// - per fare questo interviene nuovamente la bravura 
//   per un valore 2 avviene al 90 % valore 1 al 60 % valore 0 al 30 % 
// - la squadra che perde il team fight (tutti gli dei morti) perde un punto mappa 
// - i punti mappa sono 3, prima la torre, poi la fenice e poi il minotauro
//   per semplicità punto mappa 1 = torre ...
//   la prima squadra a conquistare 3 punti mappa vince lo scontro

// BENE! prima di procedere però penso sia meglio avere pronte le 2 squadre quindi procedo


// la squadra uno avrà i primi 5 giocatori e la squadra 2 gli altri per comodità. 
// ogni squadra può avere un solo dio per tipo am si possono ripetere tra le 2 squadre
// riprendo la caratteristica divinità dell'oggetto giocatore e cerco di includere questa nuova 'idea'


this.divinita = function (){
    var numeroCasuale = Math.floor(Math.random() * 10);
    return dei[numeroCasuale];
};

// potrei aggiungere un array dove inserisco gli dei usciti per la prima squadra e un altro per la seconda

var deiPrimaSquadra = [];
var deiSecondaSquadra = [];

// adesso devo fare in modo che il dio che esce vada inserito nell'array adeguato

var deiPrimaSquadra = [];
var deiSecondaSquadra = [];

this.divinita = function (){
    var numeroCasuale = Math.floor(Math.random() * 10);
    var dio = dei[numeroCasuale];
    if (deiPrimaSquadra.length < 5){
        deiPrimaSquadra.push dio;
    } else if (deiPrimaSquadra.length >= 5){
        deiSecondaSquadra.push dio;
    }
    
    
    return dio;
};

// il problema è che aggiungendo questo sul oggetto giocatore non verrà riempito l'array? c'è qualche possibilità 
// di fare quello che voglio come oggetto o devo usare una funzione fuori dallo stesso?





























































