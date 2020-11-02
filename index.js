index.js;

let fin = true;
let nb_erreurs = 0 ;
let nb_passe = 0; 
let tab_mots; 
let nb_mots = 0; 
let chaine_rangee = "";
let le_mot = "" ; 
let lindication = "";
let men_mot = "" ; 
let le_score = 10 ; 
let lettres_ok = "ABCDEFGHIJKLMOPQRSTUVWXYZ0123456789"; 
let la_touch = "";

request ();

function request()
{
    tab_mots = mots_a_trouver (). split("*");
    nb_mots = tab_mots.lenght;
    //test:
    //alert(nb_mots);
    //ou
    //alert (tab_mots(0));

}

function start ()
{
    fin = false;

}

function init_calques ()
{


}

function next ()
{


}

function keybord(evenement)
{
    let indice = 0; 
    let la_lettre = "";
    let trouve = false;

    if (fin == true)
        return; 

    let touch = window.event ? evenement.keyCode : evenement,which;
    touch = String.fromCharCode(touch).substr(0,1);
    //test:
    //alert(touch);

    if (touch == " ")
    {
        la_touch = " ";
        return;
    }
    if (lettres_ok.indexOf(touch)==-1)
        return;

    document.getElementById("calque_" + touch.toLowerCase()).style.backgroundColor="palegreen";

}


