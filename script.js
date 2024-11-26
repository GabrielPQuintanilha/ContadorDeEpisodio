

const botaoData = document.getElementById("botaoData");
const spanData = document.getElementById("spanData");
const spanNumeroEps = document.getElementById("spanNumeroEps");
const spanEpsVistos = document.getElementById("spanEpsVistos");
const spanPercentualVisto = document.getElementById("spanPercentualVisto");
const spanDiasRestantes = document.getElementById("spanDiasRestantes");
const barraCompleta = document.getElementById('barraCompleta');
const botaoAtrasado = document.getElementById('botaoAtrasado');
const divAtrasado = document.getElementById('divAtrasado');
const inputNumeroAtrasado = document.getElementById('inputNumeroAtrasado');

const diaUm = new Date();
const diaDois = new Date(2024,9,01);  //index do mes começa com 0
const diasPassados= (diaUm-diaDois)/(1000 * 60 * 60 * 24);
const seasons = [0,20,21,22,28,18,22,20,16,22,16,6,17,36,51,26,24,26];
const filler =  [33,50,147,148,149,204,205,213,214,287,298,299,303,304,305,355];
const lastAiredEp = 366;
const epsNoFillerList =[];
const allEpisodes =[];

let epsFaltantes ="";
let epsVistos="";
let diasRestantes="";
let episodeOne = "";
let episodeTwo = "";
let noFillerEpisodeOne="";
let noFillerEpisodeTwo="";
let epOneClean="";
let epTwoClean="";
let percentualVisto = "";

fillerSequences();
loadAllEpisodes();
cleanEpList();
episodeToday()
seasonName();
seasonNameTwo();
epVistosFunction()
atualizarPagina()

botaoAtrasado.addEventListener('click', showBotaoAtrasado);
inputNumeroAtrasado.addEventListener('input', atualizarEpisodioAtrasado);

function atualizarPagina(){
    
spanData.textContent=diaUm.toLocaleDateString();
spanNumeroEps.innerHTML="Ver hoje: "+`<a href="https://animesonlinecc.to/episodio/bleach-episodio-${noFillerEpisodeOne}/">${noFillerEpisodeOne}</a>`+" ("+epOneClean+") e "+`<a href="https://animesonlinecc.to/episodio/bleach-episodio-${noFillerEpisodeTwo}/">${noFillerEpisodeTwo}</a>`+" ("+epTwoClean+")";

spanEpsVistos.textContent="Visto: "+epsVistos +" eps" ;

spanPercentualVisto.textContent= Math.floor(percentualVisto)+"%";

spanDiasRestantes.textContent=diasRestantes+" dias para terminar";
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
    
    let difference = allEpisodes.filter(item => !filler.includes(item));
    epsNoFillerList.push(...difference);
    // console.log(epsNoFillerList);
}

function epVistosFunction(){
    
    for (let i=0;i<=epsNoFillerList.length;i++){
        if (epsNoFillerList[i] === noFillerEpisodeOne){
            epsVistos=i; 
            epsFaltantes = epsNoFillerList.length - epsVistos;
            }
    }
    percentualVisto = (epsVistos/epsNoFillerList.length)*100;
    diasRestantes = epsFaltantes/2;
    barraCompleta.style.setProperty("width", `${percentualVisto}%`)
}

function episodeToday(){
    a=1;
    for (let i=0; i<=(Math.floor(diasPassados)); i++){
        noFillerEpisodeOne= epsNoFillerList[8+a];
        noFillerEpisodeTwo = epsNoFillerList[8+a+1];
        a=a+2;
    }
    return noFillerEpisodeOne,noFillerEpisodeTwo;
}

// para adicionar ao array Filler a seguinte lista de fillers: 64-108, 128-137,168-189, 228-266, 311-341;
function fillerSequences(){
    let keyFillerEpisodes = [64,108,128,137,168,189,228,266,311,341];
    
    for (let i=0;i<=9;i=i+2){
        for (let a= keyFillerEpisodes[i]; a<=keyFillerEpisodes[i+1]; a++){
        filler.push(a);
        }
    }
    // console.log("lista de filler: ",filler)
}

function showBotaoAtrasado(){
    if (divAtrasado.style.display==="none"){divAtrasado.style.display="block"}
    else {divAtrasado.style.display="none"}
}

function atualizarEpisodioAtrasado(){
    let epAtrasado = inputNumeroAtrasado.value;
    episodeOne = Number(inputNumeroAtrasado.value)+1;
    episodeTwo = episodeOne+1;

checkForFillerOne();
checkForFillerTwo();
seasonName();
seasonNameTwo();
epVistosFunction();

atualizarPagina();

}

function loadAllEpisodes(){

    for (let i=1;i<=lastAiredEp;i++){
        allEpisodes.push(i);
    }
    
    // console.log(allEpisodes)
}

