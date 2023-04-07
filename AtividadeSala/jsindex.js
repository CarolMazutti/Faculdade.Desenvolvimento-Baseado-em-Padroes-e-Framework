var componentes = document.getElementsByClassName('bb');
for(x=0; x<componentes.length;x++){
    componentes[x].onmouseover=function(event){
    mudarCorFundo('red',event.target)};
    
    componentes[x].onmouseout=function(event){
        mudarCorFundo('',event.target);
    }
}


function mudarCorFundo(cor,componente){
    componente.style.backgroundColor=cor;
}


function clicar(numero1, numero2){
    total = numero1+numero2;
    alert('O Valor da soma é: '+total);
}