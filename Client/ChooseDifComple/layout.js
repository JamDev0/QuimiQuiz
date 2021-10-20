let CurrentDif = 0;

let OpçDeNivel = $('#SelecDif');

let Opções = $('.OptsDif');

let PlusChanger = $('#Plus');
PlusChanger.click(IncreaseDif);

let StartButton = $('#Start');
StartButton.click(()=>{window.location.href = 'Quests.html'})


let MinusChanger = $('#Minus');
MinusChanger.click(DecreaseDif);


$(window).resize(UpdateLayout);

function UpdateLayout()
{
    $('#BackGround').css({'height': `${$(document).outerHeight(true)}px`});
    MinusChanger.css({'position': 'absolute', 'left': OpçDeNivel.position().left + OpçDeNivel.outerWidth() + 20, 'top': (OpçDeNivel.position().top - 20 + (OpçDeNivel.outerHeight(true) - OpçDeNivel.height())) + 'px'});
    PlusChanger.css({'position': 'absolute', 'left': OpçDeNivel.position().left + OpçDeNivel.outerWidth() + 20, 'top': (OpçDeNivel.position().top + OpçDeNivel.outerHeight() - PlusChanger.outerHeight() + 60 + (OpçDeNivel.outerHeight(true) - OpçDeNivel.height())) + 'px'});
    OpçDeNivel.animate({scrollTop: (OpçDeNivel.scrollTop() + (Opções.eq(CurrentDif).position().top - OpçDeNivel.position().top) - (OpçDeNivel.outerHeight(true) - OpçDeNivel.outerHeight()))}, 400, 'swing');
    console.log($('#SelecDif').height() * 0.6);
    OpçDeNivel.children().css({'padding-top': `${$('#SelecDif').outerHeight() * 0.2}px`, 'padding-bottom': `${$('#SelecDif').outerHeight() * 0.2}px`, 'height': `${$('#SelecDif').outerHeight() * 0.6}px`});
}

UpdateLayout();


GenTextInfo(CurrentDif);


function IncreaseDif()
{
    if((CurrentDif + 1) > OpçDeNivel.children().length - 1)
    {
        anime({
            targets: '#Plus',
            scale: [
                {value: [1, 1.08], duration: 300, easin: 'cubic-bezier(0.245, 0.630, 0.260, 0.640)'},
                {value: 1, duration: 300, easin: 'cubic-bezier(0.245, 0.630, 0.260, 0.640)'}
            ],
            filter: [
                {value: ['drop-shadow(rgba(255, 255, 255, 0.698) 0px 0px clamp(1px, 0.15vw + 0.1px, 7px)', 'drop-shadow(rgba(255, 255, 255, 0.322) 0px 0px clamp(1px, 0.15vw + 0.1px, 7px)'], duration: 300, easin: 'cubic-bezier(0.245, 0.630, 0.260, 0.640)'},
                {value: 'drop-shadow(rgba(255, 255, 255, 0.698) 0px 0px clamp(1px, 0.15vw + 0.1px, 7px)', duration: 300, easin: 'cubic-bezier(0.245, 0.630, 0.260, 0.640)'}
            ]
        });
        anime({
            targets: '#PlusSvgPath',
            opacity: [
                {value: [1, 0.4], duration: 300, easin: 'cubic-bezier(0.005, 0.970, 0.000, 0.950)'},
                {value: 1, duration: 300, easin: 'cubic-bezier(0.005, 0.970, 0.000, 0.950)'}
            ]
        });
    }
    else
    {
        CurrentDif++;
    
        OpçDeNivel.animate({scrollTop: OpçDeNivel.scrollTop() + (Opções.eq(CurrentDif).position().top - OpçDeNivel.position().top) - (OpçDeNivel.outerHeight(true) - OpçDeNivel.height())}, 400, 'swing');
        anime({
            targets: '#Plus',
            scale: [
                {value: [1, 1.1], duration: 400},
                {value: 1, duration: 400}
            ],
            easin: 'cubic-bezier(0.245, 0.630, 0.260, 0.640)'
        });

        GenTextInfo(CurrentDif);
        UpdateLayout();
    }
}

function DecreaseDif()
{
    if((CurrentDif - 1) < 0)
    {
        anime({
            targets: '#Minus',
            scale: [
                {value: [1, 1.08], duration: 300, easin: 'cubic-bezier(0.245, 0.630, 0.260, 0.640)'},
                {value: 1, duration: 300, easin: 'cubic-bezier(0.245, 0.630, 0.260, 0.640)'}
            ],
            filter: [
                {value: ['drop-shadow(rgba(255, 255, 255, 0.698) 0px 0px clamp(1px, 0.15vw + 0.1px, 7px)', 'drop-shadow(rgba(255, 255, 255, 0.322) 0px 0px clamp(1px, 0.15vw + 0.1px, 7px)'], duration: 300, easin: 'cubic-bezier(0.245, 0.630, 0.260, 0.640)'},
                {value: 'drop-shadow(rgba(255, 255, 255, 0.698) 0px 0px clamp(1px, 0.15vw + 0.1px, 7px)', duration: 300, easin: 'cubic-bezier(0.245, 0.630, 0.260, 0.640)'}
            ]
        });
        anime({
            targets: '#MinusSvgPath',
            opacity: [
                {value: [1, 0.4], duration: 300, easin: 'cubic-bezier(0.005, 0.970, 0.000, 0.950)'},
                {value: 1, duration: 300, easin: 'cubic-bezier(0.005, 0.970, 0.000, 0.950)'}
            ]
        });
    }
    else
    {
        CurrentDif--;
    
        OpçDeNivel.animate({scrollTop: OpçDeNivel.scrollTop() + (Opções.eq(CurrentDif).position().top - OpçDeNivel.position().top) - (OpçDeNivel.outerHeight(true) - OpçDeNivel.height())}, 400, 'swing', ()=>{
            GenTextInfo(CurrentDif);
            UpdateLayout();
        });

        anime({
            targets: '#Minus',
            scale: [
                {value: [1, 1.1], duration: 400},
                {value: 1, duration: 400}
            ],
            easin: 'cubic-bezier(0.245, 0.630, 0.260, 0.640)'
        });
    }
}


function GenTextInfo(Id)
{
    fetch('/Datas/GetDescDif', {method: 'GET'}).then((Res)=>{
        switch(Res.status)
        {
            case 200:
                Res.json().then(Data=>{
                    Data.forEach(Element=>{
                        if(Element.Id == Id)
                        {
                            $('#DifDescription').text(Element.Description);
                        }
                        UpdateLayout();
                    });
                });
                break;
    
            case 404:
                console.log(Res.text().then(Data=>{return Data}));
                break;
        }
    });
}