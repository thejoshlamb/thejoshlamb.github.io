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

//	Define the starfield class.
function Starfield() {
    this.fps = 30;
    this.canvas = null;
    this.width = 0;
    this.height = 0;
    this.minVelocity = 15;
    this.maxVelocity = 30;
    this.stars = 100;
    this.intervalId = 0;
}

//	The main function - initialises the starfield.
Starfield.prototype.initialise = function(div) {
    var self = this;

    //	Store the div.
    this.containerDiv = div;
    self.width = window.innerWidth;
    self.height = window.innerHeight;

    window.addEventListener('resize', function resize(event) {
        self.width = window.innerWidth;
        self.height = window.innerHeight;
        self.canvas.width = self.width;
        self.canvas.height = self.height;
        self.draw();
    });

    //	Create the canvas.
    var canvas = document.createElement('canvas');
    div.appendChild(canvas);
    this.canvas = canvas;
    this.canvas.width = this.width;
    this.canvas.height = this.height;
};

Starfield.prototype.start = function() {

    //	Create the stars.
    var stars = [];
    for(var i=0; i<this.stars; i++) {
        stars[i] = new Star(Math.random()*this.width, Math.random()*this.height, Math.random()*3+1,
            (Math.random()*(this.maxVelocity - this.minVelocity))+this.minVelocity);
    }
    this.stars = stars;

    var self = this;
    //	Start the timer.
    this.intervalId = setInterval(function() {
        self.update();
        self.draw();
    }, 1000 / this.fps);
};

Starfield.prototype.stop = function() {
    clearInterval(this.intervalId);
};

Starfield.prototype.update = function() {
    var dt = 1 / this.fps;

    for(var i=0; i<this.stars.length; i++) {
        var star = this.stars[i];
        star.y += dt * star.velocity;
        //	If the star has moved from the bottom of the screen, spawn it at the top.
        if(star.y > this.height) {
            this.stars[i] = new Star(Math.random()*this.width, 0, Math.random()*3+1,
                (Math.random()*(this.maxVelocity - this.minVelocity))+this.minVelocity);
        }
    }
};

Starfield.prototype.draw = function() {

    //	Get the drawing context.
    var ctx = this.canvas.getContext("2d");

    //	Draw the background.
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, this.width, this.height);

    //	Draw stars.
    ctx.fillStyle = '#ffffff';
    for(var i=0; i<this.stars.length;i++) {
        var star = this.stars[i];
        ctx.fillRect(star.x, star.y, star.size, star.size);
    }
};

function Star(x, y, size, velocity) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.velocity = velocity;
}


///////

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


document.getElementById('hiScores').onclick = function() {
    document.getElementById('scoresTable').style.display = "table";
    document.getElementById('aboutSection').style.display = "none";
    document.getElementById('faqSection').style.display = "none";
};

document.getElementById('about').onclick = function() {
    document.getElementById('scoresTable').style.display = "none";
    document.getElementById('aboutSection').style.display = "block";
    document.getElementById('faqSection').style.display = "none";
};

document.getElementById('faq').onclick = function() {
    document.getElementById('scoresTable').style.display = "none";
    document.getElementById('aboutSection').style.display = "none";
    document.getElementById('faqSection').style.display = "block";
};