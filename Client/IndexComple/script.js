var Icone = $('.IconSvg');


var Menu = $('#Menu');

var StartBtn = $('#StartButton');


var Cont = 0;


Icone.click(()=>{
    if(Cont == 0)
    {
        Menu.css('top', '0px');
        $('#IconSvg').attr('fill', '#0d0229');

        Cont = 1;
    }
    else
    {
        Menu.css('top', '-100%');
        $('#IconSvg').attr('fill', '#d1d1d1');

        Cont = 0;
    }
});

StartBtn.click(() => {window.location.href = 'ChooseDificulty.html'});