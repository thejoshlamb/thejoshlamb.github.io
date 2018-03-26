const multiplier = 12345;

const burgers = {
    'Trans Am': 8.85,
    'Moderne Burger': 6.675,
    'Bistro Wagon rouge': 8.2333,
    'Monarch Burger at The American': 8.8,
    'Campagnolo Upstairs': 8.4,
    'The Oakwood Burger 2.0': 8.1,
    'Parallel 49 Street Kitchen': 6.85,
    'Hawksworth': 8.25,
    'Pourhouse': 6.45
};

const list = [
    {
        name: 'Trans Am',
        score: 8.85,
        date: new Date('January 24 2018'),
        link: 'https://www.instagram.com/transamrestaurant/'
    },
    {
        name: 'Moderne Burger',
        score: 6.675,
        date: new Date('January 20 2017'),
        link: 'https://www.moderneburger.com/'
    },
    {
        name: 'Bistro Wagon Rouge',
        score: 8.2333,
        date: new Date('November 29 2017'),
        link: 'http://bistrowagonrouge.com/'
    },
    {
        name: 'Monarch Burger at The American',
        score: 8.775,
        date: new Date('June 14 2017'),
        link: 'https://www.monarchburger.com/'
    },
    {
        name: 'Campagnolo Upstairs',
        score: 8.4,
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
        score: 6.85,
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
        score: 6.45,
        date: new Date('October 27 2017'),
        link: 'http://www.pourhousevancouver.com/'
    },
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
var count = 1;
hiscores.forEach(function(burger) {
    var row = table.insertRow();
    var rank = row.insertCell(0);
    var name = row.insertCell(1);
    var score = row.insertCell(2);
    rank.innerText = count;
    var link = document.createElement("a");
    link.setAttribute("href", burger.link);
    link.setAttribute("target", "_blank");
    link.className = "blink";
    var linkText = document.createTextNode(burger.name);
    link.appendChild(linkText);
    name.appendChild(link);
    score.innerText = numberWithCommas(burger.score);
    count += 1;
});