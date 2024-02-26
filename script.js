function fonte(e){
    var elemento = $(".acessibilidade");
    var fonte = parseInt(elemento.css('font-size'));
    var body = $('body');
    const fonteNormal = parseInt(body.css('font-size'));

    if (e == 'a'){
        fonte++;
    }
    if (e == 'd'){
        fonte--;
    }
    if (e == 'n'){
        fonte = fonteNormal;
    }

    elemento.css("fontSize", fonte)    
}
function contraste(e){
    // document.querySelector('#teste').style.fonte = 100;
    //const address = document.querySelector("#teste");
    //address.style.color = "red";
}