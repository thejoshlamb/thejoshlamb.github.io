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
        name: 'Moderne Burgerette',
        score: 7.2375,
       date: new Date('May 17 2019'),
    },
    {
        name: 'Bistro Wagon Rouge',
        score: 8.1,
        date: new Date('November 29 2017'),
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
        const link = document.createElement("a");
        link.setAttribute("href", hiscores[count].link);
        link.setAttribute("target", "_blank");
        link.className = "blink";
        const linkText = document.createTextNode(hiscores[count].name);
        link.appendChild(linkText);
        name.appendChild(link);
        score.innerText = numberWithCommas(hiscores[count].score);
        count += 1;
        if (count < stop) {
            drawScores(stop);
        }
    }, 150)
}

drawScores(10);

if (hiscores.length > 10) {
    const showAll = document.getElementById('showAll');
    showAll.setAttribute("style", "display: block")
    showAll.onclick = () => {
        showAll.setAttribute("style", "display: none")
        drawScores(hiscores.length);

    }
}
