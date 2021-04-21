// Extract the required classes from the discord.js module
const { Client, MessageEmbed } = require('discord.js');

// Create an instance of a Discord client
//const client = new Client({autoReconnect: true});
const client = new Client();

//const keepAlive = require('./server');
const generateKobold = require('./koboldgrammar');


const armaUrl = 'https://grammar.procionegobbo.it/grammar/arma-fantasy-json';
const pngUrl = 'https://grammar.procionegobbo.it/grammar/png-json';
const koboldUrl = 'https://grammar.procionegobbo.it/grammar/koboldoJson';

client.on('ready', () => {
    console.log(`RandomKoboldBot è online ${client.user.tag}!`);
});

client.on('message', msg => {
    if (msg.content.toUpperCase().startsWith('KOB')) {
        console.log('Comando ricevuto: ' + msg.content);
        //console.log(msg);
        if (msg.content.toUpperCase() === 'KOBKOBOLDO') {
            console.log(msg.author.username + " ha chiesto un koboldo nel canale " + msg.channel.name);
            msg.channel.send('Koboldo in arrivo!');
            let arma = generateKobold('arma-fantasy-json');
            let kobold = generateKobold('koboldoJson');
            let png = generateKobold('png-json');

            //console.log(kobold);
            //console.log(arma);
            //console.log(png);
            let responseText = "" +
                //"**Nome**: " + kobold.Nomekoboldo + " " + kobold.CogNomekoboldo + "\n" +
                "**Origine**: " + kobold.Originekoboldo + "\n" +
                "**Scaglie**: " + kobold.Colorekoboldo + "\n" +
                "**Segni particolari**: " + kobold.SegnoParticolare + "\n" +
                "**Parentela con i coboldi di Fumble!**: " + kobold.ParentelaKoboldo + "\n" +
                "**Ricetta preferita**: " + kobold.PiattoKoboldo + "\n" +
                "**Arma preferita**: " + arma.arma + "\n" +
                "**Occupazione attuale**: " + png.png + "\n" +
                "**Storia**: " + kobold.StoriaKoboldo + "";
            const embed = new MessageEmbed()
                .setTitle(kobold.Nomekoboldo + " " + kobold.CogNomekoboldo)
                .setColor(0xFF0000)
                .setDescription(responseText);
            msg.channel.send(embed)
                .then(message => console.log('Sent #' + message.id + ': ' + message.content))
                .catch(console.error);

        }
        if (msg.content.toUpperCase() === 'KOBOCCUPAZIONE') {
            let png = generateKobold('png-json');
            const embed = new MessageEmbed()
                .setTitle('Occupazione da koboldo')
                .setColor(0xFF0000)
                .setDescription('*' + png.png + '*');
            msg.channel.send(embed)
                .then(message => console.log('Sent #' + message.id + ': ' + message.content))
                .catch(console.error);

        }
        if (msg.content.toUpperCase() === 'KOBARMA') {
            let arma = generateKobold('arma-fantasy-json');
            const embed = new MessageEmbed()
                .setTitle('Arma da koboldo')
                .setColor(0xFF0000)
                .setDescription(arma.arma);
            msg.channel.send(embed)
                .then(message => console.log('Sent #' + message.id + ': ' + message.content))
                .catch(console.error);
        }

        if (msg.content.toUpperCase() === 'KOBRICETTA') {
            let kobold = generateKobold('koboldoJson');
            const embed = new MessageEmbed()
                .setTitle('Ricetta kobolda')
                .setColor(0xFF0000)
                .setDescription(kobold.PiattoKoboldo);
            msg.channel.send(embed)
                .then(message => console.log('Sent #' + message.id + ': ' + message.content))
                .catch(console.error);
        }

        if (msg.content.toUpperCase() === 'KOBAIUTO') {
            let responseText = "Ciao sono il generatore casuale di koboldi." +
                "Per estrarre qualcosa dal libro di **Krubal** usa questi comandi:\n" +
                "**kobKoboldo**: per estrarre un koboldo casuale\n" +
                "**kobArma**: per estrarre un'arma (spesso strana e inusuale)\n" +
                "**kobOccupazione**: per trovare un'occupazione da koboldo (lavoro o passatempo)\n" +
                "**kobRicetta**: per scoprire l'arte culinaria dei koboldi\n" +
                "**kobAiuto**: per rivedere questo testo";
            const embed = new MessageEmbed()
                .setTitle('RandomKoboldBot')
                .setColor(0xFF0000)
                .setDescription(responseText);
            msg.channel.send(embed)
                .then(message => console.log('Sent #' + message.id + ': ' + message.content))
                .catch(console.error);
        }
    }
});


//keepAlive();

client.login(process.env.DISCORD_TOKEN);

const express = require('express');
const server = express();
server.all('/', (req, res)=>{
    res.send('Kobold bot is alive!')
})