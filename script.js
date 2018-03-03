var burgers = {
    'Trans Am': 8875,
    'Hawksworth Lounge': 7852,
    'Moderne Burger': 4321,
    'Bistro Wagon rouge': 6992,
    'Monarch Burger at The American': 8303,
    'Pourhouse': 3464,
    'Campagnolo Upstairs': 8000,
    'The Oakwood Burger 2.0': 6666,
    'Parallel 49 Street Kitchen': 5909,
    'Hy\'s Steakhouse': 6210,
    'Local Omnivore': 5005
};

var table = document.getElementById('scoresTable');
var hiscores = [];
for (var item in burgers) {
    hiscores.push([item, burgers[item]]);
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
    score.innerText = burger[1];
    count += 1;
});