// yes, i agree, this is lazily written

const list = [
    {
        name: 'Trans Am',
        score: 9.05,
        date: new Date('January 24 2018'),
        link: 'https://www.instagram.com/transamrestaurant/'
    },
    {
        name: 'Moderne Burger',
        score: 6.425 + 0.01,
        date: new Date('January 20 2017'),
        link: 'https://www.moderneburger.com/'
    },
    {
        name: 'Bistro Wagon Rouge',
        score: 8.1,
        date: new Date('November 29 2017'),
        link: 'http://bistrowagonrouge.com/'
    },
    {
        name: 'Monarch Burger',
        score: 8.575,
        date: new Date('June 14 2017'),
        link: 'https://www.monarchburger.com/'
    },
    {
        name: 'Campagnolo Upstairs',
        score: 7.925,
        date: new Date('March 15 2017'),
        link: 'https://www.campagnolorestaurant.ca/upstairs-campagnolo/'
    },
    {
        name: 'The Oakwood',
        score: 8,
        date: new Date('July 26 2017'),
        link: 'http://www.theoakwood.ca/'
    },
    {
        name: 'Parallel 49 Street Kitchen',
        score: 6.425,
        date: new Date('September 27 2017'),
        link: 'http://parallel49brewing.com/street_kitchen'
    },
    {
        name: 'Hawksworth',
        score: 8.0875,
        date: new Date('September 20 2016'),
        link: 'https://hawksworthrestaurant.com/'
    },
    {
        name: 'Pourhouse',
        score: 6.95,
        date: new Date('March 28 2018'),
        link: 'http://www.pourhousevancouver.com/'
    },
    {
        name: 'Romer\'s Burger Bar',
        score: 6.425,
        date: new Date('September 3 2017'),
        link: 'http://romersburgerbar.com/'
    },
    {
        name: 'Bells & Whistles',
        score: 6.833333,
        date: new Date('April 11 2018'),
        link: 'https://www.bellsandwhistlesyvr.ca/'
    },
    {
        name: 'Crowbar',
        score: 8.5,
        date: new Date('May 11 2018'),
        link: 'https://crowbareastvan.com/'
    },
    {
        name: 'The Bottleneck',
        score: 7.325,
        date: new Date('June 6 2018'),
        link: 'http://www.thebottleneck.ca'
    },
    {
        name: 'Mamie Taylor\'s',
        score: 7.375,
        date: new Date('July 4 2018'),
        link: 'http://mamietaylors.ca/'
    },
    {
        name: 'Golden Era',
        score: 8.8625,
        date: new Date('October 3 2018'),
        link: 'https://www.instagram.com/goldeneraburger/'
    },
    {
        name: 'Downlow Burger Shack',
        score: 7.975 + 0.026,
        date: new Date('October 30 2018'),
        link: 'https://www.instagram.com/downlowburgers/'
    },
];

const multiplier = 12345; // shh, don't tell anyone

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
