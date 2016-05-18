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

// e il nome e l'ingaggio (2-3-4-5)

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
ymir.ingaggio = 4


var bastet = new dio();
bastet.name = 'Bastet';
bastet.complessita = 1;
bastet.forza = 2;
bastet.difesa = 1; 
bastet.escape = 2;
bastet.ingaggio = 4;


var nox = new dio();
nox.name = 'Nox';
nox.complessita = 3;
nox.forza = 3;
nox.difesa = 1;
nox.escape = 2; 
nox.ingaggio = 4;


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
odin.ingaggio = 5;


var neith = new dio();
neith.name = 'Neith';
neith.complessita = 1;
neith.forza = 3;
neith.difesa = 1;
neith.escape = 2;
neith.ingaggio = 2;


var loki = new dio();
loki.name = 'Loki';
loki.complessita = 3;
loki.forza = 3;
loki.difesa = 1;
loki.escape = 3;
loki.ingaggio = 4;


var sunWukong = new dio();
sunWukong.name = 'Sun Wukong';
sunWukong.complessita = 2;
sunWukong.forza = 1;
sunWukong.difesa = 2;
sunWukong.escape = 3;
sunWukong.ingaggio = 5;


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


// la squadraA avrà i primi 5 giocatori e la squadraB gli altri per comodità. 
// ogni squadra può avere un solo dio per tipo am si possono ripetere tra le 2 squadre



