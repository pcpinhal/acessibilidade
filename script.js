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
    var body = $("body");
    var elemento = $(".acessibilidade");
    var fonte = parseInt(elemento.css('font-size'));

    if(e == "n"){
        body.css("color", "#FFF");
        body.css("background", "#000");
        //alert("noite");
    }
    if(e == "d"){
        body.css("color", "#000");
        body.css("background", "#FFF");
        //alert("dia");
    }
}