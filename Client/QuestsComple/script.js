var Icone = $('.IconSvg');


var Ovelha = $('#Ovelha');


var StartBtn = $('#StartButton');


let PerguntasCerta;


var Cont = 0;

var PerguntaAtual = 0;

var IndexLastQuest;


Icone.click(()=>{
    if(Cont == 0)
    {
        Ovelha.css('top', '0px');
        $('#IconSvg').attr('fill', '#0d0229');

        Cont = 1;
    }
    else
    {
        Ovelha.css('top', '-100%');
        $('#IconSvg').attr('fill', '#d1d1d1');

        Cont = 0;
    }
});

StartBtn.click(() => {window.location.href = 'ChooseDificulty.html'});


document.onload = ConfigPergunta();


function ConfigPergunta()
{
    fetch('/Datas/GetQuests', {method: 'GET'}).then(Res=>{
        switch(Res.status)
            {
                case 200:
                    Res.json().then(Data=>{
                        if(!IndexLastQuest)
                        {
                            IndexLastQuest = Data.length;
                        }
                        if(PerguntaAtual + 1 > IndexLastQuest)
                        {
                            setTimeout(()=>{

                                window.location.href = `Result.html?Right=${PerguntasCerta}`;
                            }, 100);
                        }
                        $('.Opções').unbind();
                        console.log(Data, PerguntaAtual)
                        $('#Pergunta').text(Data[PerguntaAtual].Pergunta);
                        $('.Opções').each(function (In){
                            console.log(Data);
                            $(this).text(Data[PerguntaAtual].Opções[In]);
                        });
                        $('.Opções').click(function(){
                            if($(this).index() - 1 == Data[PerguntaAtual].Resposta)
                            {
                                PerguntasCerta++;
                                PerguntaAtual++;
                                let separator = (window.location.href.indexOf("?")===-1)?"?":"&";
                                window.location.href = window.location.href + separator + `CurrentQuest=${PerguntaAtual}`;
                                alert('Resposta certa');
                                ConfigPergunta();
                            }
                            else
                            {
                                PerguntasCerta++;
                                PerguntaAtual++;
                                let separator = (window.location.href.indexOf("?")===-1)?"?":"&";
                                window.location.href = window.location.href + separator + `CurrentQuest=${PerguntaAtual}`;
                                alert('Resposta errada, tente denovo');
                                ConfigPergunta();
                            }
                        });
                    });
                    break;

                case 404:
                    Res.text().then(Data=>{console.log(Data)});
                    break;
            }
    })
    
}
