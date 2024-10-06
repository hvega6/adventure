// Part 1: Humble Beginnings
const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"],
    companion: {
        name: "Leo",
        type: "Cat",
        companion: {
            name: "Frank",
            type: "Flea",
            inventory: ["small hat", "sunglasses"]
        }
    },
    roll(mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`);
        return result;
    }
};

// Logging Robin's inventory
console.log("Robin's inventory:");
for (let item of adventurer.inventory) {
    console.log(item);
}

// Part 2: Class Fantasy
class Character {
    static MAX_HEALTH = 100;

    constructor(name) {
        this.name = name;
        this.health = Character.MAX_HEALTH;
        this.inventory = [];
    }

    roll(mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`);
        return result;
    }
}

// Part 3: Class Features
class Adventurer extends Character {
    static ROLES = ["Fighter", "Healer", "Wizard"];

    constructor(name, role) {
        super(name);
        if (!Adventurer.ROLES.includes(role)) {
            throw new Error(`Invalid role. Must be one of: ${Adventurer.ROLES.join(", ")}`);
        }
        this.role = role;
        this.inventory.push("bedroll", "50 gold coins");
    }

    scout() {
        console.log(`${this.name} is scouting ahead...`);
        super.roll();
    }

    duel(opponent) {
        console.log(`\n${this.name} (${this.role}) is dueling ${opponent.name} (${opponent.role})!`);
        console.log(`Starting Health - ${this.name}: ${this.health}, ${opponent.name}: ${opponent.health}`);

        let round = 1;
        while (this.health > 50 && opponent.health > 50) {
            console.log(`\nRound ${round}:`);
            const thisRoll = this.roll();
            const opponentRoll = opponent.roll();

            if (thisRoll > opponentRoll) {
                opponent.health -= 1;
                console.log(`${this.name} wins this round!`);
            } else if (opponentRoll > thisRoll) {
                this.health -= 1;
                console.log(`${opponent.name} wins this round!`);
            } else {
                console.log("It's a tie! No damage dealt.");
            }

            console.log(`Current Health - ${this.name}: ${this.health}, ${opponent.name}: ${opponent.health}`);
            round++;
        }

        const winner = this.health > 50 ? this : opponent;
        console.log(`\nThe duel is over! ${winner.name} is victorious!`);
        console.log(`Final Health - ${this.name}: ${this.health}, ${opponent.name}: ${opponent.health}`);
    }
}

class Companion extends Character {
    constructor(name, type) {
        super(name);
        this.type = type;
    }
}

// Part 4: Class Uniforms
// (Already implemented in the classes above)

// Part 5: Gather your Party
class AdventurerFactory {
    constructor(role) {
        this.role = role;
        this.adventurers = [];
    }

    generate(name) {
        const newAdventurer = new Adventurer(name, this.role);
        this.adventurers.push(newAdventurer);
        return newAdventurer;
    }

    findByIndex(index) {
        return this.adventurers[index];
    }

    findByName(name) {
        return this.adventurers.find((a) => a.name === name);
    }
}

// Part 6 & 7: Developing Skills & Adventure Forth
// Creating characters
const robin = new Adventurer("Robin", "Fighter");
robin.companion = new Companion("Leo", "Cat");
robin.companion.companion = new Companion("Frank", "Flea");
robin.companion.companion.inventory = ["small hat", "sunglasses"];

const healerFactory = new AdventurerFactory("Healer");
const mage = healerFactory.generate("Merlin");

//Functionality
console.log("\nDemonstrating functionality:");
robin.scout();
mage.scout();

console.log("\nStarting a duel between Robin and Merlin:");
robin.duel(mage);



// You can continue to expand this system by adding more classes, methods, and interactions!
