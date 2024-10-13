// character.js
// This module defines the Character, Adventurer, and Companion classes for the game.

export class Character {
    // Maximum health constant for all characters
    static MAX_HEALTH = 100;

    // Constructor to initialize a character with a name
    constructor(name) {
        this.name = name; // Character's name
        this.health = Character.MAX_HEALTH; // Set initial health to maximum
        this.inventory = []; // Initialize an empty inventory
    }

    // Method to roll a dice and return a random result
    roll(mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod; // Roll a 20-sided dice and apply modifier
        console.log(`${this.name} rolled a ${result}.`); // Log the result
        return result; // Return the result
    }
}

// Adventurer class extends Character and adds specific features
export class Adventurer extends Character {
    // Define valid roles for adventurers
    static ROLES = ["Fighter", "Healer", "Wizard"];

    // Constructor to initialize an adventurer with a name and role
    constructor(name, role) {
        super(name); // Call the parent constructor
        // Validate the role
        if (!Adventurer.ROLES.includes(role)) {
            throw new Error(`Invalid role. Must be one of: ${Adventurer.ROLES.join(", ")}`);
        }
        this.role = role; // Set the adventurer's role
        this.inventory.push("bedroll", "50 gold coins"); // Add default items to inventory
    }

    // Method for the adventurer to scout ahead
    scout() {
        console.log(`${this.name} is scouting ahead...`); // Log scouting action
        super.roll(); // Call the roll method from the parent class
    }

    // Method for the adventurer to duel another character
    duel(opponent) {
        console.log(`\n${this.name} (${this.role}) is dueling ${opponent.name} (${opponent.role})!`);
        console.log(`Starting Health - ${this.name}: ${this.health}, ${opponent.name}: ${opponent.health}`);

        let round = 1; // Initialize round counter
        // Continue the duel while both characters have health above 50
        while (this.health > 50 && opponent.health > 50) {
            console.log(`\nRound ${round}:`); // Log the current round
            const thisRoll = this.roll(); // Roll for this adventurer
            const opponentRoll = opponent.roll(); // Roll for the opponent

            // Determine the outcome of the round
            if (thisRoll > opponentRoll) {
                opponent.health -= 1; // Decrease opponent's health
                console.log(`${this.name} wins this round!`);
            } else if (opponentRoll > thisRoll) {
                this.health -= 1; // Decrease this adventurer's health
                console.log(`${opponent.name} wins this round!`);
            } else {
                console.log("It's a tie! No damage dealt."); // Log a tie
            }

            // Log current health status
            console.log(`Current Health - ${this.name}: ${this.health}, ${opponent.name}: ${opponent.health}`);
            round++; // Increment round counter
        }

        // Determine the winner of the duel
        const winner = this.health > 50 ? this : opponent;
        console.log(`\nThe duel is over! ${winner.name} is victorious!`);
        console.log(`Final Health - ${this.name}: ${this.health}, ${opponent.name}: ${opponent.health}`);
    }
}

// Companion class extends Character and represents a companion character
export class Companion extends Character {
    // Constructor to initialize a companion with a name and type
    constructor(name, type) {
        super(name); // Call the parent constructor
        this.type = type; // Set the companion's type (e.g., Cat, Dog)
    }
}