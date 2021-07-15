// Gets numbers from 0 to (num - 1)
const randNumber = num => Math.floor(Math.random() * num);

const advices = phrases => { 
    //Phrases will be storaged on an array
  let clusterOfPhrases = [];
    for (phrase in phrases){
        //Get a random index from array
        let index = randNumber(phrases[phrase].length);
        //Select random phrases and add them into an array
        switch (phrase) {
            case 'mood':
                clusterOfPhrases.push(`You will be ${phrases[phrase][index]} and`);
                break;
            case 'receive':
                clusterOfPhrases.push(`you will receive ${phrases[phrase][index]} so`);
                break;
            case 'advice':
                clusterOfPhrases.push(`I recommend you to ${phrases[phrase][index]}.`);
                break;
            default:
                clusterOfPhrases.push('You will be happy and you will receive wonderfull things and I recommend you to be nice');
                break;
        }

    }
    return clusterOfPhrases.join(' ');
};

const asciiEmoticons = faces =>{    
    let asciiEmoticon = '';
    for (emoticon in faces){
        let index = randNumber(faces.length);
        if(index == emoticon){
            asciiEmoticon = faces[emoticon];
            break;
        }
    }
    return asciiEmoticon;
};

const phrases = {
    mood : ['happy', 'sad', 'indifferent', 'angry', 'relaxed'],
    receive : ['good fortune', 'bad luck', 'a big debt', 'love', 'wisdom'],
    advice : ['be careful', 'work hard', 'eat more vegetables', 'be kind with others', 'study more']
}
const emoticons = [
    '(͡ ° ͜ʖ ͡ °)',
    '(•_•) ( •_•)>⌐■-■ (⌐■_■)',
    '┻━┻ ︵ヽ(`Д´)ﾉ︵ ┻━┻',
    '¯\_( ͡° ͜ʖ ͡°)_/¯',
    '୧༼ಠ益ಠ༽୨',
    '(っ^з^)♪♬'
];

const joinText = (phrase, emoticon) => {
    let advice = advices(phrase);
    let asciiEmoticon = asciiEmoticons(emoticon)
    return advice + '\n' + asciiEmoticon;
};
//console.log(advices(phrases));

console.log(joinText(phrases, emoticons))