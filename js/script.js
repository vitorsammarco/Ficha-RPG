

function refreshvida() {
    var vidamax = document.getElementById('vidamax').value;
    var vida = document.getElementById('vida').value;
    valorvida = vida / vidamax
    vidaequiv = 100 * valorvida + "%"

    document.getElementById('vida').setAttribute("max", vidamax);

    document.getElementById('barra-vida').style.width = vidaequiv;
    if (valorvida < 0.35) {
        document.getElementById('barra-vida').className = "barra-vermelha";
    } else if (valorvida < 0.4) {
        document.getElementById('barra-vida').className = "barra-laranja";
    } else if (valorvida <= 0.5) {
        document.getElementById('barra-vida').className = "barra-amarela";
    } else if (valorvida < 0.75) {
        document.getElementById('barra-vida').className = "barra-verdeam";
    } else {
        document.getElementById('barra-vida').className = "barra-verde";
        document.getElementById("pic").style.filter = "grayscale(0%) blur(0)";
    }

    
    if (valorvida < 0.99) {document.getElementById('barra-vida').style.borderRadius="12px 0 0 12px"
    }else{document.getElementById('barra-vida').style.borderRadius="12px"}


    if(valorvida == 0){/*WASTED*/
        document.getElementById('wasted').style.opacity= "100%";
        document.getElementById("pic").style.filter = "grayscale(100%) blur(8px)";
    
    }else if(valorvida < 0.1){
        document.getElementById("pic").style.filter = "grayscale(100%)";
        document.getElementById('wasted').style.opacity= "0%";
    }else{
        document.getElementById("pic").style.filter = "grayscale(0%) blur(0px)";
        document.getElementById('wasted').style.opacity= "0%";
    }
    

}

function check() {
    $("#salvar").click(function () {
        $("#salvomsg").fadeIn(300)
        setTimeout("$('#salvomsg').fadeOut(300);", 1000)
    });
}

/* Gerar Prévia */

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#pic')
                .attr('src', e.target.result);
        };

        reader.readAsDataURL(input.files[0]);
    }
}
/*Fim - Gerar Prévia */

var fotop, vnome, vidade, vlore, vhack, vatirar, vrastrear, vfurtivo, vprimsoc, vluta, vdirigir, vatlet, vtoler, vsobrev;

function inicia() {
    if (localStorage.Fotoperfil != undefined) {
        fotop = localStorage.Fotoperfil;
        document.getElementById("pic").src = fotop;
    }
    if (localStorage.Nome != undefined) {
        vnome = localStorage.Nome;
        document.getElementById("nomeinput").value = vnome;
    }
    if (localStorage.Idade != undefined) {
        vidade = localStorage.Idade;
        document.getElementById("idade").value = vidade;
    }
    if (localStorage.Historia != undefined) {
        vlore = localStorage.Historia;
        document.getElementById("lore").value = vlore;
    }
    if (localStorage.VidaMaxima != undefined) {
        vidamax = localStorage.VidaMaxima ;
        document.getElementById("vidamax").value = vidamax;
    }
    if (localStorage.VidaAtual != undefined) {
        vidaatual = localStorage.VidaAtual ;
        document.getElementById("vida").value = vidaatual;
    }

    /* 1-5 Atributos */
    if (localStorage.Hack != undefined) {
        vhack = localStorage.Hack;
        document.getElementById("hack").value = vhack;
    }
    if (localStorage.Atirar != undefined) {
        vatirar = localStorage.Atirar;
        document.getElementById("atirar").value = vatirar;
    }
    if (localStorage.Rastrear != undefined) {
        vrastrear = localStorage.Rastrear;
        document.getElementById("rastrear").value = vrastrear;
    }
    if (localStorage.Furtivo != undefined) {
        vfurtivo = localStorage.Furtivo;
        document.getElementById("furtivo").value = vfurtivo;
    }
    if (localStorage.Primeiros_Socorros != undefined) {
        vprimsoc = localStorage.Primeiros_Socorros;
        document.getElementById("primsoc").value = vprimsoc;
    }


    /* 6-10 Atributos*/
    if (localStorage.Luta != undefined) {
        vluta = localStorage.Luta;
        document.getElementById("luta").value = vluta;
    }
    if (localStorage.Dirigir != undefined) {
        vdirigir = localStorage.Dirigir;
        document.getElementById("dirigir").value = vdirigir;
    }
    if (localStorage.Atletismo != undefined) {
        vatlet = localStorage.Atletismo;
        document.getElementById("atlet").value = vatlet;
    }
    if (localStorage.Tolerancia != undefined) {
        vtoler = localStorage.Tolerancia;
        document.getElementById("toler").value = vtoler;
    }
    if (localStorage.Sobrevivencia != undefined) {
        vsobrev = localStorage.Sobrevivencia;
        document.getElementById("sobrev").value = vsobrev;
    }

    /* 10-15 Atributos*/
    if (localStorage.Mentir != undefined) {
        vmentir = localStorage.Mentir;
        document.getElementById("mentir").value = vmentir;
    }
    if (localStorage.Invasao != undefined) {
        invad = localStorage.Invasao;
        document.getElementById("invad").value = invad;
    }
    if (localStorage.Conhecimento != undefined) {
        conhec = localStorage.Conhecimento;
        document.getElementById("conhec").value = conhec;
    }
    if (localStorage.Falsificacao != undefined) {
        falsi = localStorage.Falsificacao;
        document.getElementById("falsi").value = falsi;
    }
    if (localStorage.Ciencia != undefined) {
        cienc = localStorage.Ciencia;
        document.getElementById("cienc").value = cienc;
    }

    /* 0-5 NOVOS-Atributos*/
    if (localStorage.Forca != undefined) {
        vforca = localStorage.Forca;
        document.getElementById("forca").value = vforca;
    }
    if (localStorage.Destreza != undefined) {
        dest = localStorage.Destreza;
        document.getElementById("dest").value = dest;
    }
    if (localStorage.Constituicao != undefined) {
        constit = localStorage.Constituicao;
        document.getElementById("constit").value = constit;
    }
    if (localStorage.Inteligencia != undefined) {
        inteli = localStorage.Inteligencia;
        document.getElementById("inteli").value = inteli;
    }
    if (localStorage.Sabedoria != undefined) {
        sabed = localStorage.Sabedoria;
        document.getElementById("sabed").value = sabed;
    }
    if (localStorage.Carisma != undefined) {
        carism = localStorage.Carisma;
        document.getElementById("carism").value = carism;
    }


}

