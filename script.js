

const botaoData = document.getElementById("botaoData");
const spanData = document.getElementById("spanData");
const spanNumeroEps = document.getElementById("spanNumeroEps");

const diaUm = new Date();
const diaDois = new Date(2024,9,01);
const diasPassados= (diaUm-diaDois)/(1000 * 60 * 60 * 24);
const seasons = [0,20,21,22,28,18,22,20,16,22,16,6,17,36,51,26,24,26];
const filler =  [33,50,147,148,149,204,205,213,214,287,298,299,303,304,305,355];



// let episodeOne = ((Math.floor(diasPassados)*2)+10);
let episodeOne = 200;
let episodeTwo = episodeOne+1;
let noFillerEpisodeOne="";
let noFillerEpisodeTwo="";
let epOneClean="";
let epTwoClean="";

fillerSequences();
checkForFillerOne();
checkForFillerTwo();
seasonName();
seasonNameTwo();

spanData.textContent=diaUm.toLocaleDateString();
spanNumeroEps.textContent="Episodios a serem vistos hoje são o "+noFillerEpisodeOne+" ("+epOneClean+") e o "+noFillerEpisodeTwo+" ("+epTwoClean+")";

// console.log(diaUm);
// console.log(diaDois);
console.log(diasPassados);
console.log(noFillerEpisodeOne);
console.log(noFillerEpisodeTwo);
console.log(epOneClean);
console.log(epTwoClean);


function checkForFillerOne(){
    for (let controle = 0; controle <= filler.length;controle++){
        if (filler[controle] === episodeOne ){
            episodeOne++;
            noFillerEpisodeOne = episodeOne;
        }
        else {noFillerEpisodeOne = episodeOne;
        }
    }
}

function checkForFillerTwo(){
    for (let controle = 0; controle <= filler.length;controle++){
        if (filler[controle] === episodeTwo){
            episodeTwo++;
            noFillerEpisodeTwo=episodeTwo;
        }
        else {noFillerEpisodeTwo = episodeTwo;
            
        }
    }
    if (noFillerEpisodeOne === noFillerEpisodeTwo){noFillerEpisodeTwo=episodeTwo+1;}
}

// dava p fazer melhor ctz
function seasonName(){
    let trashName = noFillerEpisodeOne;
    if (trashName<=20){epOneClean ="S1E"+(trashName);}
    else if (trashName<=41){epOneClean ="S2E"+(trashName-20);}
    else if (trashName<=63){epOneClean ="S3E"+(trashName-41);}
    else if (trashName<=91){epOneClean ="S4E"+(trashName-63);}
    else if (trashName<=109){epOneClean ="S5E"+(trashName-91);}
    else if (trashName<=131){epOneClean ="S6E"+(trashName-109);}
    else if (trashName<=151){epOneClean ="S7E"+(trashName-131);}
    else if (trashName<=167){epOneClean ="S8E"+(trashName-151);}
    else if (trashName<=189){epOneClean ="S9E"+(trashName-167);}
    else if (trashName<=205){epOneClean ="S10E"+(trashName-189);}
    else if (trashName<=212){epOneClean ="S11E"+(trashName-205);}
    else if (trashName<=229){epOneClean ="S12E"+(trashName-212);}
    else if (trashName<=265){epOneClean ="S13E"+(trashName-229);}
    else if (trashName<=316){epOneClean ="S14E"+(trashName-265);}
    else if (trashName<=342){epOneClean ="S15E"+(trashName-316);}
    else if (trashName<=366){epOneClean ="S16E"+(trashName-342);}
    else if (trashName<=394){epOneClean ="S17E"+(trashName-366);}
}

// TENTAR DESENVOLVER DESSA FORMA
function seasonNameTwo(){
    let trashName = noFillerEpisodeTwo;
    let seasonFinale = [0,20,41,63,91,109,131,151,167,189,205,212,229,265,316,342,366,394]
    for (let i = 0 ; i <= seasonFinale.length;i++){
        if (trashName <=seasonFinale[i] && trashName>=seasonFinale[i-1]){ epTwoClean = "S"+i+"E"+trashName-seasonFinale[i-1];}
    }
}

// para adicionar ao array Filler a seguinte lista de fillers: 64-108, 128-137,168-189, 228-266, 311-341;
function fillerSequences(){
    for (let i=64;i<=108;i++){filler.push(i);}
    for (let i=128;i<=137;i++){filler.push(i);}
    for (let i=168;i<=189;i++){filler.push(i);}
    for (let i=228;i<=266;i++){filler.push(i);}
    for (let i=311;i<=341;i++){filler.push(i);}
}


