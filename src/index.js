// index.js
// This is the main entry point for the game, where we import modules and run the game logic.

// Import modules
import { abilities } from './abilities.js'; // Import abilities from abilities.js
import { Adventurer, Companion } from './character.js'; // Import classes from character.js
import { AdventurerFactory } from './adventurerFactory.js'; // Import AdventurerFactory from adventurerFactory.js

// Creating characters
const robin = new Adventurer("Robin", "Fighter"); // Create a new Adventurer named Robin
robin.companion = new Companion("Leo", "Cat"); // Assign a companion to Robin
robin.companion.companion = new Companion("Frank", "Flea"); // Assign a companion to Leo
robin.companion.companion.inventory = ["small hat", "sunglasses"]; // Add inventory to Frank

const healerFactory = new AdventurerFactory("Healer"); // Create a factory for Healers
const mage = healerFactory.generate("Merlin"); // Generate a new Mage named Merlin

// Example usage of abilities
robin.abilities = abilities; // Assign abilities to Robin
mage.abilities = abilities;   // Assign abilities to Merlin

// Demonstrating abilities
console.log("\nUsing abilities:"); // Log the start of ability demonstration
robin.abilities.heal(robin); // Robin uses the heal ability on himself
abilities.attack(robin, mage); // Robin attacks Merlin

// Functionality demonstration
console.log("\nDemonstrating functionality:"); // Log the start of functionality demonstration
robin.scout(); // Robin scouts ahead
mage.scout(); // Merlin scouts ahead

// Starting a duel between Robin and Merlin
console.log("\nStarting a duel between Robin and Merlin:"); // Log duel initiation
robin.duel(mage); // Robin duels Merlin