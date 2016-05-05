// si vuole creare un programma dove 10 giocatori creeranno casualmente 2 squadre da 5 giocatori l'una.
// sceglieranno casualmente un dio a testa tra quelli disponibili
// e si affronteranno in una mappa assault
// 1- tra i giocatori ci sono ovviamente quelli bravi e quelli scarsi, quindi creare
//    una regola che dia un valore 'bravura da 1 a 3' ad ogni giocatore
// 2 - per cominciare crea un oggetto 'crea dio' dove gli passerai il nome,
//    la difficoltà del dio e la forza (20 dei a disposizione per ora)
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


// perfetto anche questa è fatta
// ora dovremmo definire con che dio giocarà il personaggio ma per fare questo devo
// creare i 20 dei a disposizione quindi ci fermiamo e passiamo all'argomento dei.

// mmmmm PAUSA PLEASEEEE BYE.