function gravar() {
    fotop = document.getElementById("pic").src;
    vnome = document.getElementById("nomeinput").value;
    vidade = document.getElementById("idade").value;
    vlore = document.getElementById("lore").value;
    vidamax = document.getElementById("vidamax").value;
    vidaatual = document.getElementById("vida").value;
    vhack = document.getElementById("hack").value;
    vatirar = document.getElementById("atirar").value;
    vrastrear = document.getElementById("rastrear").value;
    vfurtivo = document.getElementById("furtivo").value;
    vprimsoc = document.getElementById("primsoc").value;
    vluta = document.getElementById("luta").value;
    vdirigir = document.getElementById("dirigir").value;
    vatlet = document.getElementById("atlet").value;
    vtoler = document.getElementById("toler").value;
    vsobrev = document.getElementById("sobrev").value;
    vmentir = document.getElementById("mentir").value;
    invad = document.getElementById("invad").value;
    conhec = document.getElementById("conhec").value;
    falsi = document.getElementById("falsi").value;
    cienc = document.getElementById("cienc").value;
    vforca = document.getElementById("forca").value;
    dest = document.getElementById("dest").value;
    constit = document.getElementById("constit").value;
    inteli = document.getElementById("inteli").value;
    sabed = document.getElementById("sabed").value;
    carism = document.getElementById("carism").value;
    localStorage.Fotoperfil = fotop;
    localStorage.Nome = vnome;
    localStorage.Idade = vidade;
    localStorage.Historia = vlore;
    localStorage.VidaMaxima = vidamax;
    localStorage.VidaAtual = vidaatual;
    localStorage.Hack = vhack
    localStorage.Atirar = vatirar
    localStorage.Rastrear = vrastrear
    localStorage.Furtivo = vfurtivo
    localStorage.Primeiros_Socorros = vprimsoc
    localStorage.Luta = vluta;
    localStorage.Dirigir = vdirigir;
    localStorage.Atletismo = vatlet;
    localStorage.Tolerancia = vtoler;
    localStorage.Sobrevivencia = vsobrev;
    localStorage.Mentir = vmentir;
    localStorage.Invasao = invad;
    localStorage.Conhecimento = conhec;
    localStorage.Falsificacao = falsi;
    localStorage.Ciencia = cienc;
    localStorage.Forca = vforca;
    localStorage.Destreza = dest;
    localStorage.Constituicao = constit;
    localStorage.Inteligencia = inteli;
    localStorage.Sabedoria = sabed;
    localStorage.Carisma = carism;
}

function resetar() {
    if (confirm("Você tem certeza que quer apagar sua ficha?")) {
        localStorage.clear();
        window.location.reload(1);
    }

}

window.addEventListener("load", inicia);
