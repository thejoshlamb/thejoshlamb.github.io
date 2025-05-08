//	Define the starfield class.
class Starfield {
    constructor() {
        this.fps = 30;
        this.canvas = null;
        this.ctx = null; // Added for storing context
        this.width = 0;
        this.height = 0;
        this.minVelocity = 15;
        this.maxVelocity = 30;
        this.numStars = window.innerWidth / 6; // Renamed for clarity
        this.stars = []; // Initialize as an empty array
        this.intervalId = 0;
        this.containerDiv = null; // Store container
    }

    //	The main function - initialises the starfield.
    initialise(div) {
        this.containerDiv = div;
        this.width = window.innerWidth;
        this.height = window.innerHeight;

        this.canvas = document.createElement('canvas');
        this.containerDiv.appendChild(this.canvas);
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        this.ctx = this.canvas.getContext('2d');

        window.addEventListener('resize', () => {
            this.width = window.innerWidth;
            this.height = window.innerHeight;
            if (this.canvas) { // Check if canvas exists
                this.canvas.width = this.width;
                this.canvas.height = this.height;
                this.draw(); // Redraw on resize
            }
        });
    }

    start() {
        this.stars = []; // Clear existing stars if any
        for (let i = 0; i < this.numStars; i++) {
            this.stars.push(new Star(
                Math.random() * this.width,
                Math.random() * this.height,
                Math.random() * 3 + 1,
                (Math.random() * (this.maxVelocity - this.minVelocity)) + this.minVelocity
            ));
        }

        if (this.intervalId) clearInterval(this.intervalId); // Clear existing interval if any
        this.intervalId = setInterval(() => {
            this.update();
            this.draw();
        }, 1000 / this.fps);
    }

    stop() {
        clearInterval(this.intervalId);
        this.intervalId = 0;
    }

    update() {
        const dt = 1 / this.fps;
        for (let i = 0; i < this.stars.length; i++) {
            const star = this.stars[i];
            star.y += dt * star.velocity;

            if (star.y > this.height) {
                this.stars[i] = new Star(
                    Math.random() * this.width,
                    0,
                    Math.random() * 3 + 1,
                    (Math.random() * (this.maxVelocity - this.minVelocity)) + this.minVelocity
                );
            }
        }
    }

    draw() {
        if (!this.ctx) return; // Ensure context is available

        this.ctx.fillStyle = '#000000';
        this.ctx.fillRect(0, 0, this.width, this.height);

        this.ctx.fillStyle = '#ffffff';
        for (let i = 0; i < this.stars.length; i++) {
            const star = this.stars[i];
            this.ctx.fillRect(star.x, star.y, star.size, star.size);
        }
    }
}

class Star {
    constructor(x, y, size, velocity) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.velocity = velocity;
    }
}

// Initialize and start the starfield when the script loads and DOM is available
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('star-container');
    if (container) {
        const starfield = new Starfield();
        starfield.initialise(container);
        starfield.start();
    } else {
        console.error('Starfield container #star-container not found.');
    }
});