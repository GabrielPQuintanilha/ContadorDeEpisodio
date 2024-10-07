

const botaoData = document.getElementById("botaoData");
const spanData = document.getElementById("spanData");
const spanNumeroEps = document.getElementById("spanNumeroEps");

const diaUm = new Date();
const diaDois = new Date(2024,9,01);
const diasPassados= (diaUm-diaDois)/(1000 * 60 * 60 * 24);

spanData.textContent=diaUm.toLocaleDateString();
spanNumeroEps.textContent="Episodios são a serem vistos hoje são o "+((Math.floor(diasPassados)*2)+10)+" e o "+((Math.floor(diasPassados)*2)+11);


// console.log(diaUm);
// console.log(diaDois);
// console.log(diasPassados);







