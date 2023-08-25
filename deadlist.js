const deadlist = [    
     {
         name: 'Crowbar',
         score: 8.5,
         date: new Date('May 11 2018'),
     },
    {
        name: 'Trans Am',
        score: 9.2,
        date: new Date('January 24 2018'),
    },
     {
         name: 'Monarch Burger',
         score: 8.4,
         date: new Date('June 14 2017'),
     },
    {
        name: 'Campagnolo Upstairs',
        score: 8.156,
        date: new Date('March 15 2017'),
    }
]

const multiplier = 12345;

const numberWithCommas = function(x) {
    return Math.round(x).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const table = document.getElementById('deadScoresTable');
hiscores = deadlist.map(function(item) {
    item.score = item.score*multiplier;
    return item;
});
hiscores.sort(function(a, b) {
    return b.score - a.score;
});

let count = 0;

function drawScores (stop) {
    setTimeout(function() {
        const row = table.insertRow();
        const rank = row.insertCell(0);
        const name = row.insertCell(1);
        const score = row.insertCell(2);
        rank.innerText = count + 1;
        const linkText = document.createTextNode(hiscores[count].name);
        name.appendChild(linkText);
        score.innerText = numberWithCommas(hiscores[count].score);
        count += 1;
        if (count < stop) {
            drawScores(stop);
        }
    }, 150)
}

drawScores(hiscores.length);
