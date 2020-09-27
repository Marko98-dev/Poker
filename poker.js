class Poker {
    constructor(name, amount, stake, win = false) {
        this.name = name;
        this.amount = amount;
        this.stake = stake;
        this.win = win;
        this.Rasing();
        this.collectingPot();
    }
    Rasing() {
        console.log(`${this.name} is rasing for ${this.stake} $ amount of money in his pocket is now : ${this.amount - this.stake} $`);
    }

    collectingPot() {
        if(this.win == true) {
            console.log(`${this.name} wins this round`);
        }
    }
}

let a = new Poker('Player A', 10, 2);
let b = new Poker('Player B', 10, 10);
let c = new Poker('Player C', 10, 4);
let d = new Poker('Player D', 12, 0, true);

let Players = [ a, b, c, d ];

let total = 0;

Players.forEach(player => {
    total += player.stake;
});

console.log(`Total Pot on the table is: ${total} $`);
