var altura
var peso
function calcular(){
     var res = validador()
        altura = Number(document.getElementById('altura').value)
        peso = Number(document.getElementById('peso').value)
        var informacaoTela = document.getElementById('output')
        if(res){
          var resultado = 
          informacaoTela.innerHTML = (peso/(altura**2)).toFixed(2)
        } 
    }  
function validador(){
    altura = Number(document.getElementById('altura').value)
    peso = Number(document.getElementById('peso').value)
    if(altura.length === 0 || altura > 2.5 || altura <= 0){
        alert('Digite valores validos')
        return false
    }
    if(peso <= 0 || peso > 300){
            alert('Digite valores validos')
            return false
    }
    return true 
}
   
