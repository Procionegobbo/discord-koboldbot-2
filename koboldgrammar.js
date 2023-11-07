//crea un'istanza di instagrammar
const fs = require('fs');
const path = require('path');
const instagrammar = require("instagrammar");

function generateKobold(grammar) {

    let grammarFile = path.join(__dirname,'grammar', grammar+'.instagrammar');
    console.log('Grammatica: '+grammarFile)
    let data=fs.readFileSync(grammarFile,'utf8');
    let parsedOutput = parseGrammar(data);

    //console.log(data);
    console.log('parsedOutput: ' + parsedOutput);
    return JSON.parse( parsedOutput );
}

function parseGrammar(grammar){
    var ig = new instagrammar.InstaGrammar(grammar);
    var parsed = ig.generate();
    //console.log(parsed);
    return parsed.replace(/\\"/g, '"');
}

module.exports = generateKobold;