// ogni volta che creo un nuovo giocatore aggiungo la sua divinità all'array
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
        var dio;
        if (squadraA.length < 5){
            do {
                dio = dei[Math.floor(Math.random() * 10)];
            } while (dio == squadraA[0] || dio == squadraA[1] || dio == squadraA[2] || dio == squadraA[3])
        } else if (squadraB.length < 5){
            do {
                dio = dei[Math.floor(Math.random() * 10)];
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

// per evitare che la bravura dei giocatori cambi ogni volta chiamata faccio un array dove inserisco le stesse.

var bravure = [giocatore1.bravura(),giocatore2.bravura(),giocatore3.bravura(),giocatore4.bravura(),giocatore5.bravura(),
               giocatore6.bravura(),giocatore7.bravura(),giocatore8.bravura(),giocatore9.bravura(),giocatore10.bravura()];
               
// stessa cosa per i loro nomiPossibili

var nomiGiocatori = [giocatore1.name(),giocatore2.name(),giocatore3.name(),giocatore4.name(),giocatore5.name(),
                     giocatore6.name(),giocatore7.name(),giocatore8.name(),giocatore9.name(),giocatore10.name()]               

//console.log(squadraA,squadraB);





// ora posso iniziare a creare una miriade di funzioni per regolare le regole del gioco YES I GIOCHI DI PAROLE

// partiamo dalle prima ovvero l'influenza della bravura sul numero di giocatori in team fight
// l'idea è quella di fare una funzione che restituisce un valore vero o falso per ogni giocatore nel caso sia o non sia in team fight
// cominciamo col dare un BEL nome alla funzione !

/*
var EntroInTeamFight = function (){

};
*/

// sappiamo che:
// bravura = 0 -- 50%
// bravura = 1 -- 75%
// bravura = 2 -- 90%

// faccio in modo che la funzione una volta stabilità la bravura mi 
// carichi la funzione adeguata, quindi



var entroInTeamFight = function (bravura){
    var ciSono = false;
    var numeroFortunato = Math.ceil(Math.random() * 100);
    if (bravura == 0){
        if (numeroFortunato >= 50){
            ciSono = true;
        }    
    } else if (bravura == 1){
        if (numeroFortunato >= 25){
            ciSono = true;
        }    
    } else {
        if (numeroFortunato >= 10){
            ciSono = true;
        }    
    }
    return ciSono;
};


//console.log(entroInTeamFight(giocatore1));
//console.log(entroInTeamFight(giocatore2));
//console.log(entroInTeamFight(giocatore3));

// ok ho fatto un tentativo e 1 giocatore su 3 avrebbe partecipato :)


// ora passiamo a decidere quale squadra avrà la prima mossa (riassumo la regola)
// le squadre confronteranno i valori ottunuti per decidere chi inizia
// questi valori si calcolano facendo ingaggio + bravura - complessità per tutti i membri della squadra in team fight

// quindi 

// faccio un funzione che calcola il valora personale di ogni giocatore
// dopo attente riflessioni ho deciso di modificare il valore di ingaggio degli dei portandolo ad un valore da 2 a 5.

var valoreGiocatoreIniziativa = function(bravura,squadra){
    if (entroInTeamFight(bravura) == true){
        var iniziativa = ((squadra.ingaggio) + (bravura) - (squadra.complessita));
    } else {
        var iniziativa = 0;
    }
    return iniziativa; 
};

//console.log(valoreGiocatoreIniziativa(giocatore1,squadraA[0]));

// ho aggiunto il caso in cui non parteciperà... con valore 0.
// ok mi basta sommare i valori della squadraA e quelli della squadraB

// console.log(valoreGiocatoreIniziativa(giocatore1,squadraA[0]) + 
//            valoreGiocatoreIniziativa(giocatore2,squadraA[1]) + 
//           valoreGiocatoreIniziativa(giocatore3,squadraA[2]) +
//            valoreGiocatoreIniziativa(giocatore4,squadraA[3]) + 
//            valoreGiocatoreIniziativa(giocatore5,squadraA[4]))

// possiamo ora decidere chi inizia


var squadraCheInizia = function(){
    var squadraCheInizia;
    if (valoreGiocatoreIniziativa(bravure[0],squadraA[0]) + 
        valoreGiocatoreIniziativa(bravure[1],squadraA[1]) + 
        valoreGiocatoreIniziativa(bravure[2],squadraA[2]) +
        valoreGiocatoreIniziativa(bravure[3],squadraA[3]) + 
        valoreGiocatoreIniziativa(bravure[4],squadraA[4]) >=
        valoreGiocatoreIniziativa(bravure[5],squadraB[0]) + 
        valoreGiocatoreIniziativa(bravure[6],squadraB[1]) + 
        valoreGiocatoreIniziativa(bravure[7],squadraB[2]) +
        valoreGiocatoreIniziativa(bravure[8],squadraB[3]) + 
        valoreGiocatoreIniziativa(bravure[9],squadraB[4])){
        squadraCheInizia = 'squadraA';
    } else {
        squadraCheInizia = 'squadraB';
    }
    return squadraCheInizia;
};

/*
console.log(squadraCheInizia());
console.log(squadraCheInizia());
console.log(squadraCheInizia());
*/

// questa funzione richiama le altre da sola e ci dice la squadra che inizia
// se necessario cambieremo le stringhe con un numero ma non è urgente.




//---------


// voglio anche sapere esattamente i membri che parteciperanno al team fight

var numeroMembriSquadraA = function (){
    var numeroMembri = 0;
    if (entroInTeamFight(bravure[0])==true){
        numeroMembri = numeroMembri + 1;
    }
    if (entroInTeamFight(bravure[1])==true){
        numeroMembri = numeroMembri + 1;
    }
    if (entroInTeamFight(bravure[2])==true){
        numeroMembri = numeroMembri + 1;
    }
    if (entroInTeamFight(bravure[3])==true){
        numeroMembri = numeroMembri + 1;
    }
    if (entroInTeamFight(bravure[4])==true){
        numeroMembri = numeroMembri + 1;
    }
    return numeroMembri;
};

var numeroMembriSquadraB = function (){
    var numeroMembri = 0;
    if (entroInTeamFight(bravure[5])==true){
        numeroMembri = numeroMembri + 1;
    }
    if (entroInTeamFight(bravure[6])==true){
        numeroMembri = numeroMembri + 1;
    }
    if (entroInTeamFight(bravure[7])==true){
        numeroMembri = numeroMembri + 1;
    }
    if (entroInTeamFight(bravure[8])==true){
        numeroMembri = numeroMembri + 1;
    }
    if (entroInTeamFight(bravure[9])==true){
        numeroMembri = numeroMembri + 1;
    }
    return numeroMembri;
};


//console.log(numeroMembriSquadraA(),numeroMembriSquadraB());
//console.log(numeroMembriSquadraA(),numeroMembriSquadraB());

//console.log(bravure[0]);
//console.log(bravure[0]);

//console.log(nomiGiocatori[0]);
//console.log(nomiGiocatori[0]);

//console.log(squadraA);
//console.log(squadraA);


//console.log(squadraCheInizia());
//console.log(squadraCheInizia());
//console.log(squadraCheInizia());

//console.log(valoreGiocatoreIniziativa(bravure[0],squadraA[0]));
//console.log(valoreGiocatoreIniziativa(bravure[0],squadraA[0]));


//--------------


// ora che il programma è stato rivisitato possiamo continuare Hi
// seguendo le regole sappiamo che una squadra fa tanti attacchi quanti membri
// entrati in team fight
/*
var numeroAttacchiSquadraA = numeroMembriSquadraA();
var numeroAttacchiSquadraB = numeroMembriSquadraB();
*/
//console.log(numeroAttacchiSquadraA,numeroAttacchiSquadraB);


// possiamo quindi disporre una funzione che regola gli attacchi
// ipotizziamo per ora che il primo membro attacchi il primo della squadra nemica



var danno = function(attaccante,difensore){
    var numeroFortunato = Math.ceil(Math.random()*100);
    var danno = false;
    if (attaccante.forza == 1){
        if (difensore.escape == 1){
            if(numeroFortunato >= 40){
                danno = true;
            }
        } else if (difensore.escape == 2){
            if(numeroFortunato >= 60){
                danno = true;
            }            
        } else {
            if(numeroFortunato >= 80){
                danno = true;
            }            
        }
    } else if (attaccante.forza == 2){
        if (difensore.escape == 1){
            if(numeroFortunato >= 25){
                danno = true;
            }           
        } else if (difensore.escape == 2){
            if(numeroFortunato >= 45){
                danno = true;
            }            
        } else {
            if(numeroFortunato >= 65){
                danno = true;
            }            
        }
    } else {
        if (difensore.escape == 1){
            if(numeroFortunato >= 10){
                danno = true;
            }            
        } else if (difensore.escape == 2){
            if(numeroFortunato >= 30){
                danno = true;
            }            
        } else {
            if(numeroFortunato >= 50){
                danno = true;
            }            
        }        
    }
    return danno;
};



//console.log(danno(squadraA[0],squadraB[0]));


//console.log((squadraA[0]).forza + 'squadra' + squadraA[0].name);
//console.log(squadraA)

// ora sappiamo che tutti i membri in team fight attaccanti attaccheranno ma sappiamo anche che
// il bersaglio sarà quello con il valore d'attacco maggiore
// ci serve quindi una funzione che ci dia come risultato i bersaglio

var forzaDifensore = function(X,squadra){
    var forzaDifensore = undefined;
    if (entroInTeamFight(bravure[X])==true){
        if (squadra.forza == 1){
            forzaDifensore = 1;
        } else if (squadra.forza == 2){
            forzaDifensore = 2;
        } else{
            forzaDifensore = 3;
        }
    }
    return forzaDifensore;
};

//console.log(forzaDifensore(6,squadraB[0]));


var primoBersaglioAttaccoSquadraB = function(){
    var difensore;
    if (forzaDifensore(6,squadraB[0]) >= forzaDifensore(7,squadraB[1]) ||
        forzaDifensore(6,squadraB[0]) >= forzaDifensore(8,squadraB[2]) ||
        forzaDifensore(6,squadraB[0]) >= forzaDifensore(9,squadraB[3]) ||
        forzaDifensore(6,squadraB[0]) >= forzaDifensore(10,squadraB[4])){
        difensore = squadraB[0];    
    } else if(forzaDifensore(7,squadraB[1]) >= forzaDifensore(6,squadraB[0]) ||
              forzaDifensore(7,squadraB[1]) >= forzaDifensore(8,squadraB[2]) ||
              forzaDifensore(7,squadraB[1]) >= forzaDifensore(9,squadraB[3]) ||
              forzaDifensore(7,squadraB[1]) >= forzaDifensore(10,squadraB[4])){
        difensore = squadraB[1];
    } else if(forzaDifensore(8,squadraB[2]) >= forzaDifensore(6,squadraB[0]) ||
              forzaDifensore(8,squadraB[2]) >= forzaDifensore(7,squadraB[1]) ||
              forzaDifensore(8,squadraB[2]) >= forzaDifensore(9,squadraB[3]) ||
              forzaDifensore(8,squadraB[2]) >= forzaDifensore(10,squadraB[4])){
        difensore = squadraB[2];
    } else if(forzaDifensore(9,squadraB[3]) >= forzaDifensore(6,squadraB[0]) ||
              forzaDifensore(9,squadraB[3]) >= forzaDifensore(7,squadraB[1]) ||
              forzaDifensore(9,squadraB[3]) >= forzaDifensore(8,squadraB[2]) ||
              forzaDifensore(9,squadraB[3]) >= forzaDifensore(10,squadraB[4])){
        difensore = squadraB[3];  
    } else {
        difensore = squadraB[2];  
    }
    return difensore;
}



// troppo casino mmmm











