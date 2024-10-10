

const botaoData = document.getElementById("botaoData");
const spanData = document.getElementById("spanData");
const spanNumeroEps = document.getElementById("spanNumeroEps");
const spanEpsVistos = document.getElementById("spanEpsVistos");
const spanPercentualVisto = document.getElementById("spanPercentualVisto");
const spanDiasRestantes = document.getElementById("spanDiasRestantes");
const barraCompleta = document.getElementById('barraCompleta');

const diaUm = new Date();
const diaDois = new Date(2024,9,01);  //index do mes começa com 0
const diasPassados= (diaUm-diaDois)/(1000 * 60 * 60 * 24);
const seasons = [0,20,21,22,28,18,22,20,16,22,16,6,17,36,51,26,24,26];
const filler =  [33,50,147,148,149,204,205,213,214,287,298,299,303,304,305,355];
const lastAiredEp = 366;
const epsNoFillerList =[];
let epsFaltantes ="";
let epsVistos="";
let diasRestantes="";


let episodeOne = ((Math.floor(diasPassados)*2)+10);
let episodeTwo = episodeOne+1;
let noFillerEpisodeOne="";
let noFillerEpisodeTwo="";
let epOneClean="";
let epTwoClean="";
let percentualVisto = "";

fillerSequences();
checkForFillerOne();
checkForFillerTwo();
seasonName();
seasonNameTwo();
cleanEpList();
epVistosFunction()



spanData.textContent=diaUm.toLocaleDateString();
spanNumeroEps.textContent="Ver Hoje: "+noFillerEpisodeOne+" ("+epOneClean+") e "+noFillerEpisodeTwo+" ("+epTwoClean+")";

spanEpsVistos.textContent="Visto: "+epsVistos +" eps" ;

spanPercentualVisto.textContent= Math.floor(percentualVisto)+"%";

spanDiasRestantes.textContent=diasRestantes+" dias para terminar";



// console.log(diaUm);
// console.log(diaDois);
// console.log(diasPassados);
// console.log(noFillerEpisodeOne);
// console.log(noFillerEpisodeTwo);
// console.log(epOneClean);
// console.log(epTwoClean);
// console.log (filler)
// console.log(epsNoFillerList)
// console.log (epsVistos);
// console.log(epsFaltantes);
// console.log(percentualVisto);

// ver se o ep 1 é filler
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

//ver se o ep 2 e filler
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

//limpar nome ep 1
function seasonName(){
    let epName = noFillerEpisodeOne;
    let seasonFinale = [0,20,41,63,91,109,131,151,167,189,205,212,229,265,316,342,366,394]
    for (let i = 0 ; i <= seasonFinale.length;i++){
        if (epName <=seasonFinale[i] && epName>seasonFinale[i-1] ){ epOneClean = "S"+i+"E"+(epName-seasonFinale[i-1]);}
	
    }
}

// limpar nome ep 2    
function seasonNameTwo(){
    let epName = noFillerEpisodeTwo;
    let seasonFinale = [0,20,41,63,91,109,131,151,167,189,205,212,229,265,316,342,366,394]
    for (let i = 0 ; i <= seasonFinale.length;i++){
        if (epName <=seasonFinale[i] && epName>seasonFinale[i-1]){ epTwoClean = "S"+i+"E"+(epName-seasonFinale[i-1]);}
    }
}

function cleanEpList(){
    for (let i=1;i<=lastAiredEp;i++){epsNoFillerList.push(i);}
    for (let b=0;b<=epsNoFillerList.length;b++){
        for (let a = 0; a<=filler.length;a++){if (filler[a] === epsNoFillerList[b]){epsNoFillerList.splice(b,1);}}
    }
}

function epVistosFunction(){
    for (let i=0;i<=epsNoFillerList.length;i++){
        if (epsNoFillerList[i] === noFillerEpisodeOne){epsVistos=i+1; epsFaltantes = epsNoFillerList.length - epsVistos;}
    }
    percentualVisto = (epsVistos/epsFaltantes)*100;
    diasRestantes = epsFaltantes/2;
    barraCompleta.style.setProperty("width", `${percentualVisto}%`)
}

// para adicionar ao array Filler a seguinte lista de fillers: 64-108, 128-137,168-189, 228-266, 311-341;
function fillerSequences(){
    for (let i=64;i<=108;i++){filler.push(i);}
    for (let i=128;i<=137;i++){filler.push(i);}
    for (let i=168;i<=189;i++){filler.push(i);}
    for (let i=228;i<=266;i++){filler.push(i);}
    for (let i=311;i<=341;i++){filler.push(i);}
}


