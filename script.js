function enviar() {

    var nome = window.document.getElementById('inomei1').value;
    var ultimonome = window.document.getElementById('iultimonomei1').value;
    var email = window.document.getElementById('iemaili').value;
    var query1 = window.document.getElementById('general').checked;
    var query2 = window.document.getElementById('support').checked;
    var mess = window.document.getElementById('imesst').value;
    var checke = window.document.getElementById('iformi').checked;
    var res = window.document.getElementById('res')



    if (nome == '' && ultimonome == '' && email =='' && !query1 && !query2 && mess == '' && !checke) {
        res.innerText = 'Por favor, preencha todos os campos obrigatórios.';
        res.style = 'background-color: red; color: white; padding: 5px; margin-top: 10px; border-radius: 5px';
        
        return false; // Impede o envio do formulário
    }

    // Código adicional para enviar o formulário ou realizar outras ações

    return true; // Permite o envio do formulário
}