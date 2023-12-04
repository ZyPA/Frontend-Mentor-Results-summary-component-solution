// Poor
// Fair
// Good
// Great
// Perfect

import data from './data.json' assert { type: 'json' };

const l = (what) => document.querySelector(what);

const getImage = async (path) => await fetch(path).then(async (res) => await res.text());

let totalScore = 0;
data.forEach((e) => (totalScore += e.score / data.length));
l('.result__score').innerHTML = Math.round(totalScore);
let quality;
switch (Math.floor(Math.round(totalScore) / 20)) {
    case 0:
        quality = 'Poor';
        break;
    case 1:
        quality = 'Fair';
        break;
    case 2:
        quality = 'Good';
        break;
    case 3:
        quality = 'Great';
        break;
    case 4:
        quality = 'Excellent';
        break;
    case 5:
        quality = 'Perfect';
        break;
    default:
        quality = 'Error!';
        break;
}

l('.result__quality-percentage').innerHTML = Math.round((totalScore * 65) / 76);

l('.result__quality').innerHTML = quality;

data.forEach(async (e, i) => {
    l(`.summary__block:nth-of-type(${i + 1}) .summary__icon`).innerHTML = await getImage(e.icon);
    l(`.summary__block:nth-of-type(${i + 1}) .summary__score-data`).innerHTML = e.score;
    document.querySelector(`.summary__block:nth-of-type(${i + 1}) .summary__category`).innerHTML = e.category;
});
