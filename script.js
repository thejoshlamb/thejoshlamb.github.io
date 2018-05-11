const multiplier = 12345;

const list = [
    {
        name: 'Trans Am',
        score: 8.95,
        date: new Date('January 24 2018'),
        link: 'https://www.instagram.com/transamrestaurant/'
    },
    {
        name: 'Moderne Burger',
        score: 6.625,
        date: new Date('January 20 2017'),
        link: 'https://www.moderneburger.com/'
    },
    {
        name: 'Bistro Wagon Rouge',
        score: 8.2,
        date: new Date('November 29 2017'),
        link: 'http://bistrowagonrouge.com/'
    },
    {
        name: 'Monarch Burger at The American',
        score: 8.8,
        date: new Date('June 14 2017'),
        link: 'https://www.monarchburger.com/'
    },
    {
        name: 'Campagnolo Upstairs',
        score: 8.075,
        date: new Date('March 15 2017'),
        link: 'https://www.campagnolorestaurant.ca/upstairs-campagnolo/'
    },
    {
        name: 'The Oakwood Burger 2.0',
        score: 8.1,
        date: new Date('July 26 2017'),
        link: 'http://www.theoakwood.ca/'
    },
    {
        name: 'Parallel 49 Street Kitchen',
        score: 6.725,
        date: new Date('September 27 2017'),
        link: 'http://parallel49brewing.com/street_kitchen'
    },
    {
        name: 'Hawksworth',
        score: 8.25,
        date: new Date('September 20 2016'),
        link: 'https://hawksworthrestaurant.com/'
    },
    {
        name: 'Pourhouse',
        score: 6.9,
        date: new Date('March 28 2018'),
        link: 'http://www.pourhousevancouver.com/'
    },
    {
        name: 'Romer\'s Burger Bar',
        score: 6.6,
        date: new Date('September 3 2017'),
        link: 'http://http://romersburgerbar.com/'
    },
    {
        name: 'Bells & Whistles',
        score: 6.9166,
        date: new Date('April 11 2018'),
        link: 'https://www.bellsandwhistlesyvr.ca/'
    },
    {
        name: 'Crowbar',
        score: 8.5,
        date: new Date('May 11 2018'),
        link: 'https://crowbareastvan.com/'
    }
];

const numberWithCommas = function(x) {
    return Math.round(x).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const table = document.getElementById('scoresTable');
hiscores = list.map(function(item) {
    item.score = item.score*multiplier;
    return item;
});
hiscores.sort(function(a, b) {
    return b.score - a.score;
});
var count = 0;
function drawScores () {
    setTimeout(function() {
        var row = table.insertRow();
        var rank = row.insertCell(0);
        var name = row.insertCell(1);
        var score = row.insertCell(2);
        rank.innerText = count + 1;
        var link = document.createElement("a");
        link.setAttribute("href", hiscores[count].link);
        link.setAttribute("target", "_blank");
        link.className = "blink";
        var linkText = document.createTextNode(hiscores[count].name);
        link.appendChild(linkText);
        name.appendChild(link);
        score.innerText = numberWithCommas(hiscores[count].score);
        count += 1;
        if (count < 10) {
            drawScores();
        }
    }, 100)
};
drawScores();
