//Minhas funções
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
function cor(x){
    var cor1 = $(".cor1");
    var cor2 = $(".cor2");
    var cor3 = $(".cor3");    

    if(x == "1"){
        cor1.css("color", "blue");       
        //alert("noite");
    }
    if(x == "2"){
        cor2.css("color", "yellow");       
        //alert("noite");
    }
    if(x == "3"){
        cor3.css("color", "red");       
        //alert("noite");
    }
    
}