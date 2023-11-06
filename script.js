// yes, i agree, this is lazily written

const list = [
    {
        name: 'Parallel 49 Street Kitchen',
        score: 6.65,
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
        score: 6.375,
        date: new Date('September 3 2017'),
        link: 'http://romersburgerbar.com/'
    },
    {
        name: 'Bells & Whistles',
        score: 6.6833333,
        date: new Date('April 11 2018'),
        link: 'https://www.bellsandwhistlesyvr.ca/'
    },
    {
        name: 'The Bottleneck',
        score: 7.325,
        date: new Date('June 6 2018'),
        link: 'http://www.thebottleneck.ca'
    },
//     Asked to be removed
//     {
//         name: 'Golden Era',
//         score: 8.8625,
//         date: new Date('October 3 2018'),
//         link: 'https://www.rivalburger.club'
//     },
    {
        name: 'Downlow Burger Shack',
        score: 7.71875,
        date: new Date('October 30 2018'),
        link: 'https://www.instagram.com/downlowburgers/'
    },
    {
        name: 'Fable Diner',
        score: 7.5,
        date: new Date('November 23 2018'),
        link: 'http://fablediner.com/'
    },
    {
        name: 'Popina',
        score: 6.7,
        date: new Date('September 18 2018'),
        link: 'http://www.popinacanteen.com/'
    },
    {
        name: 'Vera\'s Burger Shack',
        score: 4.7,
        date: new Date('November 25 2018'),
        link: 'http://www.verasburgershack.com/'
    },
    {
        name: 'The Victor',
        score: 8.3875,
        date: new Date('December 13 2018'),
        link: 'https://www.parqvancouver.com/restaurants/the-victor/'
    },
    {
        name: 'Hundy',
        score: 8.0375,
        date: new Date('January 25 2019'),
        link: 'https://www.hundy.ca/'
    },
    {
        name: 'L\'Abbatoir',
        score: 7.458333333,
        date: new Date('March 31 2019'),
        link: 'https://www.labattoir.ca/'
    },
    {
        name: 'The Magnet',
        score: 8.1083,
        date: new Date('June 14 2019'),
        link: 'https://instagram.com/'
    },
    {
        name: 'Linh Cafe',
        score: 8.216666,
        date: new Date('July 19 2019'),
        link: 'http://linhcafe.com'
    },
    {
        name: 'The Ellis',
        score: 7.80875,
        date: new Date('September 13 2019'),
        link: 'https://www.theellis.ca/'
    },
    {
        name: 'Gotham Steakhouse',
        score: 7,
        date: new Date('October 10 2019'),
        link: 'https://gothamsteakhouse.com'
    },
    {
        name: 'Per Se Social Corner',
        score: 8.2375,
        date: new Date('November 1 2019'),
        link: 'https://persesocialcorner.com'
    },
    {
        name: 'To Dine For',
        score: 7.825,
        date: new Date('February 7 2020'),
        link: 'https://www.facebook.com/To-Dine-For-Eatery-401278653258975/'
    },
    {
        name: 'Street Hawker',
        score: 8.516,
        date: new Date('August 18 2023'),
        link: 'https://www.streethawker.ca/'
    },
    {
        name: 'Monzo',
        score: 8.925,
        date: new Date('November 4 2023'),
        link: 'https://www.monzoburger.com/'
    },
];

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
