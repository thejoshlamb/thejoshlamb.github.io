var multiplier = 12345;

var burgers = {
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

const numberWithCommas = function(x) {
    return Math.round(x).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

var table = document.getElementById('scoresTable');
var hiscores = [];
for (var item in burgers) {
    hiscores.push([item, burgers[item]*multiplier]);
}
hiscores.sort(function(a, b) {
    return b[1] - a[1];
});
var count = 1;
hiscores.forEach(function(burger) {
    var row = table.insertRow();
    var rank = row.insertCell(0);
    var name = row.insertCell(1);
    var score = row.insertCell(2);
    rank.innerText = count;
    name.innerText = burger[0];
    score.innerText = numberWithCommas(burger[1]);
    count += 1;
});