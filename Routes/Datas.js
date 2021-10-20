const Express = require('express')
const Router = Express();
const Fs = require('fs');


Router.get('/GetQuests', (Req, Res)=>{
    let Quests = JSON.parse(Fs.readFileSync('Datas/Quests.txt', 'utf-8'));

    Res.type('json');
    Res.send(Quests);
});

Router.get('/GetDescDif', (Req, Res)=>{
    let Desc = JSON.parse((Fs.readFileSync('Datas/DificultyDescriptions.txt', 'utf-8')));
    
    Res.type('json');
    Res.send(Desc);
});

module.exports = Router;
