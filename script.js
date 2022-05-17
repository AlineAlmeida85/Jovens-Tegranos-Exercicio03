console.log("iniciando...")

function verificar() {
    console.log("Testando...")

    let nome1 =  document.getElementById("inputNome1").value;
    let idade1 = parseFloat(document.getElementById("inputIdade1").value);
    let nome2 = document.getElementById("inputNome2").value;
    let idade2 = parseFloat(document.getElementById("inputIdade2").value);

    let media = (idade1 + idade2) /2;

    resultado.innerHTML = (`A idade média de ${nome1} e ${nome2} é de ${media} anos.`);
   
}