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

function débuter ()
{   
    if(la_touch == "")
        return;

    fin = false; nb_coups = 0; chaine_rangee="";
    nb_passe = 0; nb_erreurs = 0; le_score = 10; 

    suivant ();

}

function init_calques ()
{


}

function suivant ()
{
    let tab_enigme; 
    let nb_alea = Math.floor(Math.random()*nb_mots);
    //test
    //alert(nb_alea);

    le_score = le_score - nb_erreurs/4;

    document.getElementById("leScore").innerHTML = "Votre score : <strong>" + le_score " / 10</strong> - Mots restant : <strong>" + (10 - nb_passe) + "</strong>";
    document.getElementById("lePendu").src = "img_pendu/";

    nb_erreurs = 0; 
    init_calques();

    while(chaine_rangee.indexOf(" " + nb_alea + " ")>-1)
    {
        nb_alea = Math.floor(Math.random()*nb_mots);
    }

    chaine_rangee += " " + nb_alea + " ";
    tab_enigme = tab_mots[nb_alea].split(' ');
    le_mot = tab_enigme[0];
    lindication = tab_enigme[1];
    men_mot = le_mot.toUpperCase();
    le_mot = le_mot.toUpperCase().replace(/[A-Z]/," ");
    //test
    //alert(indication + " " + men_mot );

    document.getElementById("indication").innerHTML = "Indication : <br /><strong>" + lindication + "</strong>";
    document.getElementById("leMot").innerHTML = le_mot;
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

    document.getElementById("calque_" + touch.toLowerCase()).style.backgroundColor="#palegreen";

    for (indice=0;indice<men_mot.length-1;indice++)
    {
        la_lettre = men_mot.substr(indice,1);
        if(la_lettre == touch)
        {
            trouve = true;
            le_mot = le_mot.substr(0,indice) + la_lettre + le_mot.substr(indice+1);
            document.getElementById("leMot").innerHTML = le_mot;
        }
    }

    if (trouve==true)
    {
        if ( le_mot == men_mot)
        {
            nb_passe++;
            if(nb_passe==10)
            {
                document.getElementById("leScore").innerHTML = "Votre score : <strong>" + (le_score - nb_erreurs/4) " / 10</strong> - Mots restant : <strong>" + (10 - nb_passe) + "</strong>";
                fin = true;
            }
            else
            {
                window.setTimeout(function attendre() ( suivant(): ),1000);
            }
        }
    }
    else{
        nb_erreurs++;
        document.getElementById("lePendu").src = "img_pendu/pendu2" + nb_erreurs + ".png";
        if (nb_erreurs==4)
        {
            nb_passe++; 
            window.setTimeout(function attendre() ( suivant(): ),1000);
        }
    }
}


