//lance de des
function _1d9() {
    let result = Math.floor(Math.random() * 9) + 1;
    let result_str = "";

    switch(result){
        case 1:
            result_str = "Arme 1 main tranchante";
            break;
        case 2: 
            result_str = "Arme 2 main tranchante";
            break;
        case 3:
            result_str = "Arme 1 main contendante";
            break;
        case 4:
            result_str = "Arme 2 main contendante";
            break;
        case 5: 
            result_str = "Bouclier";
            break;
        case 6:
            result_str = "Casque";
            break;
        case 7:
            result_str = "Plastron";
            break;
        case 8:
            result_str = "Brassard";
            break;
        case 9:
            result_str = "Jambière";
            break;
    }

    return result_str;
}

function _1d3() {
    let result = Math.floor(Math.random() * 2) + 1;
    let result_str = "";

    switch(result){
        case 1: 
            result_str = "Armure";
            break;
        case 2:
            result_str = "Barrière";
            break;
        case 3:
            result_str = "Hybride";
            break;
    }

    return result_str;
}

function _1d20() {
    let result = Math.floor(Math.random() * 20) + 1;
    return result
}

function _3d30() {
    let result1 = Math.floor(Math.random() * 30) + 1;
    let result2 = Math.floor(Math.random() * 30) + 1;
    let result3 = Math.floor(Math.random() * 30) + 1;

    let result = result1 + result2 + result3;
    return result;
}

function _5d80() {
    let result1 = Math.floor(Math.random() * 80) + 1;
    let result2 = Math.floor(Math.random() * 80) + 1;
    let result3 = Math.floor(Math.random() * 80) + 1;
    let result4 = Math.floor(Math.random() * 80) + 1;
    let result5 = Math.floor(Math.random() * 80) + 1;

    let result = result1 + result2 + result3 + result4 + result5;
    return result;
}

function _8d100() {
    let result1 = Math.floor(Math.random() * 100) + 1;
    let result2 = Math.floor(Math.random() * 100) + 1;
    let result3 = Math.floor(Math.random() * 100) + 1;
    let result4 = Math.floor(Math.random() * 100) + 1;
    let result5 = Math.floor(Math.random() * 100) + 1;
    let result6 = Math.floor(Math.random() * 100) + 1;
    let result7 = Math.floor(Math.random() * 100) + 1;
    let result8 = Math.floor(Math.random() * 100) + 1;

    let result = result1 + result2 + result3 + result4 + result5 + result6 + result7 + result8;
    return result;
}

function _1d10() {
    let result = Math.floor(Math.random() * 10) + 1;
    return result;
}

function _1d30() {
    let result = Math.floor(Math.random() * 30) + 1;
    return result;
}

function _1d4() {
    let result = Math.floor(Math.random() * 4) + 1;
    let result_str = ""

    switch(result){
        case 1:
            result_str = "Feu";
            break;
        case 2: 
            result_str = "Eau";
            break;
        case 3:
            result_str = "Vent";
            break;
        case 4:
            result_str = "Terre";
            break;
    }

    return result_str;
}

function _1d5() {
    let result = Math.floor(Math.random() * 5) + 1;
    let result_str = ""

    switch(result){
        case 1:
            result_str = "Force";
            break;
        case 2: 
            result_str = "Agilité";
            break;
        case 3:
            result_str = "Discrétion";
            break;
        case 4:
            result_str = "Constitution";
            break;
        case 5:
            result_str = "Charisme";
            break;
    }
    
    return result_str;
}

//ouverture de crystite
function debut() {
    //type d'equipement
    let str = "";
    str = str + _1d9();

    //savoir si c'est une armure
    let armure = false;
    if(str == "Bouclier") {armure = true;} 
    if(str == "Casque") {armure = true;}
    if(str == "Plastron") {armure = true;}
    if(str == "Jambière") {armure = true;}
    if(str == "Brassard") {armure = true;}

    //mettre le type d'armure
    if (armure) {
        str = str + " - " + _1d3();
    }
    

    //return
    return str;
}

function blanche() {
    //type
    let str = debut();

    //stat principal
    let stat1 = _1d20();

    //savoir si il faut diviser
    let regex = /Hybride$/g;
    if(regex.test(str)) {
        if(stat1%2 == 1) {
            stat1 = stat1 + 1;
        }
        stat1 = stat1/2;
    }

    //ajout dans le str
    str = str + "<br>" + "Statistique principale : " + stat1;

    //envoie du resultat
    $("#crystite-result").html(str)
}

function verte() {
        //type
        let str = debut();

        //stat principal
        let stat1 = _3d30();
    
        //savoir si il faut diviser
        let regex = /Hybride$/g;
        if(regex.test(str)) {
            if(stat1%2 == 1) {
                stat1 = stat1 + 1;
            }
            stat1 = stat1/2;
        }
    
        //ajout dans le str
        str = str + "<br>" + "Statistique principale : " + stat1;
        
        //stat2
        str = str +"<br>+" + _1d10() + " " + _1d4();

        //envoie du resultat
        $("#crystite-result").html(str)
}

function bleu() {
    //type
    let str = debut();

    //stat principal
    let stat1 = _5d80();

    //savoir si il faut diviser
    let regex = /Hybride$/g;
    if(regex.test(str)) {
        if(stat1%2 == 1) {
            stat1 = stat1 + 1;
        }
        stat1 = stat1/2;
    }

    //ajout dans le str
    str = str + "<br>" + "Statistique principale : " + stat1;
    
    //stat2
    str = str +"<br>+" + _1d20() + " " + _1d4();

    //stat3
    if(Math.random() == 1) {
        str = str +"<br>+" + _1d10() + " " + _1d4();
    } else {
        str = str +"<br>+" + _1d10() + " " + _1d5();
    }

    //bonus?
    let bonus = Math.floor(Math.random() * 100) + 1;
    if (bonus == 1) {
        str = str + "<br>L'equipement possede un bonus que zopu doit donner"
    }

    //envoie du resultat
    $("#crystite-result").html(str)
}

function orange() {
    //type
    let str = debut();

    //stat principal
    let stat1 = _8d100();

    //savoir si il faut diviser
    let regex = /Hybride$/g;
    if(regex.test(str)) {
        if(stat1%2 == 1) {
            stat1 = stat1 + 1;
        }
        stat1 = stat1/2;
    }

    //ajout dans le str
    str = str + "<br>" + "Statistique principale : " + stat1;
    
    //stat2
    str = str +"<br>+" + _1d30() + " " + _1d4();

    //stat3
    if(Math.random() == 1) {
        str = str +"<br>+" + _1d20() + " " + _1d4();
    } else {
        str = str +"<br>+" + _1d20() + " " + _1d5();
    }

    //stat4
    str = str + "<br>+" + _1d10() + " Exaltation"

    //bonus?
    let bonus = Math.floor(Math.random() * 100) + 1;
    if (bonus <= 5) {
        str = str + "<br>L'equipement possede un bonus que zopu doit donner"
    }

    //envoie du resultat
    $("#crystite-result").html(str)
}